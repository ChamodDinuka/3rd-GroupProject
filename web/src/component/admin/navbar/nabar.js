import React,{Component} from 'react';
import { Navbar,Nav,Dropdown,Modal } from 'react-bootstrap';
import './navbar.css';
import firebase from '../../../firebase'

class nabar extends Component{
  state={
    show:false,
    view:0,
    list:'false',
    user_reports:[]
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
    getAll=()=>{
      var db=firebase.firestore()
      db.collection("reports").get().then(function(querySnapshot) {
        var reports_type=[]
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            reports_type.push(doc.data().report_type);
        });
        this.setState({
          user_reports:reports_type
        });
    }.bind(this));
   
    }
    handleShow = () =>{
        this.setState({
            show:true
        });
    }
    closeView(){
		  this.setState({show:false});
	  }
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">iter</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                
              </Nav>
              <Nav>
              <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic" >
   {<i className="fa fa-bell-o" aria-hidden="true" onClick={this.getAll} ><a id="ico" >{this.state.view}</a></i>}
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {this.state.user_reports.map((answer, i) => {
    return(
     <Dropdown.Item  onClick={this.handleShow}>Reported {this.state.user_reports[i]}</Dropdown.Item>
    )
   })}
        
  </Dropdown.Menu>
</Dropdown>
                
                <Nav.Link eventKey={2} href="#memes">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Modal show={this.state.show} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton onClick={()=>{this.closeView()} }><b>View Report</b></Modal.Header>
                <div className="view">
                <b>Reporter:{' '}<h6>Mark Wood</h6></b>
                <b>Guide Name:{' '}<h6>Rashen Silva</h6></b>
                <b>Report Category<h6>Cheating</h6></b>
                <b>Report Description:<h6>He didn't come as he promised</h6></b>
                </div>
				

            </Modal>

          </>
        
        );
    }
    


}
export default nabar;