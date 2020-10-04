import React,{Component} from 'react'
import './tourist-profile.css'
import Navbar from '../../others/navbar/navbar'
import { Button } from 'react-bootstrap'

class Tourist_profile extends Component{
    render(){
        return(
            <><Navbar/>
            <div className="tourist-profile">
                <div className="details">
                    <p id="instruction"><b>Steps To Connect A Tour Giude</b> </p>
                    <ul id="instruction">
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>  Check available tour guides for your package from the right hand side list</li><br/>
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>  See profile of tour guide if you want </li><br/>
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>  Send a request to the guide by pressing request button</li><br/>
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>  Wait untill he confirm your request. You will recieve notification if he accept or reject</li><br/>
                        <li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>  You can request for multiple guides in case you have to travel with the guide who accept first</li><br/>
                    </ul>
                </div>
                <div className="guide-view">
                    <ul>
                        <li><i class="fa fa-user-circle" aria-hidden="true"></i> kalana 
                         <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <Button id="guide" variant="success">Request</Button>
                        </li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
}
export default Tourist_profile