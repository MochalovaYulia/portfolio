import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
      id: 1,
      img: IMG1,
      title: 'Crypto Currency Dashboard & Financial Visualizatoion',
      github: "https://github.com",
      demo: 'https://dribbble.com'
    },
    {
      id: 2,
      img: IMG2,
      title: 'Charts templates & infographics in Figma',
      github: "https://github.com",
      demo: 'https://dribbble.com'
    },
    {
      id: 3,
      img: IMG3,
      title: 'Figma dashboard UI kit for data design web apps',
      github: "https://github.com",
      demo: 'https://dribbble.com'
    },
    {
      id: 4,
      img: IMG4,
      title: 'Maintaining tasks and tracking progress',
      github: "https://github.com",
      demo: 'https://dribbble.com'
    },
    {
      id: 5,
      img: IMG5,
      title: 'Charts templates & infographics in Figma',
      github: "https://github.com",
      demo: 'https://dribbble.com'
    },{
      id: 6,
      img: IMG6,
      title: 'Chatrs templates & infographics in Figma',
      github: "https://github.com",
      demo: 'https://dribbble.com'
    }
  ]

export const PortfolioItems = () => {
  return (
    <>
        {
            data.map(({id, img, title, github, demo}) => {
                return (
                    <article key={id} className='portfolio__item'>
                        <div className='portfolio__item-img'>
                            <img src={img} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio__item-cta'>
                            <a href={github} className='btn' target='_blank'>GitHub</a>
                            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                )
            })
        }
    </>
  )
}

