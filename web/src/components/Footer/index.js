import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div>
        <section class="footer">
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-3">
                        <h1>Useful Links</h1>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Return Policy</p>
                        <p>Discount Coupons</p>
                    </div>

                    <div class="col-md-3">
                        <h1>Company</h1>
                        <p><NavLink to="/AboutUs">About Us</NavLink> </p>
                        <p><NavLink to="/ContactUs">Contact Us</NavLink></p>
                        <p>Career</p>
                        <p>Affiliate</p>
                    </div>

                    <div class="col-md-3">
                        <h1>Follow Us On</h1>
                        <p><i class="fa fa-facebook-official" aria-hidden="true"></i>  Facebook</p>
                        <p><i class="fa fa-youtube-play" aria-hidden="true"></i>  Youtube</p>
                        <p><i class="fa fa-linkedin-square" aria-hidden="true"></i>  inkedin</p>
                        <p><i class="fa fa-twitter-square" aria-hidden="true"></i>  Twitter</p>
                    </div>
                    <div class="col-md-3 footer-image">
                        <h1>Download App</h1>
                    </div>
                </div>
                <hr></hr>
                <p class="copyright">Made with by <i class="fa fa-heart-o"></i> CH2KN</p>
            </div>
        </section> 
    </div>
   )

 }

export default Footer