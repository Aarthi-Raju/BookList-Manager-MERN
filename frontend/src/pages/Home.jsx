import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import "../global.css"

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <div id="home">
        <div id="homeLeft">
          <div id="homeTitle">The first problem for all of us, is not to learn, but to unlearn</div>
          <button id="showBooks"><Link to={"/books"} className='link' style={{ color: "white" }}>Go to BooksList</Link></button>
        </div>
        <form action="">
          <div id="formTitle">SignUp</div>
          <div id="formInps">
            <input type="text" name="" id="" placeholder="Name" />
            <input type="text" placeholder="Email Id" />
            <input type="text" name="" id="" placeholder="Password" />
          </div>
          <div id="formButtons">
            <button>Sign Up</button>
            <button>Login</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Home
