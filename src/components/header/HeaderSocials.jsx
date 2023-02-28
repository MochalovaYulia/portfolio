import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {SlSocialVkontakte} from 'react-icons/sl'
import {BsInstagram} from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com' target='_blank'><BsGithub /></a>
        <a href='https://vk.com/julsmoo' target='_blank'><SlSocialVkontakte /></a>
        <a href='https://www.instagram.com/julliamochalova' target='_blank'><BsInstagram /></a>
    </div>
  )
}
