import React,{Component} from 'react'
import './view-package.css'

class View_package extends Component{
    constructor(props){
        super(props)
        console.log(this.props.value.package_name[this.props.number])
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
                
               
                
            </div>
        );
    }
}
export default View_package