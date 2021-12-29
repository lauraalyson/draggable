import React from 'react'
// import ticTacToe from '../Assets/Projects/TicTacToeWidget.png'

class TicTacToe extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='project-widget'>
				{/* <img src={ticTacToe} alt='bg2' className='bg2' /> */}
				<h2>Tic-Tac-Toe Widget</h2>
				<button>View Project</button>
			</div>
		)
	}
}

export default TicTacToe
