import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class TourGuideRegister extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			password1: '',
            email: '',
            phone: '',
			password: ''
		};

	
	}

	updateName=(e)=> {
		console.log(e.target.value)
		this.setState({
			fullname: e.target.value
		});
	}
	updateEmail=(e)=> {
		this.setState({
			email: e.target.value
		});
	}
	updateNumber=(e)=> {
		this.setState({
			phone: e.target.value
		});
	}
	updatePassword=(e)=> {
		this.setState({
			password: e.target.value
		});
	}
	confirmPassword=(e)=> {
		this.setState({
			password1: e.target.value
		});
	}

	displayLogin=(e)=> {
		e.preventDefault();
		if( this.state.fullname == "" ) {
            alert( "Please provide your name!" );
            
            return false;
         }
         else if( this.state.email == "" ) {
            alert( "Please provide your email!" );
            
            return false;
		 }
		 else if( this.state.phone == "" ) {
            alert( "Please provide your phone number!" );
            
            return false;
		 }
		 else if( this.state.password == "" ) {
            alert( "Please provide your password!" );
            
            return false;
		 }
		 else if( this.state.email != this.state.password1 ) {
            alert( "Password confirmation is failed!" );
            
            return false;
         }
	}

	render() {
		return (
			<div className="tourguideregister">
				<form onSubmit={this.displayLogin}>
					<h2>Tour Guide</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							
							onChange={this.updateName}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Email"
							name="email"
							
							onChange={this.updateEmail}
						/>
					</div>

                    <div className="phone">
						<input
							type="text"
							placeholder="Phone"
							name="phone"
							
							onChange={this.updateNumber}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							
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
				<Link to="/login" style={{ color: 'orange', padding: '10px 10px' }}>Already have an account? Sign in</Link>
				
            </div>
		);
	}
}

export default TourGuideRegister;
