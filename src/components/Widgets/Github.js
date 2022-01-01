import React from 'react'

// Link Icons
import github from './../Assets/Logos/github-logo.png'

class LinkedIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div style={{ backgroundColor: '#98D0FF' }} className='link-widget'>
				<a
					href='https://www.github.com/lauraalyson'
					target='_blank'
					rel='noreferrer noopener'>
					<img src={github} alt='github-logo' />
				</a>
				<button
					style={{
						position: 'absolute',
						bottom: '1.5em',
						left: '1.5em',
						padding: '.8em',
					}}>
					&#8599;
				</button>
			</div>
		)
	}
}

export default LinkedIn
