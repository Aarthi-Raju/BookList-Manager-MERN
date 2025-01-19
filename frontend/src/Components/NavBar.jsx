import React from 'react'
import profileImg from "../images/Admin_female.png"
import { Link } from 'react-router-dom';
import webLogo from "../images/logo.png"
import "../global.css"

function NavBar() {
  return (
    <div id="nav">
        <div id="title_bar">
            <img src={webLogo} alt="" />
            <div id="nav_title"><Link to={"/"} className='link'>Book Man</Link></div>
        </div>
        <div id="user">
            <div id="login">Register / Login</div>
            <img src={profileImg} alt="" id="profile_img" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" />

            <div className="offcanvas offcanvas-end" data-bs-scroll="true" id="offcanvasWithBothOptions">
                <div className="offcanvas-header">
                    <div id="profile">
                        <img src={profileImg} alt="" id="profile_pic" height="90px" width="90px" />
                        <div id="user_name">Aarthi Katta</div>
                        <button id="update_profile">Upload Photo</button>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td><Link to={"/"} className='link'>Home</Link></td>
                            </tr>
                            <tr>
                                <td><Link to={"/books"} className='link'>Books List</Link></td>
                            </tr>
                            <tr>
                                <td><Link to={"/books/create"} className='link'>Add Book</Link></td>
                            </tr>
                            <tr>
                                <td><Link to={"/"} className='link'>Show Book</Link></td>
                            </tr>
                            <tr>
                                <td><Link to={"/"} className='link'>Edit Book</Link></td>
                            </tr>
                            <tr>
                                <td><Link to={"/"} className='link'>Delete Book</Link></td>
                            </tr>
                            <tr>
                                <td><Link to={"/"} className='link'>LogOut</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
