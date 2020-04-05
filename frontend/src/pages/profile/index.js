import React from 'react';
import LogoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css'
import { useEffect } from 'react';
import api from '../../services/api'
import { useState } from 'react';

export default function Profile() {
    const [casos, setCasos] = useState([])

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setCasos(response.data)
        })
    }, [ongId])

    async function handleDeleteCaso(id) {
        try {
            await api.delete(`casos/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })
            setCasos(casos.filter(caso => caso.id !== id))
        } catch(err) {
            alert('Erro ao deletar seu caso.')
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Logo-heroes" />
                <span>Bem Vinda, {ongName}</span>
                <Link className="btn" to="/casos/new">Cadastras novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {casos.map(casos => (
                    <li key={casos.id}>
                        <strong>CASO: </strong>
                <p>{casos.title}</p>

                        <strong>DESCRIÇÃO: </strong>
                <p>{casos.description}</p>

                        <strong>VALOR: </strong>
                <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(casos.value)}</p>

                        <button onClick={() => {handleDeleteCaso(casos.id)}} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}