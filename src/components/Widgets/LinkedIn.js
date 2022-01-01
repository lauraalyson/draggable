import React from 'react';

// Link Icons
import linkedin from './../Assets/Logos/linkedin-logo.png';
import Arrow from './../Assets/Logos/arrow.svg';


class LinkedIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div style={{ backgroundColor: '#C9D4F9' }} className='link-widget'>
				<a
					href='https://www.linkedin.com/in/laura-waterbury/'
					target='_blank'
					rel='noreferrer noopener'>
					<img className='link-widget-img' src={linkedin} alt='linkedin-logo' />
				</a>
				<button
					style={{
						position: 'absolute',
						bottom: '1.5em',
						left: '1.5em',
						padding: '.8em',
					}}>
					<img alt='arrow' src={Arrow} style={{ width: '2em' }} />
				</button>
			</div>
		)
	}
}

export default LinkedIn
