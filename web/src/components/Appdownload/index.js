import React from 'react'
import './style.css'

/**
* @author
* @function Appdownload
**/

const Appdownload = (props) => {
  return(
    <div>
            <section class="section2 container-fluid p-0">
                    <div class="row">
                   
                        <div class="col-md-7 col-sm-12">
                            <img  src="/images/download.jpg"/>
                        </div>
                        <div class="col-md-5 col-sm-12 h-10 w-2">
                            <div class="column">
                                <div class="android">
                                    <img src="/images/android.png"/>
                                </div>
                                <div class="apple">
                                    <img src="/images/apple.png"/>
                                </div> 
                            </div>
                                
                        </div>
                    
                    </div>      
            </section>
    </div>
   )

 }

export default Appdownload