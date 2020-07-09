import React from 'react'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

/**
* @author
* @function BronzePlan

**/

const BronzePlan
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

export default BronzePlan
