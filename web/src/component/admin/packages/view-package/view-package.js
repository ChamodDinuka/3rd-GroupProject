import React,{Component} from 'react'
import './view-package.css'
import {Button} from 'react-bootstrap'
import firebase from '../../../../firebase'

class View_package extends Component{
    constructor(props){
        super(props)
        console.log(this.props.value.package_name[this.props.number])
    }
    deletePackage=()=>{
        console.log(this.props.number)
        var db=firebase.firestore()
        db.collection("packages").doc(this.props.value.id[this.props.number]).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    render(){
        return(
            <div className="view">
                <b>Package Name:{' '}<h6>{this.props.value.package_name[this.props.number]}</h6></b>
                <b>Package Description:<h6>{this.props.value.package_description[this.props.number]}</h6></b>
                <b>Hotel Name:<h6>{this.props.value.hotel_name[this.props.number]}</h6></b>
                <b>Room Condition:<h6>{this.props.value.room_condition[this.props.number]}</h6></b>
                <b>Vehicle Type:<h6>{this.props.value.vehicle_type[this.props.number]}</h6></b>
                <b>Price:<h6>{this.props.value.package_price[this.props.number]}</h6></b>
                <Button onClick={()=>{this.deletePackage(this.props.number)}}>Delete</Button>
               
                
            </div>
        );
    }
}
export default View_package