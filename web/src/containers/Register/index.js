import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'


class Register extends Component {
	constructor(props) {
		super(props);

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
		console.log(this.state);
	
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>

				
				
				<ul>
					<Link to="/tourguideregister" ><button  type="submit" onClick={this.props.handleClick}>{this.props.label}Register As Tour Guide</button></Link>
                </ul>

				<ul>
				    <Link to="/touristregister" ><button  type="submit" onClick={this.props.handleClick}>{this.props.label}Register As Tourist</button></Link>
				</ul>

				</form>
				
			</div>
		);
	}
}

export default Register;
