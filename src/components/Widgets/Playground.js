import React from 'react';
import playground from '../Assets/Projects/playground-widget.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Arrow from './../Assets/Graphics/arrow.svg'
class Playground extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='playground-widget'>
				<Link to='/playground' alt='Playground'>
					<img src={playground} alt='playground-project' className='' />

					<motion.button
						className='playground-widget-button'
						style={{
							position: 'absolute',
							bottom: '1.5em',
							left: '1.5em',
							padding: '.8em',
						}}>
						<img alt='arrow' src={Arrow} style={{ maxWidth: '1.8em' }} />
					</motion.button>
				</Link>
			</div>
		)
	}
}

export default Playground
