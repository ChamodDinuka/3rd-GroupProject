import React from 'react';
import'./style.css';
import Carousel from '../../components/Carousel';
import CityGuid from '../../components/CityGuide';
import FoodDrink from '../../components/FoodDrink';
import Subplans from '../../components/Subplans';



const Home = props=>{
    return(
    <div>
        <Carousel/>
        <Subplans/>
        <CityGuid/>
        <FoodDrink/>
    </div>
);
}

export default Home;
