import React,{Component} from 'react';
import './dashboard.css';
import  firebase from '../../../firebase'

class Dashboard extends Component{
    state={
        email:''
    }
    submito=(e)=>{
        console.log(this.state.email)
        const db = firebase.firestore();
        db.collection("user").doc("LA").set({
            email: this.state.email,
            state: "CA",
            
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
    handle=(e)=>{
        this.setState({email:e.target.value});
        
    }
        render(){ 
        return(
            <div className="dashboard">
                Dashboard
            <input  onChange={this.handle} type="text"/>
            <button type="submit" onClick={this.submito}>submit</button>
            </div>
           
            
        );
        }
}
export default Dashboard;
