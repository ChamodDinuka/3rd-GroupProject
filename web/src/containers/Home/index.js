import React from 'react';
import'./style.css';
import Carousel from '../../components/Carousel';
import CityGuid from '../../components/CityGuide';
import FoodDrink from '../../components/FoodDrink';
import Footer from '../../components/Footer';



const Home = props=>{
    return(
    <div>
        <Carousel/>
        <CityGuid/>
        <FoodDrink/>
        <Footer/>
    </div>
);
}

export default Home;
