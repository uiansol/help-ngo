import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

function Logon () {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin (evt) {
    evt.preventDefault()

    try {
      const response = await api.post('sessions', { id })
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)

      history.push('/profile')
    } catch (error) {
      alert('Login fail, try it again.')
    }
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Be The Hero' />

        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <input
            placeholder='Your ID'
            value={id}
            onChange={evt => setId(evt.target.value)}
          />
          <button className='button' type='submit'>Enter</button>

          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='#E02041' />
            I don't have an account
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt='Heroes' />
    </div>
  )
}

export default Logon
