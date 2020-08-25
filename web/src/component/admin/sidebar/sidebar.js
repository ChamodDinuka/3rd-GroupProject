import React,{Component  } from "react";
import { Nav } from 'react-bootstrap';
import './sidebar.css'

class Sidebar extends Component{
    render(){
        return(
       
            <div className="admin-side">
                <ul>
                    <li id="side"><a href="/admin">Dashboard</a></li>
                    <li id="side"><a href="/admin/addPlace">Add Place</a></li>
                    <li id="side"><a  href="/admin/packages">Packages</a></li>
                </ul>
            </div>
            
        
        )
    }
}
export default Sidebar;