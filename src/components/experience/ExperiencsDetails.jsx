import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const data = [
    {
        icon: <BsPatchCheckFill/>,
        header: 'HTML',
        content: 'Experienced'
    },
    {
        icon: <BsPatchCheckFill/>,
        header: 'CSS',
        content: 'Intermediate'
    },
    {
        icon: <BsPatchCheckFill/>,
        header: 'JavaScript',
        content: 'Experienced'
    },
    {
        icon: <BsPatchCheckFill/>,
        header: 'Bootstrap',
        content: 'Experienced'
    },
    {
        icon: <BsPatchCheckFill/>,
        header: 'Tailwind',
        content: 'Experienced'
    },
    {
        icon: <BsPatchCheckFill/>,
        header: 'React',
        content: 'Experienced'
    }
]

export const ExperiencsDetails = () => {
  return (
    <>
        {
            data.map(({icon, header, content }) => {
                return (
                    <article className='experience__details'>
                        <div className='experience__details-icon'>{icon}</div>
                        <div>
                            <h4>{header}</h4>
                            <small className='text-light'>{content}</small>
                        </div>
                    </article>
                )
            })
        }
    </>
  )
}
