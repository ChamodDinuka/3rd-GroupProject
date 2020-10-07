import React from 'react'
import './Subplanstyle.css'
import { Link } from 'react-router-dom';

/**
* @author
* @function Subplans
**/

const Subplans = (props) => {
  return(
    <div>
        <div class="row-plans">
                <div class="card-plans text-center">
                    <div class="card-plans-header">
                        <h5>Platinum Package </h5>
                    </div>
                    <div class="card-plans-body">
                        <p>Price $250</p>

                        <button class="btn btn-primary" id="packages">More</button>
                        <button class="btn btn-primary" id="packages">select</button> 
                        
                    </div>
                </div>

                <div class="card-plans text-center">
                    <div class="card-plans-header">
                        <h5>Silver Package </h5>
                    </div>
                    <div class="card-plans-body">
                        <p>Price $500</p>
                        <button class="btn btn-primary">More</button>
                        <button class="btn btn-primary">select</button> 
                    </div>
                    
                </div>

                <div class="card-plans text-center">
                    <div class="card-plans-header">
                        <h5>Gold Package </h5>
                    </div>
                    <div class="card-plans-body">
                        <p>Price $800</p>

                        <button class="btn btn-primary">More</button>
                        <button class="btn btn-primary">select</button> 
                    </div>
                </div>
        </div>
        
           
    </div>
   )

 }

export default Subplans;