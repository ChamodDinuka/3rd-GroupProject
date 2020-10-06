import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

/**
* @author
* @function Subplans
**/

const Subplans = (props) => {
  return(
    <div>
        
        <div class="B-box">
            <div class="box">
                <div class="package">
                <Link to="/BronzePlan" ><img src="/images/bronze4.png"></img></Link>
                </div>
                    <span>
                        Bronze Package
                    <p>This is good package for a lot of members
                         in your team.you will receive hotel rooms 
                         with a vehicle for 5 days</p>
                    </span>
            </div> 
            <div class="box">
                <div class="package1">
                <Link to="/GoldPlan" ><img src="/images/gold.png"></img></Link>
                </div>
                    <span><h6>Gold Package</h6>
                        <p>In this package you receive hotel 
                            rooms and a vehicle for 5 days.select
                             and get the features.</p>
                        
                    </span>
            </div> 
            <div class="box">
                <div class="package1">
                <Link to="/SilverPlan" ><img src="/images/silver.png"></img></Link>
                </div>
                    <span>
                    <h6>Silver Package</h6>
                    <p>In this package you receive hotel rooms
                         with no vehicles for 4 days with 
                         reasonable price</p>
                    </span>
            </div>    
        </div>   
    </div>
   )

 }

export default Subplans;