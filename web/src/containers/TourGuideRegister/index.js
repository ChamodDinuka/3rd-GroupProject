import React, { Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import firebase from 'firebase';
import DropdownDate from 'react-dropdown-date';



	

const formatDate = (date) => {	
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}


class TourGuideRegister extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			availability:'inactive',
			date: null, selectedDate: '1997-07-18',
			nic:'',
			file:'',
			language:'',
			address:'',
			telephone:'',
			experience:'',
			expertin:'',
			submitreports:'',
			email: '',
			password: '',
			password1: '',
			redirect: null
		};

	
	}

	updateName=(e)=> {
		console.log(e.target.value)
		this.setState({
			fullname: e.target.value
		});
	}
	updateNic=(e)=> {
		console.log(e.target.value)
		this.setState({
			nic: e.target.value
		});
	}
	updateAddress=(e)=> {
		console.log(e.target.value)
		this.setState({
			address: e.target.value
		});
	}
	updateNumber=(e)=>{
		this.setState({
			telephone: e.target.value
		});
	}
	updateExperience=(e)=> {
		console.log(e.target.value)
		this.setState({
			experiences: e.target.value
		});
	}
	updateLanguage=(e)=>{
		this.setState({
			language: e.target.value
		});
	}
	updateEmail=(e)=> {
		this.setState({
			email: e.target.value
		});
	}
	onFileChange=(e)=>{
		const file=e.target.files[0]
      const storage=firebase.storage()
      const uploadTask = storage.ref(`/file/${file.name}`).put(file)
      //initiates the firebase side uploading 
      uploadTask.on('state_changed', 
      (snapShot) => {
        
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('file').child(file.name).getDownloadURL()
         .then(fireBaseUrl => {
			console.log(fireBaseUrl)
           this.setState({
             file:fireBaseUrl
           })
		 })
		 
		 console.log(this.state.file)
         
      })
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
		var db=firebase.firestore()
		if( this.state.fullname === "" ) {
            alert( "Please provide your name!" );
            
            return false;
		 }
	
         else if( this.state.email === "" ) {
            alert( "Please provide your email!" );
            
            return false;
		 }
		
		 else if( this.state.password === "" ) {
            alert( "Please provide your password!" );
            
            return false;
		 }
		
		 firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(async() => {
				//console.trace("TEST");
				await db.collection("user").add({
					name: this.state.fullname,
					nic:this.state.nic,
					availability_status:this.state.availability,
					email:this.state.email,
					telephone:this.state.telephone,
					language:this.state.language,
					address:this.state.address,
					file:this.state.file,
					experience:this.state.experience
				})
				.then(function(docRef) {
					console.log("Document written with ID: ", docRef.id);
					
				})
				.catch(function(error) {
					console.error("Error adding document: ", error);
				});
				
			})
			.catch((error) => {
				console.log(error);

			});
			this.setState({
				redirect: 'login'
			})
	
	}

	render()  {

		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
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

					<div>
						<label>Date of Birth
							<DropdownDate
                    			startDate={                         
                       			'1970-01-01'                    
                   				}
                    			endDate={                           
                        		'2020-07-18'                  
                   				}
                    			selectedDate={                     
                        		this.state.selectedDate         
                    			}
                   
               				 />
						</label>
					</div>

					<div className="nic">
						<input
							type="text"
							placeholder="NIC"
							name="nic"
							onChange={this.updateNic}
						/>
					</div>

					

					

					<div className="address">
						<input
							type="text"
							placeholder="Address"
							name="address"
							onChange={this.updateAddress}
						/>
					</div>

					<div className="number">
						<input
							type="text"
							placeholder="Phone Number"
							name="number"
							onChange={this.updateNumber}
						/>
					</div>

					

					<div className="experience">
						<input
							type="text"
							placeholder="Experience"
							name="experience"
							onChange={this.updateExperience}
						/>
					</div>

					<label>
                        Expert In
                        <select value={this.state.value} onChange={this.updateLanguage}>
            				<option value="english">English</option>
            				<option value="hindi">Hindi</option>
            				<option value="chinese">Chinese</option>
							<option value="tamil">Tamil</option>
          				</select>
        			</label>

					<label>
                        Submit Reports
						<input 
							type="file"
							name="submitreports"
							onChange={this.onFileChange} 
					    />
                    </label>

					<div className="email">
						<input
							type="text"
							placeholder="Email Address"
							name="email"
							onChange={this.updateEmail}
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
				<Link to="/login" style={{ color: '#4169e1', padding: '10px 10px' }}>Already have an account? Sign in</Link>
				
            </div>
	);
	

}
}
export default TourGuideRegister

