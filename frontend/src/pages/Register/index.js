import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'


import './styles.css'

import logoImg from '../../assets/logo.svg'

function Register () {
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

        <form>
          <input placeholder='NGO name' />
          <input type='email' placeholder='e-mail' />
          <input placeholder='Whatsapp' />

          <div className='input-group'>
            <input placeholder='City' />
            <input placeholder='UF' style={{ width: 80 }} />
          </div>

          <button className='button' type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
