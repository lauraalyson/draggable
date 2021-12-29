import React from 'react'
import playground from '../Assets/PlaygroundWidget.png'

class Project1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<img
					src={playground}
					alt='bg1'
					className='bg1'
				/>
			</div>
		)
	}
}

export default Project1
