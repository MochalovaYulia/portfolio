import React from 'react'
import CV from '../../assets/cv.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Скачать резюме</a>
        <a href='#contact' className='btn btn-primary'>Давай поговорим</a>
    </div>
  )
}
