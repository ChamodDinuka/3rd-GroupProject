import React from 'react';
import './App.css';

import AboutUs from './containers/AboutUs';
import Login from './containers/Login';
import Register from './containers/Register';
import ContactUs from './containers/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';







function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route path="/" exact component ={Home}/>
        <Route path="/register" component ={Register}/>
        <Route path="/login" component ={Login}/>
        
        <Route path="/aboutUs" component ={AboutUs}/>
        <Route path="/contactus" component ={ContactUs}/>
        <Footer/>
        
        

        
        
        
      </div>
    </Router>
    
  );
}

export default App;
