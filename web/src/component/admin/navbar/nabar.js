import React,{Component} from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import './navbar.css';

class nabar extends Component{
    render(){
        return(
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Squiral</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Notification</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
    


}
export default nabar;