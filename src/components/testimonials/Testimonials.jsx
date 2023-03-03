import React from 'react'
import { ClientReview } from './ClientReview'
import './testimonials.css'

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className='container testimonial__container'>
        <ClientReview />
      </div>
    </section>
  )
}
