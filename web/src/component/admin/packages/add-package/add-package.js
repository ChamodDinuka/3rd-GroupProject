import React,{Component} from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import './add-package.css'
import firebase from '../../../../firebase'
class Add_package extends Component{
    state={
        package_name:'',
        vehicle_type:'',
        package_description:'',
        hotel_name:'',
        package_price:'',
        room_condition:''
    }
    handleSubmit=(e)=>{
        console.log(this.state.vehicle_type)
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("packages").add({
          package_name:this.state.package_name,
          vehicle_type:this.state.vehicle_type,
          package_description:this.state.package_description,
          hotel_name:this.state.hotel_name,
          package_price:this.state.package_price,
          room_condition:this.state.room_condition
        }); 
        
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
      });
    }
    updateHotel=(e)=>{
        this.setState({
            hotel_name:e.target.value
        });
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
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Package Name</Form.Label>
      <Form.Control type="text" onChange={this.updatePackage} placeholder="Package Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Vehicle Type</Form.Label>
      <Form.Control as="select" onChange={this.updateVehicle} defaultValue="Choose...">
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
    <Form.Control as="textarea" onChange={this.updateDescription} rows="3" />
  </Form.Group>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Hotel Name</Form.Label>
    <Form.Control type="text" onChange={this.updateHotel} placeholder="Hotel Name" />
  </Form.Group>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Rooms Condition</Form.Label>
      <Form.Control as="select" onChange={this.updateRoom} defaultValue="Choose...">
        <option>...</option>
        <option>Non AC</option>
        <option>AC</option>
        
      </Form.Control>
    </Form.Group>

    

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Package Price(Rs)</Form.Label>
      <Form.Control placeholder="Rs" onChange={this.updatePrice} />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
        );
    }
}
export default Add_package;