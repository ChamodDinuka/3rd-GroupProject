import React, { Component } from 'react';
import'./style.css';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Details from '../../components/Details';
import Appdownload from '../../components/Appdownload';




const Home = props=>{
    return(
    <div>
        
        <main>
            <Header/>
            <Details/>
            <Appdownload/>
            <Footer/>
        </main>




        
        
       
    </div>
);
}
export default Home;
