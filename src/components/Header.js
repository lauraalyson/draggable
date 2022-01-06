import React from "react";

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="header">
               <div>
				   <li>Home</li>
				   <li>About</li>
				   <li>Projects</li>
			   </div>
			</div>
		)
	}
}

export default Header
