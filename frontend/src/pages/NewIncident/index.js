import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'

function NewIncident () {
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

        <form>
          <input placeholder='Case title' />
          <textarea placeholder='Description' />

          <input placeholder='Value in dollars' />

          <button className='button' type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident
