import React from 'react'

// Import Link Imgs
import codepen from './../Assets/codepen-logo.png';
import linkedin from './../Assets/linkedin-logo.png';
import email from './../Assets/email-logo.png';
import github from './../Assets/github-logo.png'

class Links extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='row link-widget'>
				<div className='col-5'>
					<a
						href='https://github.com/lauraalyson'
						target='_blank'
						rel='noreferrer noopener'>
						<img src={github} />
					</a>
				</div>

				<div className='col-5'>
					<a
						href='https://www.linkedin.com/in/laura-waterbury/'
						target='_blank'
						rel='noreferrer noopener'>
						<img src={linkedin} />
					</a>
				</div>

				<div className='col-5'>
					<a href='mailto:lauraalyson3@gmail.com'>
						<img src={email} />
					</a>
				</div>

				<div className='col-5'>
					<a
						href='https://codepen.io/lauraalyson'
						target='_blank'
						rel='noreferrer noopener'>
						<img src={codepen} />
					</a>
				</div>
			</div>
		)
	}
}

export default Links
