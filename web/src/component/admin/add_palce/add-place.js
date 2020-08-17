import React,{Component} from 'react'
import './add-place.css'
import {Form,Button,Col,ProgressBar} from 'react-bootstrap'
import firebase from '../../../firebase'
import { storage } from 'firebase'

class Add_place extends Component{
    constructor(props) {
        super(props)
        this.state = {
          temp_video:'',
          temp_audio:'',
          temp_description:'',
          temp_image:'',
          prog_audio:'',
          prog_image:'',
          package:'',
          currentStep: 1,
          places:["aa","bb","cc","dd"],
          videos:[ ],
          audio:[],
          description:[],
          image:[],
        }
      }
      componentDidMount(){
        console.log(this.state.places.length)
       
      }
    
      handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
       
      handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.video)
      }
      
      _next = () => {
        let currentStep = this.state.currentStep
        
        this.state.videos.push({"video":this.state.temp_video,"name":this.state.places[currentStep-1]})
        this.state.audio.push({"audio":this.state.temp_audio,"name":this.state.places[currentStep-1],"progress":this.state.prog_audio})
        this.state.description.push({"description":this.state.temp_description,"name":this.state.places[currentStep-1]})
        this.state.image.push({"image":this.state.temp_image,"name":this.state.places[currentStep-1],"progress":this.state.prog_image})
        console.log(this.state.audio[currentStep-1].audio,this.state.audio[currentStep-1].name)
        

        currentStep = currentStep >= this.state.places.length-1? this.state.places.length: currentStep + 1
        
        this.setState({
          currentStep: currentStep,
        })
        if(this.state.videos.length<currentStep){
          this.setState({
            temp_video:'',
          })
        }else{
          this.setState({
            temp_video:this.state.videos[currentStep-1].video,
           })
        }
        if(this.state.description.length<currentStep){
          this.setState({
            temp_description:'',
          })
        }else{
          this.setState({
            temp_description:this.state.description[currentStep-1].description,
           })
        }
        if(this.state.image.length<currentStep){
          this.setState({
            prog_image:'',
          })
        }else{
          this.setState({
            prog_image:this.state.image[currentStep-1].progress,
           })
        }
        if(this.state.audio.length<currentStep){
          this.setState({
            prog_audio:'',
          })
        }else{
          this.setState({
            prog_audio:this.state.audio[currentStep-1].progress,
           })
        }
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        
        
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep,
         
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
            type="reset" value="reset" onClick={this._prev}>
          Previous
          </button>
        )
      }
      return null;
    }
    
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <this.state.places.length){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="reset" value="reset" onClick={this._next}>
          Next
          </button>        
        )
      }
      
      return null;
    }
    sub(){
        let currentStep = this.state.currentStep;
        if(currentStep==this.state.places.length){
            return(
          <button className="btn btn-primary float-right">Submit</button>
            )
        }
        return null;
    }
    video=(e)=>{
    
     this.setState({
       temp_video:e.target.value
       
     })
       // this.state.video[this.state.currentStep-1]=e.target.value
        
    }
    description=(e)=>{
        this.setState({
          temp_description:e.target.value
        })
    }
    audio=e=>{
      const file=e.target.files[0]
      const storage=firebase.storage()
      const uploadTask = storage.ref(`/audio/${file.name}`).put(file)
      //initiates the firebase side uploading 
      uploadTask.on('state_changed', 
      (snapShot) => {
        const complete=Math.round((snapShot.bytesTransferred/snapShot.totalBytes)*100)
        this.setState({prog_audio:complete})
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('audio').child(file.name).getDownloadURL()
         .then(fireBaseUrl => {
           this.setState({
             temp_audio:fireBaseUrl
           })
         })
         
      })
    }
    image=(e)=>{
      const file=e.target.files[0]
      const storage=firebase.storage()
      const uploadTask = storage.ref(`/images/${file.name}`).put(file)
      //initiates the firebase side uploading 
      uploadTask.on('state_changed', 
      (snapShot) => {
        const complete=Math.round((snapShot.bytesTransferred/snapShot.totalBytes)*100)
        this.setState({prog_image:complete})
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(file.name).getDownloadURL()
         .then(fireBaseUrl => {
           this.setState({
             temp_image:fireBaseUrl
           })
           
         })
      })
        
      
     
      
    }
      
    render(){
        
        return(
            <div className="Add-place">
                <React.Fragment>
      
     

      
      {/* 
        render the form steps and pass required props in
      */}<Form onSubmit={this.handleSubmit}>
          <h5 id="add">Package Name</h5>
          <div className="form-body" >
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail" >
      <Form.Label>Place</Form.Label>
      <Form.Control type="text"  placeholder="Enter Place"  value={this.state.places[this.state.currentStep-1]}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Video Link</Form.Label>
      <Form.Control type="text" placeholder="Youtube Link" onChange={this.video}  value={this.state.temp_video} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="exampleForm.ControlTextarea">
    <Form.Label>Description</Form.Label>
    <textarea id="add"  rows="4" cols="50" onChange={this.description} value={this.state.temp_description}></textarea>
  </Form.Group>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Audio File</Form.Label><br/>
      <input type="file"  onChange={this.audio} />
      <ProgressBar animated now={this.state.prog_audio} />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Image</Form.Label><br/>
      <input type="file" onChange={this.image} />
      <ProgressBar animated now={this.state.prog_image} />
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
export default Add_place