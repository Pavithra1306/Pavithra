import React, { Component } from 'react';


class userDisplay extends Component {
	
	constructor(props){
		super(props);
		
	}
	
  render() {
    return (
   
     <div>
			{this.props.userData.map((data)=>{
			
				var displaydata= `<li>${data.firstName}</li>`
					
				})}
				<ul>
				{displaydata}	
				</ul>
	</div>
	  
	   
    );
  }
}

export default userDisplay;
