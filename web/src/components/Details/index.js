import React from 'react'
import './style.css'
/**
* @author
* @function Details
**/

const Details = (props) => {
  return(
    <div>
                <section class="section1 container-fluid p-0">
                <div class="cover">
                    <div class="content "></div>
                </div>
                <div class="container-fluid text-center">
                    <div class="advantages d-flex flex-md-row flex-wrap justify-content-center">
                        <div class="rect text-center">
                                <h5>Easy Tracking</h5>
                                <p>Iter allows you to track specific location easier and will allow you to explore more with lesser time span. 
                                </p>
                        </div>

                        <div class="rect" >
                            <h5>Information Everywhere</h5>
                            <p>We grant you  the latest and correct information on the places you visit via audio video description
                            </p>
                        </div>
                        <div class="rect">
                            <h5>Explore a land of MIracle</h5>
                            <p>Sri Lanka is a place that will always make you astonished.
                                Ourpackages will give you the maximum experience for an affordable price.
                            </p>
                        </div>
                        <div class="rect">
                            <h5>Get to know the services</h5>
                            <p>We will  you the service charges in each location,so you won't be cheated by anyone,anymore.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="Forwhom text-center">
                    <div class="cards" >
                        <div class="d-flex flex-row justify-content-center flex-wrap ">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src="/images/tourists2.jpg"/>
                                    <div class="title">
                                        <h5>Tourists</h5>
                                    </div>
                                    <p class="card-text">Iter will grant you the best experience 
                                        for an affordable amount of money without
                                         causing much trouble
                                    </p>
                                </div>
                            </div>
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src="/images/tourguide.jpg"/>
                                    <div class="title">
                                        <h5>TourGuide</h5>
                                    </div>
                                    <p class="card-text">Iter will grant you the best experience 
                                        for an affordable amount of money without
                                         causing much trouble
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>Join us today and start an unforgettable adventure</h1>
                    <a href="#" class="btn btn-primary px-5 py-2 mb-5">Let's get started</a>
                </div>
            </section>

    </div>
   )

 }

export default Details