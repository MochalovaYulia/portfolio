import React from 'react'
import { CTA } from './CTA'
import './header.css'

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Привет, Я</h5>
        <h1>Юлия Мочалова</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <div className='me'>
        <img src='' alt='me' />
      </div>

        <a href='#contact' className='scroll__down'>Прокрутить вниз</a>
      </div>
    </header>
  )
}
