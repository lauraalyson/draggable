import React from 'react'
import playground from '../Assets/Projects/playground-widget.png'

class Playground extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='playground-widget'>
				<img
					src={playground}
					alt='playground-project'
					className=''
				/>
				<button
					style={{
						position: 'absolute',
						bottom: '1.5em',
						left: '1.5em',
						padding: '.8em',
					}}>
					Playground &#8599;
				</button>
			</div>
		)
	}
}

export default Playground
