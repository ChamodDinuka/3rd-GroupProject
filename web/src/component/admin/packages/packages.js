import React,{Component} from 'react'
import './packages.css'
import {Card,Button,Modal,Nav, CardGroup,CardDeck,Row,Col} from 'react-bootstrap'
import Add_package from './add-package/add-package'
import firebase from '../../../firebase'
import { database } from 'firebase'

class Packages extends Component{
	constructor(){
		super()
		this.state={
			package_name:[],
			package_description:[],
            vehicle_type:[],
        	hotel_name:[],
        	package_price:[],
        	room_condition:[]
		}
	  }
	 componentDidMount(){
		var db = firebase.firestore();
		db.collection("packages")
    .onSnapshot(function(querySnapshot) {
		var name = [];
		var description=[];
		var vehicle = [];
		var hotel = [];
		var price = [];
		var room = [];
        querySnapshot.forEach(function(doc) {
			name.push(doc.data().package_name);
			description.push(doc.data().package_description);
			vehicle.push(doc.data().vehicle_type);
			hotel.push(doc.data().hotel_name);
			price.push(doc.data().package_price);
			room.push(doc.data().room_condition)
			
        });
		console.log("Current cities in CA: ", name.join(", "));
		this.setState({
			package_name:name,
			package_description:description,
			vehicle_type:vehicle,
			hotel_name:hotel,
			package_price:price,
			room_condition:room
		});
    }.bind(this));

	 }
	  handleModel(){
		this.setState({show:true})
		console.log(this.state.show);
	  }
	  closeModel(){
		 this.setState({show:false});
		 console.log("hii");
	  }
	
    render(){
		
        return(
            <div className="packages">
		
				<Row >
				{this.state.package_name.map((answer, i) => {     
			console.log(answer)  
			return(
			<Col md={3} sm={4}>
			<Card >
				
				<Card.Body>
		<Card.Title>{this.state.package_name[i]}</Card.Title>
					<Card.Text>
						{this.state.package_description[i]}
    				</Card.Text>
					<Button variant="primary">View</Button>{' '}
					<Button variant="warning">Update</Button>
				</Card.Body>
			</Card> </Col>             
			// Return the element. Also pass key     
			)
		 })}</Row>
              
			<>
			<Button variant="success" onClick={()=>{this.handleModel()}}><i class="fa fa-plus-circle" aria-hidden="true"></i>New package</Button>  
			<Modal show={this.state.show} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton onClick={()=>{this.closeModel()} }><b>Add Package</b></Modal.Header>
                   <Add_package/>

                </Modal>
				</>
				
            
                
            </div>
        );
    }
}
export default Packages;