import React from "react";
import LauraMemoji from './Assets/laura-memoji.png';

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="header">
                <img src={LauraMemoji} alt='Laura Waterbury Memoji'/>
			</div>
		)
	}
}

export default Header