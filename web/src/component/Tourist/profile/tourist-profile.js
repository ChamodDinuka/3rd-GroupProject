import React,{Component} from 'react'
import './tourist-profile.css'
import Navbar from '../../others/navbar/navbar'
import { Button } from 'react-bootstrap'

class Tourist_profile extends Component{
    render(){
        return(
            <><Navbar/>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="/images/online4.jpg"></img>
                        <h5>Check availability </h5>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/images/profile3.jpg"></img>
                        <h5>See tour guide profiles</h5>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/images/request2.jpg"></img>
                        <h5>Send request to tour guides</h5>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/images/waiti2.jpg"></img>
                        <h5>Wait until confirmation of request</h5>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/images/multiple.jpg"></img>
                        <h5>Request for multiple guides</h5>
                    </div>
                </div>
            </div>

            <div className="tourist-profile">

                <div className="guide-view">
                    <table>
                        <tbody>
                            <tr>
                                <td><i class="fa fa-user-circle" aria-hidden="true">   Kalana Mendis</i> </td>
                                <td><span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </td>
                                <td class="float=right">
                                    <Button id="guide" variant="success">Request</Button>
                                    <Button id="guide2" variant="success">View profile</Button>
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-user-circle" aria-hidden="true">   Shenal peris</i> </td>
                                <td><span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </td>
                                <td class="float=right">
                                    <Button id="guide" variant="success">Request</Button>
                                    <Button id="guide2" variant="success">View profile</Button>
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-user-circle" aria-hidden="true">   Tisara Perera</i> </td>
                                <td><span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </td>
                                <td class="float=right">
                                    <Button id="guide" variant="success">Request</Button>
                                    <Button id="guide2" variant="success">View profile</Button>
                                </td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-user-circle" aria-hidden="true">   Kasun Chamara</i> </td>
                                <td><span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </td>
                                <td class="float=right">
                                    <Button id="guide" variant="success">Request</Button>
                                    <Button id="guide2" variant="success">View profile</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
            </>
        )
    }
}

export default Tourist_profile