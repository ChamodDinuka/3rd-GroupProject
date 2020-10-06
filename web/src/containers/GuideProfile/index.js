import React,{Component} from 'react';
import firebase, { auth } from 'firebase';
import fire from '../../firebase';
import Home from '../Home';


class guideProfile extends Component{

    
    
    render(){
        return(
            <div>
                <h1>you are loged in</h1>
                <button onClick={() => fire.auth().signOut()}>Logout</button>
            </div>
            
        );
    }
}
export default guideProfile;