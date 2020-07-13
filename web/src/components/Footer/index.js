import React from 'react'
import './style.css'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div>
                <footer>
            <div class="container-fluid p-0">
                <div class="row text-left">
                    <div class="col-md-5 col-sm-5">
                        <h4 class="text-light">About us</h4>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum maxime ea similique illum corrupti</p>
                            <p class="pt-4 text-muted">Copyright ©2019 All rights reserved | This template is made with by
                            <span> Iter</span>
                            </p>
                    </div>
                    <div class="col-md-5 col-sm-12">
                        <h4 class="text-light">Contact Us</h4>
                        <p class="text-muted">Stay Updated</p>
                        <form class="form-inline">
                            <div class="col pl-0">
                            <div class="input-group pr-5">
                            <input type="text" class="form-control bg-dark text-white" id="inlineFormInputGroupUsername2" placeholder="Email"></input>
                        <div class="input-group-prepend">
                        <div class="input-group-text">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                            </form>
                            </div>
                            <div class="col-md-2 col-sm-12">
                            <h4 class="text-light">Follow Us</h4>
                            <p class="text-muted">Let us be social</p>
                            <div class="column text-light">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-youtube"></i>
                            </div>
                            </div>
                 </div>
            </div>
            
        </footer>
    </div>
   )

 }

export default Footer