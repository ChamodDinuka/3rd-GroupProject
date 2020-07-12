import React,{Component} from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import firebase from '../../../../firebase'

class Update_package extends Component{
    constructor(props){
        
        super(props)
        console.log(this.props.Id)
        this.state={
            package_name:this.props.value.package_name[this.props.number],
            package_description:this.props.value.package_description[this.props.number],
            vehicle_type:this.props.value.vehicle_type[this.props.number],
            package_price:this.props.value.package_price[this.props.number],
            hotel_name:this.props.value.hotel_name[this.props.number],
            room_condition:this.props.value.room_condition[this.props.number]
        }
        
    }
    updatePackage=(e)=>{
        this.setState({
           package_name:e.target.value
            
        });
    }
    updateVehicle=(e)=>{
        this.setState({
            vehicle_type:e.target.value
        });
    }
    updateDescription=(e)=>{
      this.setState({
            package_description:e.target.value
      });console.log(this.state.hotel_name)
    }
    updateHotel=(e)=>{
        this.setState({
            hotel_name:e.target.value
            
        });console.log(this.state.hotel_name)
    }
    updateRoom=(e)=>{
        this.setState({
            room_condition:e.target.value
        });
    }
    updatePrice=(e)=>{
        this.setState({
            package_price:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.props.id)
        var db=firebase.firestore()
        var washingtonRef = db.collection("packages").doc(this.props.Id);

        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
            package_name:this.state.package_name,
			package_description:this.state.package_description,
            vehicle_type:this.state.vehicle_type,
        	hotel_name:this.state.hotel_name,
        	package_price:this.state.package_price,
        	room_condition:this.state.room_condition
        })
        
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
     // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    }
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
      <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Package Name</Form.Label>
      <Form.Control type="text" value={this.state.package_name} onChange={this.updatePackage} placeholder="Package Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Vehicle Type</Form.Label>
      <Form.Control as="select"  value={this.state.vehicle_type} onChange={this.updateVehicle} defaultValue="Choose...">
        <option>...</option>
        <option>Car</option>
        <option>Van</option>
        <option>Bike</option>
        <option>Tuk Tuk</option>
      </Form.Control>
    </Form.Group>
     </Form.Row>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Package Description</Form.Label>
    <Form.Control as="textarea"  value={this.state.package_description} onChange={this.updateDescription} rows="3" />
    </Form.Group>
    <Form.Group controlId="formGridAddress1">
    <Form.Label>Hotel Name</Form.Label>
    <Form.Control type="text"  value={this.state.hotel_name} onChange={this.updateHotel} placeholder="Hotel Name" />
    </Form.Group>

    <Form.Row>
     <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Rooms Condition</Form.Label>
      <Form.Control as="select"  value={this.state.room_condition} onChange={this.updateRoom} defaultValue="Choose...">
        <option>...</option>
        <option>Non AC</option>
        <option>AC</option>
        
      </Form.Control>
      </Form.Group>

    

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Package Price(Rs)</Form.Label>
      <Form.Control placeholder="Rs"  value={this.state.package_price} onChange={this.updatePrice} />
    </Form.Group>
    </Form.Row>

     <Button variant="primary" type="submit">
    Update
    </Button>
    </Form>
        );
    }
}
export default Update_package