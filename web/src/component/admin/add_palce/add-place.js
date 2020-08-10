import React,{Component} from 'react'
import './add-place.css'
import {Form,Button,Col} from 'react-bootstrap'

class Add_place extends Component{
    constructor(props) {
        super(props)
        this.state = {
          currentStep: 1,
          places:["aa","bb","cc"],
          email:  '',
          username: '',
          password: '', 
        }
      }
    
      handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
       
      handleSubmit = event => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
               Email: ${email} \n 
               Username: ${username} \n
               Password: ${password}`)
      }
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }
    
    /*
    * the functions for our button
    */
    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
          <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Previous
          </button>
        )
      }
      return null;
    }
    
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <3){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
          Next
          </button>        
        )
      }
      
      return null;
    }
    sub(){
        let currentStep = this.state.currentStep;
        if(currentStep==3){
            return(
          <button className="btn btn-primary float-right">Submit</button>
            )
        }
        return null;
    }
      
    render(){
        
        return(
            <div className="Add-place">
                <React.Fragment>
      
     

      
      {/* 
        render the form steps and pass required props in
      */}<Form onSubmit={this.handleSubmit}>
          <h5 id="add">Package Name</h5>
          <div className="form-body">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Place</Form.Label>
      <Form.Control type="text" placeholder="Enter Place" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Video Link</Form.Label>
      <Form.Control type="text" placeholder="Youtube Link" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="exampleForm.ControlTextarea">
    <Form.Label>Description</Form.Label>
    <textarea id="add" name="w3review" rows="4" cols="50"></textarea>
  </Form.Group>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Audio File</Form.Label>
      <Form.File id="exampleFormControlFile"  />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Image</Form.Label>
      <Form.File id="exampleFormControlFile"  />
    </Form.Group>
   
  </Form.Row>

 
   
      
          
        
          
          
       
        
        {this.previousButton()}
        {this.nextButton()}
        {this.sub()}
        </div>
      </Form>
      </React.Fragment>
            </div>   
        );
    }
}
function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          />
      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
          />
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />      
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
      </React.Fragment>
    );
  }
export default Add_place