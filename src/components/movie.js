import React from 'react'
import './style.css'

export default function Movie(props) {
  return (
    <div className='movie'>
        <img src={props.image} alt=''></img>
        <h4>{props.name}</h4>
        <p><b>Likes: {props.likes}</b></p>
        <button>Book Now</button>
    </div>
  )
}
