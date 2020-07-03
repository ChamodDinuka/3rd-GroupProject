import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class TouristRegister extends Component {
	constructor(props) {
		super(props);

		this.state = {
            firstname: '',
            lastname: '',
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

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
            fullname: '',
            email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="touristregister">
				<form onSubmit={this.displayLogin}>
					<h2>Tourist</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
                        <input
                            type="password" 
                            placeholder="Confirm Password" 
                            name="password1"
                        />
					</div>

					<label>
                        Select A Package
                        <select value={this.state.value} onChange={this.handleChange}>
            				<option value="gold">Gold</option>
            				<option value="silver">Silver</option>
            				<option value="bronze">Bronze</option>
          				</select>
        			</label>
				
                    <input type="submit" value="Register" />
				</form>

                <Link to="/login" style={{ color: 'orange' }}>Already have an account? Sign in</Link>
               
                
			</div>
		);
	}
}

export default TouristRegister;