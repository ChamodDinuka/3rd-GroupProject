import React from 'react';
import './App.css';

import AboutUs from './containers/AboutUs';
import Login from './containers/Login';
import Register from './containers/Register';
import TourGuideRegister from './containers/TourGuideRegister';
import TouristRegister from './containers/TouristRegister';
import ContactUs from './containers/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import {BrowserRouter , Router, Switch, Route} from 'react-router-dom';
import Dashboard from './component/admin/dashboard/dashboard';






function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/admin" component ={Dashboard}/>
        <Navbar/>
      </Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/register" component ={Register}/>
        <Route path="/login" component ={Login}/>
        <Route path="/tourguideregister" component ={TourGuideRegister}/>
        <Route path="/touristregister" component ={TouristRegister}/>
        <Route path="/aboutUs" component ={AboutUs}/>
        <Route path="/contactus" component ={ContactUs}/>
        <Switch>
        <Route exact path="/admin" />
        <Footer/>
      </Switch>
        
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
