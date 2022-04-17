import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineHistory} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {TiContacts} from 'react-icons/ti'
import {useState} from 'react'

function Nav() {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#'?'active':''}><BiHomeAlt/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about'?'active':''}><BiUserCircle/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><AiOutlineHistory/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#contact'?'active':''}><TiContacts/></a> 
    </nav>
  )
}

export default Nav