import React from 'react'
import ticTacToe from '../Assets/Projects/ttt_widget.png'

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
					Tic-Tac-Toe &#8599;
				</button>
			</div>
		)
	}
}

export default TicTacToe
