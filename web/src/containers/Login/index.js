import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

  

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
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
			 
		 
		
	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
                    
					<div className="username">
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
				<Link to="/register" style={{ color: 'orange', padding: '10px 10px' }}>Don't have an account? Sign up</Link>
			</div>
		);
	}
}

export default Login;
