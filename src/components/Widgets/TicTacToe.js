import React from 'react';
import { Link } from 'react-router-dom';
import ticTacToe from '../Assets/Projects/ttt_widget.png';
import Arrow from './../Assets/Graphics/arrow.svg'

class TicTacToe extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Link to='/tic-tac-toe'>
				<div className='ttt-widget'>
					<img src={ticTacToe} alt='tic-tac-toe' />
					<button
						className='ttt-widget-button'
						style={{
							position: 'absolute',
							bottom: '1.5em',
							left: '1.5em',
							padding: '.8em',
						}}>
						<img alt='arrow' src={Arrow} style={{ maxWidth: '1.8em' }} />
					</button>
				</div>
			</Link>
			
		)
	}
}

export default TicTacToe
