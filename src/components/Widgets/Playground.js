import React from 'react'
import playground from '../Assets/Projects/playground-widget.png'
import Arrow from './../Assets/Logos/arrow.svg'
class Playground extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='playground-widget'>
				<img
					src={playground}
					alt='playground-project'
					className=''
				/>
				<button
					style={{
						position: 'absolute',
						bottom: '1.5em',
						left: '1.5em',
						padding: '.8em',
					}}>
						
					Playground

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

export default Playground
