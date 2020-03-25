import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

function NewIncident () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')

  async function handleNewIncident (evt) {
    evt.preventDefault()

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')
    } catch (error) {
      alert('Erro on case register, try ir again!')
    }
  }

  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Register new case</h1>
          <p>Detail your case to find a hero to solve it.</p>

          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#E02041' />
            Back to home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder='Case title'
            value={title}
            onChange={evt => setTitle(evt.target.value)}
          />
          <textarea
            placeholder='Description'
            value={description}
            onChange={evt => setDescription(evt.target.value)}
          />

          <input
            placeholder='Value in dollars'
            value={value}
            onChange={evt => setValue(evt.target.value)}
          />

          <button className='button' type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident
