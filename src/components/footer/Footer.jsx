import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Logo</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_sosials'>
        <a href='https://facebook.com'> <FaFacebookF/> </a>
        <a href='https://instagram.com'> <BsInstagram/> </a>
        <a href='https://twitter.com'> <IoLogoTwitter/> </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}
