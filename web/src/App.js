import React from 'react';
import './App.css';
import AboutUs from './containers/AboutUs';
import Login from './containers/Login';
import Register from './containers/Register';
import ContactUs from './containers/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import {BrowserRouter , Router, Switch, Route} from 'react-router-dom';
import Dashboard from './component/admin/dashboard/dashboard';
import Sidebar from './component/admin/sidebar/sidebar'
import Navbar2 from './component/admin/navbar/nabar'
import Packages from './component/admin/packages/packages';







function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        
        <Route path="/admin"
         render={({ match: { url } }) => (
          <>
           <Navbar2 sticky="top"/>
           <Sidebar/>
           <Route path={`${url}/`} component={Dashboard} exact />
           <Route path={`${url}/packages`}  component={Packages} exact  />
           <Route path={`${url}/#`}  />
          </>
         )}
      />
        <Navbar/>
      </Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/register" component ={Register}/>
        <Route path="/login" component ={Login}/>
        
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
