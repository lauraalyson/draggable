import React from 'react';
import Email from './../Assets/Logos/email-logo.png';
// import Mail from './../Assets/Logos/mail-graphic.png';
class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='project-widget row'>
				<div className='col-5'>
					<img src={Email} alt='Email Emoji'/>
				</div>
				<div className='col-5'>
					<input />

				</div>
			</div>
		)
	}
}

export default Contact
