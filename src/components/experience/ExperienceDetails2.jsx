import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const data = [
    {
        icon: <BsPatchCheckFill/>,
        header: 'Node JS',
        content: 'Experienced'
    },
    {
        icon: <BsPatchCheckFill/>,
        header: 'MongoDB',
        content: 'Intermediate'
    },
    {
        icon: <BsPatchCheckFill/>,
        header: 'PHP',
        content: 'Intermediate'
    },
    {
        icon: <BsPatchCheckFill/>,
        header: 'MySQL',
        content: 'Basic'
    },
    {
        icon: <BsPatchCheckFill/>,
        header: 'Python',
        content: 'Experienced'
    }
]

export const ExperiencsDetails2 = () => {
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
