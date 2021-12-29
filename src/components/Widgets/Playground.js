import React from 'react'
// import playground from '../Assets/Projects/PlaygroundWidget.png'

class Playground extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='project-widget'>
				{/* <img
					src={playground}
					alt='bg1'
					className='bg1'
				/> */}
				<h2>Playground Widget</h2>
				<button>View Project</button>
			</div>
		)
	}
}

export default Playground
