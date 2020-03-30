import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi';
import './styles.css'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be the hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiChevronLeft size={16} color="#e02041" />
                Não tenho cadastro</Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <div className="btn">Cadastrar</div>
                </form>
            </div>
        </div>
    );
}