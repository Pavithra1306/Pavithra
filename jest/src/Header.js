import React, { Component } from 'react';

class Header extends Component {

constructor(props){
super(props);
}
  render() {
    return (
      <div className="header">
        <div>
			<p>The header component {this.props.header}</p>
		</div>
      </div>
    );
  }
}

export default Header;
