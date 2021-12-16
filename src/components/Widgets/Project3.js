import React from 'react'
import bg2 from '../Assets/bg-2.png'

class Project3 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<img src={bg2} alt='bg2' className='bg2' />
			</div>
		)
	}
}

export default Project3
