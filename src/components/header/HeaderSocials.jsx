import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'


function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com" target="andrea-viviana-diaz-fonseca-7aa269214"><AiFillLinkedin/></a>
        <a href="https://www.github.com" target="Pandrea-hub"><BsGithub/></a>
        <a href="https://www.twitter.com" target="AndreaVivi12"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials