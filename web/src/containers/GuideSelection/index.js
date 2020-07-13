import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'


class GuideSelection extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            email : "",
            password : ""
        }
    }

    operation()
    {
        alert("Do you want to logout?")
    }
    render()
    {
        return(
            <div>
                <div className="top-nav-bar">
                    <div class="menu-bar">
                        <ul>
                            <li><Link to ="/Login"><button type="submit" onClick={()=>this.operation()}>Log Out</button></Link></li>
                        </ul>
                    </div>
                </div>
                <section class="header">
                <div class="sidebar">
                   
                </div>
                    
                </section>
            </div>

        )
    }
}


   

export default GuideSelection