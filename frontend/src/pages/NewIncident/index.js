import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './style.css';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const id_ongs = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };
        
        try {
            await api.post('/incidents/new', data, {
                headers: {
                    Authorization: id_ongs,
                }
            });
            history.push('/profile');
        }catch (err) {
            alert('Não foi possível cadastrar uma novo caso.')
        }
    }

    return(
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt=""/>

                    <h1>Cadastro novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>
                    <Link to="/profile" className="back-link" >
                        <FiArrowLeft size={16} color="#e02041" />
                        voltar aos casos cadastrados
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}> 
                    <input 
                        placeholder="Titulo"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input type="text" 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button onClick={handleNewIncident} className="button" type="submit" >Cadastrar</button>
                </form>
                
            </div>
        </div>
    );
}