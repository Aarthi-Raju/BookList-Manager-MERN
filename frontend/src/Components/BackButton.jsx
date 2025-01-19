import React from 'react'
import { Link } from 'react-router-dom'


function BackButton(props) {
  return (
    <div id='backIcon'>
      {
        (props.back == "home") ? (<Link to={"/"}><i class="bi bi-box-arrow-in-left" style={{color:"black"}}></i></Link>) : (<Link to={"/books"}><i class="bi bi-box-arrow-in-left" style={{color:"black"}}></i></Link>)
      }
    </div>
  )
}

export default BackButton
