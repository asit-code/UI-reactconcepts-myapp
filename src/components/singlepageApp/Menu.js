import React from 'react'
import {NavLink} from 'react-router-dom'
import './style1.css'

const Menu = () => {
  return (
    <div>
        <ul className='menu'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutus">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
        </ul>
    </div>
  )
}

export default Menu