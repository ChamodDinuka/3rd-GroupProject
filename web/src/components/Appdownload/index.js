import React from 'react'
import './style.css'

/**
* @author
* @function Appdownload
**/

const Appdownload = (props) => {
  return(
    <div>
            
                    <div class="row">
                   
                        <div class="col-md-7 col-sm-12">
                            <img  src="/images/appimage.png"/>
                        </div>
                        <div class="col-md-5 col-sm-12 h-10 w-2">

                            <div class="column-android">
                                <img src="/images/android.png"  />
                            </div>

                            <div class="column-apple">
                                <img src="/images/apple2.png"   />
                            </div>
                                
                        </div>
                    
                    </div>      
            
    </div>
   )

 }

export default Appdownload