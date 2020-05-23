import React from 'react'
import './style.css'

/**
* @author
* @function Carousel
**/

const Carousel = (props) => {
  return(
  <div>

    <div class="bs-example">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="6"></li>
            </ol>
        
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/images/sigiriya.jpg" class="d-block w-100" />
            </div>
            <div class="carousel-item">
                <img src="/images/slider3.jpg" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
                <img src="/images/slider1.jpg" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
                <img src="/images/slider2.jpg" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
                <img src="/images/slider4.jpg" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
                <img src="/images/slide6.jpg" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
                <img src="/images/slider7.jpg" class="d-block w-100"/>
            </div>
        </div>
                
            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
      </div>
    </div>
   )

 }

export default Carousel