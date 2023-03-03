import React from 'react'
import './portfolio.css'
import { PortfolioItems } from './PortfolioItems'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <PortfolioItems />
      </div>
    </section>
  )
}
