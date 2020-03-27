import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { FiLogIn } from 'react-icons/fi';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }catch(err) {
            alert('Não foi possível logar, certifique que seu id está correto.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt=""/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e=> setId(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt=""/>
        </div>
    );
}