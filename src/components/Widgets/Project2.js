import React from 'react'
import bg2 from '../Assets/DigiseumWidget.png'

class Project2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<img src={bg2} alt='bg2' className='bg1' />
			</div>
		)
	}
}

export default Project2
