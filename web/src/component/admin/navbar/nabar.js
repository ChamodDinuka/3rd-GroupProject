import React,{Component} from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import './navbar.css';
import firebase from '../../../firebase'

class nabar extends Component{
  state={
    view:0
  }
  componentDidMount(){
    
      var db=firebase.firestore()
      db.collection("reports").where("view", "==", "false")
      .onSnapshot(function(querySnapshot) {
        var count=[]
        var i=0
        querySnapshot.forEach(function(doc) {
          count.push(doc.data())
          i+=1
          
        });console.log(i)
      this.setState({
        view:i
      });console.log(this.state.view)
    }.bind(this)); 
    
    
  }
    render(){
        return(
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">iter</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                
              </Nav>
              <Nav>
                <Nav.Link href="#deets"><i className="fa fa-bell-o" aria-hidden="true" ><a id="ico">{this.state.view}</a></i></Nav.Link>
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