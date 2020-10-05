import React,{Component} from 'react';
import './dashboard.css';
import {Bar,Line,Pie,Chart,ctx} from 'react-chartjs-2'
import  firebase from '../../../firebase'
import {Col,Row} from 'react-bootstrap'
const functions=firebase.functions(); 

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            country:{
                labels:['China','Japan','UK','USA','Others'],
                datasets:[{
                    label:'Tourist coutry chart',
                    data:[1000,150,180,260,50],
                    backgroundColor:['rgba(255, 0, 0, 0.2)','rgba(255, 0, 0, 0.4)','rgba(255, 0, 0, 0.6)','rgba(255, 0, 0, 0.8)','hsla(0, 100%, 30%, 0.3)']
        
    }]},
    users:{
        labels:['Jan','Feb','Mar','Apr','May'],
        datasets:[{
            label:'User chart',
            data:[1000,500,180,700,201],
            backgroundColor:['rgba(255, 0, 0, 0.2)','rgba(255, 0, 0, 0.4)','rgba(255, 0, 0, 0.6)','rgba(255, 0, 0, 0.8)','hsla(0, 100%, 30%, 0.3)']

}]},
   package:{
    labels:['Silver','Gold','Platinum'],
    datasets:[{
        label:'Package chart',
        data:[900,700,480],
        backgroundColor:['rgba(255, 0, 0, 0.2)','rgba(255, 0, 0, 0.4)','rgba(255, 0, 0, 0.6)']

}]}
}}
addUser=(e)=>{
    e.preventDefault();
    console.log(document.getElementById("new-email").value)
    const new_email=document.getElementById("new-email").value;
    const helloWorld=functions.httpsCallable("helloWorld");
    helloWorld({email:new_email}).then(result=>{
        console.log(result);
    })
}
deleteUser=(e)=>{
    e.preventDefault();
    
    const new_email=document.getElementById("new-email").value;
    const deleteUser=functions.httpsCallable("deleteUser");
    deleteUser({email:new_email}).then(result=>{
        console.log(result);
    })
}
   render(){ 
    
        return(
            <div className="dashboard">
                <div className="charts">
                <Row>
                <Col md={4} sm={6}>
                <Pie  data={this.state.country} />
                </Col>
                <Col md={4} sm={6}>
                <Line  data={this.state.users} />
                </Col>
                <Col md={4} sm={6}>
                <Bar  data={this.state.package} />
                </Col>
                </Row>
                </div>
                <div className="add">
                    <input type="email" id="new-email"/>
                    <button type="submit" onClick={this.addUser}>submit</button>
                    <button type="submit" onClick={this.deleteUser}>delelte</button>
                </div>
            </div>
           
            
        );
        }
}
export default Dashboard;
