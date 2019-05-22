import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FetchData from './services/FetchData';

class App extends Component {
constructor(props){
	super(props);
}


countFun=async ()=>{
	console.log("countFun called")
	const data= await FetchData();	
	return data;
}
  render() {
    return (
      <div className="App">
       <Header header="Welcome"/>
	   <button className="count" onClick={this.countFun}>click</button>
      </div>
    );
  }
}

export default App;
