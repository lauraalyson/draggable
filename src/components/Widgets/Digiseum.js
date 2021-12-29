import React from 'react'
// import digiseum from '../Assets/Projects/DigiseumWidget.png'

class Digiseum extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='project-widget'>
				{/* <img src={digiseum} alt='bg2' className='bg1' /> */}
				<h2>Digi-seum Widget</h2>
				<button>View Project</button>
			</div>
		)
	}
}

export default Digiseum
