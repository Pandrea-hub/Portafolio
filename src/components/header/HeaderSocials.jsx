import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'


function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/andreavivi12/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://www.github.com/Pandrea-hub" target="_blank"><BsGithub/></a>
        <a href="https://www.twitter.com/AndreaVivi12" target="_blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials