import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

/**
* @author
* @function 
**/

const Navbar = (props) => {
  return(
    <div>
        <div className="top-nav-bar">
                <div className="search-box">
                    <input type="text" class="form-control"/>
                    <span class="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></span>
                </div>
                <div class="menu-bar">
                    <ul>
                        <li><NavLink to="/register">Sign Up</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </div>
        </div>

    </div>
   )

 }

export default Navbar;