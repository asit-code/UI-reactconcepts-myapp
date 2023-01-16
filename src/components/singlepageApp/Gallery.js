import React from 'react'
import path from '../krishna.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style1.css'

const Gallery = () => {
  return (
    <div>
        <div className='container gallery'>
            <div className='row'>
                <div className='col-md-3'>
                    <img src={path} alt=''/>
                </div>
                <div className='col-md-3'>
                    <img src={path} alt=''/>
                </div>
                <div className='col-md-3'>
                    <img src={path} alt=''/>
                </div>
                <div className='col-md-3'>
                    <img src={path} alt=''/>
                </div>
                <div className='col-md-3'>
                    <img src={path} alt=''/>
                </div>
                <div className='col-md-3'>
                    <img src={path} alt=''/>
                </div>
                <div className='col-md-3'>
                    <img src={path} alt=''/>
                </div>
                <div className='col-md-3'>
                    <img src={path} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery