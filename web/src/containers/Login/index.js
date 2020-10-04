import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import './style.css'
import firebase from 'firebase';

  

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			redirect: null,
			tourist_mail:[],
			user_mail:[]
		};

		
	}
	componentDidMount(){
		var db=firebase.firestore()
		db.collection("tourist").get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				this.setState({
					tourist_mail:[...this.state.tourist_mail,doc.data().email]
				})
					
			}.bind(this));
		}.bind(this));
		db.collection("user").get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				this.setState({
					user_mail:[...this.state.user_mail,doc.data().email]
				})
					
			}.bind(this));
		}.bind(this));
		
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
		.then(() => 
		this.state.tourist_mail.map((mail,i)=>{
			if(this.state.email===mail){
				this.setState({ 
					redirect: './tourist' 
				})
			}
		})
		) 
		.catch((error) => this.setState({ errorMessage: error.message }));
			 	
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
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
				<ul>
				<Link to="/resetpassword" style={{ color: '#4682B4', padding: '10px 10px' }}>Forgot password?</Link>
				</ul>
				<ul>
				<Link to="/register" style={{ color: '#4682B4', padding: '10px 10px' }}>Don't have an account? Sign up</Link>
				</ul>
			</div>
		);
	}
}

export default Login;
