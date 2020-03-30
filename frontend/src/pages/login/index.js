import React from 'react';
import {Link} from 'react-router-dom'

import './styles.css';
import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';

export default function Login() {
    return (
        <div className="login-container">
    <section className="form">
        <img src={LogoImg} alt="LogoHero"/>
        <form>
            <h1>Faça seu Login</h1>

            <input placeholder="Insíra seu ID" />
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