import React,{Component} from 'react'
import './packages.css'
import {Card,Button,Modal,Nav, CardGroup,CardDeck,Row,Col} from 'react-bootstrap'
import Add_package from './add-package/add-package'
import firebase from '../../../firebase'
import { database } from 'firebase'
import View_package from './view-package/view-package'
import Update_package from './update-package/update-package'

class Packages extends Component{
	constructor(props){
		super(props)
		this.state={
			number:'',
			id:[],
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
		var Id=[];
        querySnapshot.forEach(function(doc) {
			name.push(doc.data().package_name);
			description.push(doc.data().package_description);
			vehicle.push(doc.data().vehicle_type);
			hotel.push(doc.data().hotel_name);
			price.push(doc.data().package_price);
			room.push(doc.data().room_condition);
			Id.push(doc.id);
        });
		console.log("Current cities in CA: ", name.join(", "));
		this.setState({
			package_name:name,
			package_description:description,
			vehicle_type:vehicle,
			hotel_name:hotel,
			package_price:price,
			room_condition:room,
			id:Id
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
	  handleView(i){
		  this.setState({
			  view:true,
			  number:i
		  });
	  }
	  handleUpdate(i){
		this.setState({
			update:true,
			number:i
		});
	}
	  closeView(){
		  this.setState({view:false});
	  }
	  closeUpdate(){
		this.setState({update:false});
	}
	
    render(){
		
        return(
            <div className="packages">
		
				<Row >
				{this.state.package_name.map((answer, i) => {     
			console.log(this.state.id[i])  
			return(
			<Col md={3} sm={4}>
			<Card >
				
				<Card.Body>
					<Card.Title>{this.state.package_name[i]}</Card.Title>
					<Card.Text>
						{this.state.package_description[i]}
    				</Card.Text>
					<Button variant="primary" onClick={()=>{this.handleView(i)}}>View</Button>{' '}
					<Button variant="warning" onClick={()=>{this.handleUpdate(i)}}>Update</Button>
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

			<Modal show={this.state.view} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton onClick={()=>{this.closeView()} }><b>View Package</b></Modal.Header>
				<View_package value={this.state} number={this.state.number}/>
				

            </Modal>

			<Modal show={this.state.update} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton onClick={()=>{this.closeUpdate()} }><b>Update Package</b></Modal.Header>
                   <Update_package value={this.state} number={this.state.number} Id={this.state.id[this.state.number]}/>

            </Modal>
				
				</>
				
            
                
            </div>
        );
    }
}
export default Packages;