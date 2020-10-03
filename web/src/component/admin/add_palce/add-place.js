import React,{Component} from 'react'
import './add-place.css'
import {Form,Button,Col,ProgressBar} from 'react-bootstrap'
import firebase from '../../../firebase'
import GoogleMapReact from 'google-map-react';
import { storage } from 'firebase'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
          package:'Silver Package',
          currentStep: 1,
          places:["anuradapura","Yala","Sinharaja","Hikkaduwa"],
          videos:[ ],
          audio:[],
          description:[],
          image:[],
        }
      }
      static defaultProps = {
        center: {
          lat: 7.262315,
          lng: 80.477027
        },
        zoom: 8
      };
      componentDidMount(){
        console.log(this.state.places.length)
       
      }
    
      handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
       
      handleSubmit =async (event) => {
        event.preventDefault()
        let currentStep = this.state.currentStep

        
        let newArray =await Array.from(this.state.videos);
        newArray[currentStep-1]={"video":this.state.temp_video,"name":this.state.places[currentStep-1]}
        await this.setState({videos: newArray});

        newArray =await Array.from(this.state.description);
        newArray[currentStep-1]={"description":this.state.temp_description,"name":this.state.places[currentStep-1]}
        await this.setState({ description: newArray });

        newArray =await Array.from(this.state.audio);
        newArray[currentStep-1]={"audio":this.state.temp_audio,"name":this.state.places[currentStep-1],"progress":this.state.prog_audio}
        await this.setState({audio: newArray});

        newArray =await Array.from(this.state.image);
        newArray[currentStep-1]={"image":this.state.temp_image,"name":this.state.places[currentStep-1],"progress":this.state.prog_image}
        await this.setState({image: newArray});

       const db=firebase.firestore()
        db.collection("places").add({
         package:this.state.package,
         places:this.state.places,
         videos:this.state.videos,
         audio:this.state.audio,
         description:this.state.description,
         image:this.state.image,

      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      }); 
      }
      _next = () => {
        let currentStep = this.state.currentStep

        let newArray = Array.from(this.state.videos);
        newArray[currentStep-1]={"video":this.state.temp_video,"name":this.state.places[currentStep-1]}
        this.setState({videos: newArray});

        newArray = Array.from(this.state.description);
        newArray[currentStep-1]={"description":this.state.temp_description,"name":this.state.places[currentStep-1]}
        this.setState({description: newArray});

        newArray = Array.from(this.state.audio);
        newArray[currentStep-1]={"audio":this.state.temp_audio,"name":this.state.places[currentStep-1],"progress":this.state.prog_audio}
        this.setState({audio: newArray});

        newArray = Array.from(this.state.image);
        newArray[currentStep-1]={"image":this.state.temp_image,"name":this.state.places[currentStep-1],"progress":this.state.prog_image}
        console.log(newArray)
        this.setState({image: newArray});
        console.log(this.state.image)
      
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
            temp_image:''
          })
        }else{
          this.setState({
            temp_image:this.state.image[currentStep-1].image,
            prog_image:this.state.image[currentStep-1].progress,
           })
        }
        if(this.state.audio.length<currentStep){
          this.setState({
            temp_audio:'',
            prog_audio:'',
          })
        }else{
          this.setState({
            temp_audio:this.state.audio[currentStep-1].audio,
            prog_audio:this.state.audio[currentStep-1].progress,
           })
        }
      
        console.log(currentStep  ,this.state.image[currentStep-1])
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        
        let newArray = Array.from(this.state.videos);
        newArray[currentStep-1]={"video":this.state.temp_video,"name":this.state.places[currentStep-1]}
        this.setState({videos: newArray});

        newArray = Array.from(this.state.description);
        newArray[currentStep-1]={"description":this.state.temp_description,"name":this.state.places[currentStep-1]}
        this.setState({description: newArray});

        newArray = Array.from(this.state.audio);
        newArray[currentStep-1]={"audio":this.state.temp_audio,"name":this.state.places[currentStep-1],"progress":this.state.prog_audio}
        this.setState({audio: newArray});

        newArray = Array.from(this.state.image);
        newArray[currentStep-1]={"image":this.state.temp_image,"name":this.state.places[currentStep-1],"progress":this.state.prog_image}
        this.setState({image: newArray});

        
        

        currentStep = currentStep <= 1? 1: currentStep - 1
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
        } console.log("length ",this.state.videos.length,"temp",this.state.temp_video,"current",currentStep)
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
            temp_image:'',
            prog_image:'',
          })
        }else{
          this.setState({
            temp_image:this.state.image[currentStep-1].image,
            prog_image:this.state.image[currentStep-1].progress,
           })
        }
        if(this.state.audio.length<currentStep){
          this.setState({
            temp_audio:'',
            prog_audio:'',
          })
        }else{
          this.setState({
            temp_audio:this.state.audio[currentStep-1].audio,
            prog_audio:this.state.audio[currentStep-1].progress,
           })
        }
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
          <button className="btn btn-primary float-right" type="submit" onClick={this.handleSubmit}>Submit</button>
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
          console.log(fireBaseUrl)
           this.setState({
             temp_image:fireBaseUrl
           })
           
         })
      })
        
      
     
      
    }
      
    render(){
        
        return(
            <div className="Add-place">
              <div className="map" style={{ height: '150px', width: '100%' }}>
              <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <i class="fa fa-map-marker fa-2x" aria-hidden="true" lat={80.955413} lng={30.337844} text="My Marker" ></i>
          
        </GoogleMapReact></div>
                <React.Fragment>
      
     

      
      <Form >
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