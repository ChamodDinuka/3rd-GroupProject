import React,{Component} from 'react'
import {Card,Image,Col,Button,Row,OverlayTrigger,Popover,Modal} from 'react-bootstrap'
import Navbar from '../../others/navbar/navbar'
import './tourist-home.css'
import firebase from '../../../firebase'
import Chat from '../../others/chatbot/chatbot'
import ReactAudioPlayer from 'react-audio-player';

class Tourist_home extends Component{

    constructor(props){
        super(props);
        this.state={
            show:false,
            audio_num:'',
            place:[],
            description:[],
            img:[],
            audio:[],
            video:[]
        }
    
    }
    componentDidMount(){
        var db=firebase.firestore()
        
        db.collection("places").get().then(function(querySnapshot) {
           
            querySnapshot.forEach(function(doc) {
                doc.data().places.map((data,i)=>{
                    
                    this.setState({
                        place:[...this.state.place,doc.data().places],
                        description:[...this.state.description,doc.data().description[i].description],
                        video:[...this.state.video,doc.data().videos[i].video],
                        audio:[...this.state.audio,doc.data().audio[i].audio],
                        img:[...this.state.img,doc.data().image[i].image]
                    })
                })
               
                // doc.data() is never undefined for query doc snapshots
            }.bind(this));
           console.log(this.state.audio)
         
        }.bind(this));
        console.log(this.state.img)
    }
    playAudio=(i)=>{
        this.setState({
            show:true,
            audio_num:i
        })
        
        
    }
    handleClose=()=>{
        this.setState({
            show:false
        })
    }

    render(){
        
        
        return(
            <><Navbar/>
            <div className="home">
            <OverlayTrigger
                trigger="click"
                key='top'
                placement='top'
                overlay={
                    <Popover id={`popover-positioned-top`}>
                    
                    
                            <Chat/>
                    
                    </Popover>
                }
            >
      <Button id="tourist" variant="success"><i class="fa fa-whatsapp" aria-hidden="true"></i> </Button>
    </OverlayTrigger>
                
            
                {this.state.place.map((data,i)=>{
                    
                    return(
                        <div className="home-card">
                        <div className="home-image">
                            <img src={this.state.img[i] ||"https://via.placeholder.com/400x300"} height="300" width="400"/>
                        </div>
                        <div className="home-body">
                    <h5>{data[i]}</h5>
                    <p>{this.state.description[i]}</p>
                        <div className="action">
                        <Button variant="danger" onClick={()=>this.playAudio(i)}>Audio</Button>{' '}
                        <Button variant="warning">Video</Button>{' '}
                        </div>
                        
                        </div>
                     </div>
                    );

                    
                    
                })}
                
            </div>
            <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Audio Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ReactAudioPlayer
          src={this.state.audio[this.state.audio_num]}
            autoPlay
            controls
        />
        </Modal.Body>
        
      </Modal>
            </>
        );
    }
}
export default Tourist_home