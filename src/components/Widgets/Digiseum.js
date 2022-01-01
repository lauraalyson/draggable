import React from 'react'
import digiseum from '../Assets/Projects/digiseum-widget.png'

class Digiseum extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='digiseum-widget'>
				<img
				src={digiseum}
				alt='digi-seum-project'
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

export default Digiseum
