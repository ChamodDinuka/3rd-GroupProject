import React,{Component} from 'react'
import {Card,Image,Col,Button,Row,OverlayTrigger,Popover} from 'react-bootstrap'
import Navbar from '../../others/navbar/navbar'
import './tourist-home.css'
import firebase from '../../../firebase'
import Chat from '../../others/chatbot/chatbot'

class Tourist_home extends Component{

    constructor(props){
        super(props);
        this.state={
            
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
           
         
        }.bind(this));
        console.log(this.state.img)
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
                        <Button variant="danger">Audio</Button>{' '}
                        <Button variant="warning">Video</Button>{' '}
                        </div>
                        
                        </div>
                     </div>
                    );

                    
                    
                })}
                
            </div>
            </>
        );
    }
}
export default Tourist_home