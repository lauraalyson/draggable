import React from 'react'

class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='widget-bio'>
				<div></div>
				<div className='widget-bio-p'>
					<h2>Let's Chat:</h2>
                    <p>I'm open to new projects and whatnot</p>
                    <input />
                    <p>or <a>Email</a> me here</p>
                    
				</div>
                
			</div>
		)
	}
}

export default Contact
