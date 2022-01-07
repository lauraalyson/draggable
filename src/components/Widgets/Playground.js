import React from 'react'
import playground from '../Assets/Projects/playground-widget.png'
import Arrow from './../Assets/Logos/arrow.svg'
class Playground extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='playground-widget'>
				<img src={playground} alt='playground-project' className='' />
				<a
					href='https://github.com/ProjectPlayGroundLHA/PlayGroundClient'
					alt='Playground'>
					<button
						className='playground-widget-button'
						style={{
							position: 'absolute',
							bottom: '1.5em',
							left: '1.5em',
							padding: '.8em',
						}}>
						<img alt='arrow' src={Arrow} style={{ maxWidth: '1.8em' }} />
					</button>
				</a>
			</div>
		)
	}
}

export default Playground
