import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api'
import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import './styles.css';

export default function Login() {
    const [id, setId]  = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('login', {id})

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        } catch(err) {
            alert('Falha no login, Ong não cadastrada.')
        }
    }

    
    return (
        <div className="login-container">
    <section className="form">
        <img src={LogoImg} alt="LogoHero"/>
        <form onSubmit={handleLogin}>
            <h1>Faça seu Login</h1>

            <input placeholder="Insíra seu ID" 
            value={id}
            onChange={e => {setId(e.target.value)}}
            />
            <button className="btn" type="submit" >Entrar</button>

            <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#e02041"/>
                Não tenho cadastro</Link>
        </form>
    </section>

    <img src={HeroesImg} alt="Heroes"/>
    </div>
    );
}