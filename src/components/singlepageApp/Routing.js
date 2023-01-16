import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Gallery from './Gallery'
import Home from './Home'
import InvalidPage from './InvalidPage'
import Services from './Services'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/contactus' element={<ContactUs/>} />
            <Route path='*' element={<InvalidPage/>} />
        </Routes>
    </div>
  )
}

export default Routing