import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css'
import firebase from 'firebase';

class TouristRegister extends Component {
	constructor(props) {
		super(props);

		this.state = {
            fullname: '',
            email: '',
			password: '',
			uid:'',
			country:'',
			package_name:'',
			guide_name:'',
			redirect: null
		};

		
	}
	updateCountry = (e) => {
		console.log(e.target.value)
		this.setState({
			country: e.target.value
		});
	}

	updateName = (e) => {
		console.log(e.target.value)
		this.setState({
			fullname: e.target.value
		});
	}
	updateEmail = (e) => {
		this.setState({
			email: e.target.value
		});
	}

	updatePassword = (e) => {
		this.setState({
			password: e.target.value
		});
	}
	confirmPassword = (e) => {
		this.setState({
			password1: e.target.value
		});
	}

	displayLogin = (e) => {
		e.preventDefault();
		if (this.state.fullname == "") {
			alert("Please provide your name!");

			return false;
		}
		else if (this.state.email == "") {
			alert("Please provide your email!");

			return false;
		}
	
		else if (this.state.password == "") {
			alert("Please provide your password!");

			return false;
		}else{
		
			

		firebase
		.auth()
		.createUserWithEmailAndPassword(this.state.email, this.state.password)
		.then(() => {
			//console.trace("TEST");
			var db=firebase.firestore()
			db.collection("tourist").add({
				name: this.state. fullname,
				email: this.state.email,
			
				package_name:this.state.package_name,
				guide_name:this.state.guide_name
			})
			.then(function(docRef) {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
			});
			this.setState({
				redirect: 'login',
			})
		})
		.catch((error) => {
			console.log(error);

		});
		}

	}

	render() {

		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		return (
			<div className="touristregister">
				<form onSubmit={this.displayLogin}>
					<h2>Tourist</h2>

					<Link to="/SubscriptionPlan" ><button  type="submit" onClick={this.props.handleClick}>{this.props.label}Select Package</button></Link>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.updateName}
							
						/>
					</div>

					<label>
                        Country
                        <select value={this.state.value} onChange={this.updateCountry}>
            				<option value="india">India</option>
            				<option value="china">China</option>
            				<option value="unitedKingdom">United Kingdom</option>
							<option value="germany">Germany</option>
							<option value="france">France</option>
          				</select>
        			</label>

					<div className="email">
						<input
							type="text"
							placeholder="Email Address"
							name="email"
							value={this.state.email}
							onChange={this.updateEmail}
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.updatePassword}
						/>
					</div>

					<div className="password">
                        <input
                            type="password" 
                            placeholder="Confirm Password" 
							name="password1"
							onChange={this.confirmPassword}
                        />
					</div>

					<button  type="submit" onClick={this.displayLogin}>Register</button>
                    
				</form>

				<Link to="/login" style={{ color: '#4169e1', padding: '10px 10px'}}>Already have an account? Sign in</Link>
                
               
                
			</div>
		);
	}
}

export default TouristRegister;
