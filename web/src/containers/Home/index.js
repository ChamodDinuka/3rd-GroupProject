import React from 'react';
import'./style.css';
import Carousel from '../../components/Carousel';
import CityGuid from '../../components/CityGuide';
import FoodDrink from '../../components/FoodDrink';



const Home = props=>{
    return(
    <div>
        <Carousel/>
        <CityGuid/>
        <FoodDrink/>
    </div>
);
}

export default Home;
