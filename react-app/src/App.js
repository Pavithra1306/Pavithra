import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

const uuidv4 = require('uuid/v4');

class App extends Component {
	constructor(props){
		super(props);
		
		this.state={
			userArray : []
		}
	}
	
	handleSubit=(e)=>{
		e.preventDefault();
		var first=document.getElementById("first").value;
		var last=document.getElementById("last").value;
		var contact=document.getElementById("contact").value;
		var email=document.getElementById("email").value;
		var hiddenID=document.getElementById("hide").value;
		
		var obj={
			id:uuidv4(),
			firstName : first,
			lastName : last,
			contact : contact,
			email : email
		}
		
		
			
		//if it is new item-> hidden id will be empty
		if((this.state.userArray) && (hiddenID==="")){
		this.setState((state)=>({
			
			userArray : [...state.userArray,obj]
		}))
		}
		//if it is existing-> hidden id will not be empty
		else if((this.state.userArray) && (hiddenID!=="")){
			 first=document.getElementById("first").value;
			 last=document.getElementById("last").value;
			 contact=document.getElementById("contact").value;
			 email=document.getElementById("email").value;
			
			var updateArray=this.state.userArray;
			updateArray.forEach((item,ind)=>{
				if(item.id===hiddenID){
					item.firstName=first;
					item.lastName=last;
					item.contact=contact;
					item.email=email;
				}
				
				
			})
			console.log("updateArray",updateArray)
			this.setState({
					userArray : [...updateArray]
				})
				
		}
		//if it is the first item in the array
		else{
			this.setState({
				userArray : [obj]
			})
		}
		
		//console.log(this.state.userArray);
		
	document.getElementById("myForm").reset();	
		
	}
	
	discardFunc=(e)=>{
		e.preventDefault();
		document.getElementById("myForm").reset();
	}
	
	checkUserList=(itemm,e)=>{
		e.preventDefault();
		document.getElementById("first").value=itemm.firstName;
		document.getElementById("last").value=itemm.lastName;
		document.getElementById("contact").value=itemm.contact;
		document.getElementById("email").value=itemm.email;
		document.getElementById("hide").value=itemm.id;
		
	}
	
	
  render() {
    return (
      <div className="App wrapper">
        <div className="display">
			<div className="header">Display</div>
			<div>
				<ul>
				{
					this.state.userArray.map((item,ind)=>{
						if(item){
							return (
								<div key={item.id}>
									{ind+1+")"}
									<a href="#" onClick={(e)=>this.checkUserList(item,e)}>
										<li>{item.firstName}</li>
										<li>{item.email}</li>
									</a>
								</div>
							)
						}
						else{
							return null;
						}
					})
				}
				</ul>
			</div>
		</div>
		<div className="create">
		<div className="header">Create</div>
			<form id="myForm">
				<input className="inputStyle" id="first" name="first" type="text" placeholder="First Name" defaultValue="" required></input>
				<input className="inputStyle" id="last" type="text" placeholder="Last Name" defaultValue="" required></input>
				<input className="inputStyle" id="contact" type="Number" placeholder="Contact" defaultValue="" required></input>
				<input className="inputStyle" id="email" type="email" placeholder="Email" defaultValue="" required></input>
				<input id="hide" type="hidden" defaultValue=""></input>
				<div className="btn">
				<input type="button" value="submit" className="btnStyle" onClick={this.handleSubit}></input>
				<button className="btnStyle" onClick={this.discardFunc}>Discard</button>
				</div>
			</form>
		</div>
      </div>
    );
  }
}

/* mapStateToProps=()=>{
	
}

mapDispatchToProps=()=>{
	
} */

export default connect({},{})(App);
	