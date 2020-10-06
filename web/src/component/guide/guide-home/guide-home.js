import React, { Component} from 'react';
import { Link, Redirect} from 'react-router-dom';
import './guide-home.css'
import firebase from 'firebase';


class Guide_home extends Component{
    constructor(props) {
		super(props);

		this.state = {
			email: '',
            password: '',
            address:'',
            mobile:'',
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
    
    updateAddress=(e)=> {
		console.log(e.target.value)
		this.setState({
			address: e.target.value
		});
    }
    updateMobile=(e)=> {
		console.log(e.target.value)
		this.setState({
			mobile: e.target.value
		});
	}

	displayLogin=(e)=> {
		e.preventDefault();
		console.log(this.state)
    }
	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		return (
			<div className="guide-home">
				<form onSubmit={this.displayLogin}>
					<h2>Tour Guide Profile</h2>
                    <img src="/images/profilepicture.jpg"/>
                    
					<div className="email">
						<input
							type="text"
							placeholder="Mihira Mendis"
							onChange={this.updateEmail}
							name="email"
						
						/>
					</div>

					<div className="password" >
						<input
							type="password"
							placeholder="mihira@gmail.com"
							onChange={this.updatePassword}
							name="password"
							
						/>
					</div>
                    <div className="address" >
						<input
							type="text"
							placeholder="No.10, Flower Road, Colombo 07"
							onChange={this.updateaddress}
							name="address"
							
						/>
					</div>
                    <div className="mobile" >
						<input
							type="text"
							placeholder="+94777620237"
							onChange={this.updatemobile}
							name="mobile"
							
						/>
					</div>
                    
                    

					<button  type="submit" onClick={this.displayLogin}>Edit Profile</button>
				
		
				</form>
				
				
			</div>
		);
	}
}
export default Guide_home;