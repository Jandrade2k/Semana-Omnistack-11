import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi';
import './styles.css'
import api from '../../services/api'
import { useState } from 'react';

export default function NewCaso() {
    const [titulo, settitulo] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    async function handleNewCaso(e) {
        e.preventDefault();

        const data = {
            titulo,
            description,
            value
        }

        try {
            await api.post('casos', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')

        } catch(err) {
            alert('Erro ao cadastrar o caso. Tente novamente.')
        }
    }


    return (
        <div className="newCaso-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be the hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiChevronLeft size={16} color="#e02041" />
                Voltar para a home</Link>
                </section>
                <form onSubmit={handleNewCaso}>
                    <input placeholder="Título do caso"
                        value={titulo}
                        onChange={e => settitulo(e.target.value)}
                    />
                    <textarea placeholder="Descrição do caso"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />


                    <button className="btn" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}