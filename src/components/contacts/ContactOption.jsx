import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'

const data = [
    {
        messanger: 'Email',
        name: 'Yulia.mochalova.2001@mail.ru',
        link: 'mailto:Yulia.mochalova.2001@mail.ru'
    },
    {
        messanger: 'Messenger',
        name: 'YuliaMochalova',
        link: 'https://m.me/yuliamochalova'
    },
    {
        messanger: 'WhatsApp',
        name: '+123456789',
        link: 'https://api.whatsapp.com/send?phone=+233557283888'
    }
]

export const ContactOption = () => {
  return (
    <>
        {
            data.map(({ messanger, name, link}) =>{
                return (
                    <article className='contact__option'>
                        < MdOutlineEmail className='contact__option-icon'/>
                        <h4>{messanger}</h4>
                        <h5>{name}</h5>
                        <a href={link} target='_blank'>Send a message</a>
                    </article>
                )
            })
        }
    </>
  )
}
