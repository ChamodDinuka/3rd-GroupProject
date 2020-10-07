import React from 'react'
import './style.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div>
        <header>
            <div class="container-fluid p-0">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="#"><img class="logo" src="/images/logo.png"/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="mr-auto"></div>
                        <ul class="navbar-nav">
                        
                        <li class="nav-item">
                            <a class="nav-link" href="/register"><button class="btn btn-primary px-5 py-2">Sign Up</button></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login"><button class="btn btn-primary px-5 py-2">Log In</button></a>
                        </li>
                        
                        </ul>
                    </div>
                </nav>
            </div>


            <div class="container text-center">
                <div class="row">
                    <div class="col-md-7 col-sm-12">
                        <h6>WELCOME TO</h6>
                        <h1>SRI LANKA</h1>
                        <p>Iter is a tourist guide application that is to solve many problems 
                            in the Tourism Industry in Sri Lanka.It is designed not only for 
                            the visitors to Sri Lanka but also for  the tour guides who are 
                            willing to help the foreing tourists.We ensure ypur visit to Sri 
                            Lanka will be an unforgettable memory.Iter will not dissapoint your
                             selection and will grant you excellent service within Sri Lanka.
                        </p>
                        <a href="https://en.wikipedia.org/wiki/Sri_Lanka"><button class="btn btn-primary px-5 py-2">Explore more</button></a>
                    </div>
                    <div class="col-md-5 col-sm-12 h-10 w-2">
                        <img class="logo" src="/images/landing1.jpg"/>
                    </div>
                </div>

            </div>
        </header>
    </div>
   )

 }

export default Header