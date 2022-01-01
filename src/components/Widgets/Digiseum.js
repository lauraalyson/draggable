import React from 'react'
import digiseum from '../Assets/Projects/digiseum-widget.png'
import Arrow from './../Assets/Logos/arrow.svg'
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
						
					Digiseum

					<img
					alt='arrow'
					src={Arrow}
					style={{ maxWidth: '2em' }}
					/>
				</button>
			</div>
		)
	}
}

export default Digiseum
