import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import firebase from 'firebase';
import fire from '../../firebase';


  

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

    update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	login(e) {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

		}).catch((error) => {
			console.log(error);
		});
		}
	
	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
                    
					<div className="email">
						<input
							type="text"
							placeholder="Email Address"
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" onClick={this.login} />
		
				</form>

				<Link to="/register" style={{ color: 'orange' }}>Don't have an account? Sign up</Link>
			</div>
		);
	}
}

export default Login;
