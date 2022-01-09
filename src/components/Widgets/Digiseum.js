import React from 'react'
import digiseum from '../Assets/Projects/digiseum-widget.png'
import Arrow from './../Assets/Graphics/arrow.svg'
import { Link } from 'react-router-dom'
class Digiseum extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='digiseum-widget'>
				<img src={digiseum} alt='digi-seum-project' />
				<Link to='/digi-seum'>
					<button
						className='digiseum-widget-button'
						style={{
							position: 'absolute',
							bottom: '1.5em',
							left: '1.5em',
							padding: '.8em',
						}}>
						<img alt='arrow' src={Arrow} style={{ maxWidth: '1.8em' }} />
					</button>					
				</Link>

			</div>
		)
	}
}

export default Digiseum
