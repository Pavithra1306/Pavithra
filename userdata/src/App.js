import React, { Component } from 'react';
import userDisplay from './userDisplay'

class App extends Component {
	constructor(props){
		super(props)
		
	this.state={
		
		userData : {}
	}	
	this.handleSave=this.handleSave.bind(this);
	}
	
	handleSave=(e)=>{
		e.preventDefault();
		let firstName = document.getElementById("firstName").value;
		let lastName = document.getElementById("lastName").value;
		let contact= document.getElementById("contact").value;
		let email= document.getElementById("email").value;
		
		let userobj={
			
			first :firstName,
			last :lastName,
			contact1 :contact,
			mail : email
		}
		console.log(userobj,"====")
		
		this.setState((state,props)=>({
			
			userData : [state.userData,userobj]
		}));
		
		console.log(this.state.userData)

			this.state.userData.map((data)=>{
			
				let displaydata= `<ul><li>${data.firstName}</li></ul>`	
					
				})
		
	}
	
	
	
	
  render() {
    return (
	
     
	  
	    <div className="wrap" id="wrap">
			<div className="content">
				<div className="header"><h4>User Registration</h4></div>
				<div>
					<userDisplay/>
				
				</div>
				 <form>
					<div className="input-group">
					  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
					  <input id="firstName" type="text" className="form-control" name="firstName" placeholder="First Name"></input>
					</div>
					<div className="input-group">
					  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
					  <input id="lastName" type="text" className="form-control" name="lastName" placeholder="Last Name"></input>
					</div>
					<div className="input-group">
					  <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
					  <input id="contact" type="Number" className="form-control" name="contact" placeholder="Contact"></input>
					</div>
					<div className="input-group">
					  <span className="input-group-addon"><i className="glyphicon glyphicon-folder-close"></i></span>
					  <input id="email" type="text" className="form-control" name="email" placeholder="Email"></input>
					</div>
					<div>
						<button className="btn btn-primary" onClick={this.handleSave}>Save</button>
						<button className="btn btn-primary" onclick={this.handleDiscard}>Discard</button>
					</div>
					</form>
				<div className="footer">footer</div>   
			</div>     
		</div>
    );
  }
}

export default App;
