import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './style.css';
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, serCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function hancleRegister(e) {
        e.preventDefault();

        const data = {
            name, 
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const respose = await api.post('ongs', data);
            alert(`Seu ID é: ${respose.data.id}`);
            history.push('/');
        }catch(err) {
            alert('Não foi possível cadastrar, tente novamente');
        }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt=""/>

                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajuda as pessoas a encontrarem os caso da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        Já sou cadastrado.
                        <FiArrowLeft size={16} color="#e02041" />
                    </Link>                    
                </section>

                <form onSubmit={hancleRegister}>
                    <input 
                        placeholder="Nome de sua ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Seu Email" type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}    
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="city"
                            value={city}
                            onChange={e => serCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit" >Cadastrar</button>
                </form>
                
            </div>
        </div>
    );
}