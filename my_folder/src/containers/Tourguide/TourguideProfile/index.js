import React from 'react'
import './style.css'

/**
* @author
* @function TourguideProfile

**/

const TourguideProfile = (props) => {
  return(
    <div>
        <section class="form">
            <form>
              <label for="fname">First name:</label><br>
              <input type="text" id="fname" name="fname"><br>
              <label for="lname">Last name:</label><br>
              <input type="text" id="lname" name="lname">
            </form>
        </section>
    </div>
   )

 }

export default  TourguideProfile
