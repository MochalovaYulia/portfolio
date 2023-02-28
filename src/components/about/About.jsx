import React from 'react'
import './about.css'
import ME from '../../assets/img.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Узнай</h5>
      <h2>Обо Мне</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt='about image' />
          </div>
        </div>
        <div className='about__content'>

          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Oпыт работы</h5>
              <small>3+ года работы</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Клиенты</h5>
              <small>200+ по всему миру</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Проекты</h5>
              <small>80+ завершенных проектов</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius dolorem maiores nihil ducimus at rem ullam reprehenderit quidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.
          </p>

          <a href='#contact' className='btn btn-primary'>Давай поговорим</a>
        </div>
      </div>
    </section>
  )
}

