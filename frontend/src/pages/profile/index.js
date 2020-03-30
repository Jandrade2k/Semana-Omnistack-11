import React from 'react';
import LogoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'
import './styles.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Logo-heroes" />
                <span>Bem Vinda, APAD</span>
                <Link className="btn" to="/caso">Cadastras novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$1.200,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
            <ul>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$1.200,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
            <ul>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$1.200,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
            <ul>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$1.200,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}