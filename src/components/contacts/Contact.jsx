import React from 'react'
import './contact.css'
import { ContactInput } from './ContactInput'
import { ContactOption } from './ContactOption'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
         <ContactOption />
        </div>
        <form action=''>
          <ContactInput/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

