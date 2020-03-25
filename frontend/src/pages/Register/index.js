import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

function Register () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister (evt) {
    evt.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('ongs', data)
      alert(`Your access ID: ${response.data.id}`)
      history.push('/')
    } catch (err) {
      alert('Register error, please try again!')
    }
  }

  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Register</h1>
          <p>Register your NGO, enter in the platform and help people help you.</p>

          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041' />
            I don't have an account
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder='NGO name'
            value={name}
            onChange={evt => setName(evt.target.value)}
          />
          <input
            type='email'
            placeholder='e-mail'
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          />
          <input
            placeholder='Whatsapp'
            value={whatsapp}
            onChange={evt => setWhatsapp(evt.target.value)}
          />

          <div className='input-group'>
            <input
              placeholder='City'
              value={city}
              onChange={evt => setCity(evt.target.value)}
            />
            <input
              placeholder='UF'
              style={{ width: 80 }}
              value={uf}
              onChange={evt => setUf(evt.target.value)}
            />
          </div>

          <button className='button' type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
