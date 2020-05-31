import React,{Component  } from "react";
import { Nav } from 'react-bootstrap';

class Sidebar extends Component{
    render(){
        return(
       
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link style={{position:"sticky",top:"56px"}} href="/home">Add place</Nav.Link><hr style={{position:"sticky",top:"96px"}}/>
            <Nav.Link style={{position:"sticky",top:"120px"}} eventKey="link-1">Packages</Nav.Link><hr style={{position:"sticky",top:"160px"}}/>
            <Nav.Link style={{position:"sticky",top:"160px"}} eventKey="link-2">Complaints</Nav.Link><hr style={{position:"sticky",top:"200px"}}/>
           
            </Nav>
        
        )
    }
}
export default Sidebar;