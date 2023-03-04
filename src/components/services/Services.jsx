import React from 'react'
import './services.css'
import { ServicesItem } from './ServicesItem'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <ServicesItem />
      </div>
    </section>
  )
}
