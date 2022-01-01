import React from 'react';
import ticTacToe from '../Assets/Projects/ttt_widget.png';
import Arrow from './../Assets/Logos/arrow.svg';

class TicTacToe extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='ttt-widget'>
				<img src={ticTacToe} alt='tic-tac-toe' />
				{/* <h2>Tic-Tac-Toe Widget</h2> */}
				<button
					style={{
						position: 'absolute',
						bottom: '1.5em',
						left: '1.5em',
						padding: '.8em',
					}}>
					{/* Tic-Tac-Toe */}
					<img alt='arrow' src={Arrow} style={{ maxWidth: '2em' }} />
				</button>
			</div>
		)
	}
}

export default TicTacToe
