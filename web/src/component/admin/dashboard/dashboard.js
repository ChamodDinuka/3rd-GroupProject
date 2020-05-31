import React,{Component} from 'react';
import Nabar from '../navbar/nabar'
import Sidebar from '../sidebar/sidebar'
import './dashboard.css';

class Dashboard extends Component{
    render(){
        return(
            <><Nabar sticky="top"/>
            <><Sidebar /></>
            <div className="dashboard">
                Dashboard
  
            </div>
            </>
            
        );
        }
}
export default Dashboard;
