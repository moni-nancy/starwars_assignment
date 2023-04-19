import React from 'react'
import {ReactComponent as Logo} from '../images/logo.svg';
import '../styles/header.css';

export default function Header() {
  return (
    <div className='movie-header'>
   <Logo id='logo-image'/>
    </div>
  )
}
