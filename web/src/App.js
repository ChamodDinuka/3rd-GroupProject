import React, { Component } from 'react';
import './App.css';
import AboutUs from './containers/AboutUs';
import Login from './containers/Login';
import Register from './containers/Register';
import TourGuideRegister from './containers/TourGuideRegister';
import TouristRegister from './containers/TouristRegister';
import ContactUs from './containers/ContactUs';
import Home from './containers/Home';
import {BrowserRouter , Router, Switch, Route} from 'react-router-dom';
import Dashboard from './component/admin/dashboard/dashboard';
import Sidebar from './component/admin/sidebar/sidebar'
import Navbar2 from './component/admin/navbar/nabar'
import Packages from './component/admin/packages/packages';
import firebase from 'firebase';
import fire from './firebase';

import Report from './component/user/report/report'
import Reprot from './component/user/report/report';
import SubscriptionPlan from './containers/SubscriptionPlan';
import BronzePlan from './containers/BronzePlan';
import GoldPlan from './containers/GoldPlan';
import SilverPlan from './containers/SilverPlan';
import Chatbot from './component/others/chatbot/chatbot'
import Add_palce from './component/admin/add_palce/add-place'
import Tourist_home from './component/Tourist/tourist-home/tourist-home'
import Tourist_profile from './component/Tourist/profile/tourist-profile'
import Guide_home from './component/guide/guide-home/guide-home'








function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route path="/report" exact component={Reprot}/>
      <Switch>
        
        <Route path="/admin"
         render={({ match: { url } }) => (
          <>
           <Navbar2 sticky="top"/>
           <Sidebar/>
           <Route path={`${url}/`} component={Dashboard} exact />
           <Route path={`${url}/packages`}  component={Packages} exact  />
           <Route path={`${url}/addPlace`}  component={Add_palce} exact/>
          </>
         )}
        />
        
        </Switch>
  
        <Route path="/" exact component ={Home}/>
        <Route path="/tourist" exact component={Tourist_home}/>
        <Route path="/tourist/profile" exact component={Tourist_profile}/>
        <Route path="/chat" exact component={Chatbot}/>
        <Route path="/guide" exact component={Guide_home}/>
        <Route path="/register" component ={Register}/>
        <Route path="/login" component ={Login}/>
        <Route path="/tourguideregister" component ={TourGuideRegister}/>
        <Route path="/touristregister" component ={TouristRegister}/>
        <Route path="/aboutUs" component ={AboutUs}/>
        <Route path="/contactus" component ={ContactUs}/>
        <Route path="/SubscriptionPlan" component ={SubscriptionPlan}/>
        <Route path="/BronzePlan" component ={BronzePlan}/>
        <Route path="/GoldPlan" component ={GoldPlan}/>
        <Route path="/SilverPlan" component ={SilverPlan}/>
        
        <Switch>
        <Route exact path="/admin" />
        
      </Switch>
        
      </div>
      
      
      </BrowserRouter>
      
      
    );
      }
  
  
  
  
  

  



export default App;
