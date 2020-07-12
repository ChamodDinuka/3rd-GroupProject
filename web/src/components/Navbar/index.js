import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'
import {Button} from 'react-bootstrap'
/**
* @author
* @function 
**/

const Navbar = (props) => {
  return(
    <div>
        <div className="top-nav-bar">
        <NavLink to ="/"><img class="logo" src="/images/logo.png"/></NavLink>
                <div className="search-box">
                    <input type="text" class="form-control"/>
                    <span class="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></span>
                </div>
                <div class="menu-bar">
                    <ul>
                     <Button variant="warning" href="/register">Sign Up</Button>{' '}
                     <Button variant="warning" href="/login">Login</Button>{' '}
                        
                    </ul>
                </div>
        </div>

    </div>
   )

 }

export default Navbar;