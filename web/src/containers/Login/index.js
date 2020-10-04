
import React, { Component, useCallback } from 'react';
import { Link, Redirect} from 'react-router-dom';
import './style.css'
import firebase from 'firebase';
import fire from '../../firebase';
import {withRouter} from 'react-router';

const Login = ({history}) => {
	const handleLogin = useCallback(async event =>{
		event.preventDefault();
		const{email,password} = event.target.elements;
		try{
			await fire
			.auth()
			.createUserWithEmailAndPassword(email.value,password.value);
			history.push("/");
		}catch(error){
			alert(error);
		}
	
},[history]);


class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			redirect: null
		};

		
	}

	updateEmail=(e)=> {
		
		console.log(e.target.value);
		this.setState({
			email: e.target.value
		});
	}
	updatePassword=(e)=> {
		console.log(e.target.value)
		this.setState({
			password: e.target.value
		});
	}

	displayLogin=(e)=> {
		e.preventDefault();
		console.log(this.state.email)
		if( this.state.email == "" ) {
            alert( "Please provide your email!" );
            
            return false;
         }
         else if( this.state.password == "" ) {
            alert( "Please provide your password!" );
            
            return false;
		 }
		 if(this.state.email=="admin@gmail.com"){
			 console.log("okay1")
			window.location.href = "http://localhost:3000/admin"
		 }

		 firebase
		.auth()
		.signInWithEmailAndPassword(this.state.email, this.state.password)
		.then(() => this.setState({ redirect: 'GuideProfile' })) 
		.catch((error) => {console.log("Error: "+error.toString())});
			 	
	}
	

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		return (
			<div className="login">
				<form onSubmit={handleLogin}>
				<img class="logo" src="/images/logo.png"/>
					<h2>Login</h2>
                    
					<div className="email">
						<input
							type="text"
							placeholder="Email Address"
							onChange={this.updateEmail}
							name="email"
						
						/>
					</div>

					<div className="password" >
						<input
							type="password"
							placeholder="Password"
							onChange={this.updatePassword}
							name="password"
							
						/>
					</div>
					<button  type="submit" onClick={this.displayLogin}>Login</button>
				
		
				</form>
				<Link to="/register" style={{ color: '#4682B4', padding: '10px 10px' }}>Don't have an account? Sign up</Link>
			</div>
		);
	}
}
}

export default withRouter(Login)
