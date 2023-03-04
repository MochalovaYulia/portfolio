import React from 'react'
import { CTA } from './CTA'
import './header.css'
import me from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>HI, I</h5>
        <h1>Mochalova Yulia</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={me} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}
