import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

/**
* @author
* @function GoldPlan

**/

const GoldPlan
 = (props) => {
  return(
    <div>
        <Form>
            <ul>
                <Link to="/TouristRegister" ><button  type="button">SELECT</button></Link>
            </ul>
        </Form>    
    </div>
   )

 }

export default GoldPlan
