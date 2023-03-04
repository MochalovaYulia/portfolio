import React from 'react'
import { BiCheck } from 'react-icons/bi'

const data = [
    {
        icon: <BiCheck />,
        header: 'UI/UX Design',
        content: 'Lorem ipsum dolor sit amet consectetur elit.'
    },
    {
        icon: <BiCheck />,
        header: 'Web Development',
        content: 'Lorem ipsum dolor sit amet consectetur elit.'
    },
    {
        icon: <BiCheck />,
        header: 'Content Creation',
        content: 'Lorem ipsum dolor sit amet consectetur elit.'
    }
]

export const ServicesItem = () => {
    return (
        <>
            {
                data.map(({ icon, header, content }) => {
                    return (
                        <article className='service'>
                            <div className='service__head'>
                                <h3>{header}</h3>
                            </div>
                            <ul className='service__list'>
                                <li>
                                    <div className='service__list-icon'>{icon}</div>
                                    <p>{content}</p>
                                </li>
                                <li>
                                    <div className='service__list-icon'>{icon}</div>
                                    <p>{content}</p>
                                </li>
                                <li>
                                    <div className='service__list-icon'>{icon}</div>
                                    <p>{content}</p>
                                </li>
                                <li>
                                    <div className='service__list-icon'>{icon}</div>
                                    <p>{content}</p>
                                </li>
                                <li>
                                    <div className='service__list-icon'>{icon}</div>
                                    <p>{content}</p>
                                </li>
                                <li>
                                    <div className='service__list-icon'>{icon}</div>
                                    <p>{content}</p>
                                </li>
                            </ul>
                        </article>
                    )
                })
            }
        </>
    )
}
