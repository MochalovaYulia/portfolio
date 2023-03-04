import React from 'react'
import './experience.css'
import { ExperiencsDetails2 } from './ExperienceDetails2'
import { ExperiencsDetails } from './ExperiencsDetails'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Sckills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <ExperiencsDetails/>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <ExperiencsDetails2/>
          </div>
        </div>
      </div>
    </section>
  )
}

