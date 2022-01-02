import React from 'react'
import LauraMemoji from '../Assets/laura-memoji.png'

class Bio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div
			className='widget-bio row'
			style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
				<div className='col-5'>
					<img
					src={LauraMemoji}
					alt='LauraMemoji'
					className='widget-bio-memoji'
					/>
				</div>
                

				<div className='col-7'>
					<h1>Laura Waterbury</h1>
					<h4>FullStack Developer</h4>
				</div>

			</div>
		)}
}

export default Bio
