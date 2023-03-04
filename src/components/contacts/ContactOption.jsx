import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const data = [
    {
        icon: <MdOutlineEmail/> ,
        messanger: 'Email',
        name: 'Yulia.mochalova.2001@mail.ru',
        link: 'mailto:Yulia.mochalova.2001@mail.ru'
    },
    {
        icon: <FaFacebookMessenger/> ,
        messanger: 'Messenger',
        name: 'YuliaMochalova',
        link: 'https://m.me/yuliamochalova'
    },
    {
        icon: <BsWhatsapp/> ,
        messanger: 'WhatsApp',
        name: '+123456789',
        link: 'https://api.whatsapp.com/send?phone=+233557283888'
    }
]

export const ContactOption = () => {
  return (
    <>
        {
            data.map(({icon, messanger, name, link}) =>{
                return (
                    <article className='contact__option'>
                        <div className='contact__option-icon'>{icon}</div>
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
