import React from 'react'

import {ReactComponent as Load} from '../images/loader.svg';
import '../styles/header.css';

export default function Loader() {
  return (
    <div className='loader-container'>
   <Load id='loader'/>
    </div>
  )
}