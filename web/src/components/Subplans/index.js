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
            </div> 
            <div class="box">
                <div class="package1">
                <Link to="/GoldPlan" ><img src="/images/gold.png"></img></Link>
                </div>
            </div> 
            <div class="box">
                <div class="package1">
                <Link to="/SilverPlan" ><img src="/images/silver.png"></img></Link>
                </div>
            </div>    
        </div>   
    </div>
   )

 }

export default Subplans;