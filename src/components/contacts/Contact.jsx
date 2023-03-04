import React from 'react'
import './contact.css'
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
          <input 
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input 
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea 
            name='message' 
            rows='7' 
            placeholder='Your Message' 
            required
          />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

