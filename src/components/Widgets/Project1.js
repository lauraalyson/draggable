import React from 'react'
import bg1 from '../Assets/bg-1.png'

class Project1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<img
					src={bg1}
					alt='bg1'
					className='bg1'
				/>
			</div>
		)
	}
}

export default Project1
