import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Exit from '../../Assets/Graphics/exit.svg'
import Arrow from '../../Assets/Graphics/arrow.svg'
import ProjectLayout from '../../Layouts/ProjectLayout';

// Import Images
import TicTacToe1 from './../../Assets/Graphics/Tic-Tac-Toe/Tic-Tac-Toe1.png'
import TicTacToe2 from './../../Assets/Graphics/Tic-Tac-Toe/Tic-Tac-Toe2.png'
import TicTacToe3 from './../../Assets/Graphics/Tic-Tac-Toe/Tic-Tac-Toe3.png'
import TicTacToe4 from './../../Assets/Graphics/Tic-Tac-Toe/Tic-Tac-Toe4.png'
import TicTacToe5 from './../../Assets/Graphics/Tic-Tac-Toe/Tic-Tac-Toe5.png'

const transition = { duration: 0.5, ease: 'easeInOut' }

const postVariants = {
	initial: { y: -5, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 5, opacity: 0, transition },
}
class ProjectTicTacToe extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<motion.div
				initial='exit'
				animate='enter'
				exit='exit'
				variants={postVariants}
				className='row project-page'
				style={{ justifyContent: 'center' }}>
				<div className='col-12' style={{ padding: '2em 0em' }}>
					<Link to='/'>
						<img className='project-page-icons ' src={Exit} alt='exit' />
					</Link>
				</div>

				<div className='col-5'>
					<h1>Tic-Tac-Toe</h1>
				</div>

				<div className='col-7'>
					<p>
						From paper to screen, this Tic-Tac-Toe rendition is expressed as a
						Single-Page-Application (SPA), utilizing languages and frameworks
						such as JavaScript, jQuery, SASS and more.
					</p>
					<a
						href='https://github.com/lauraalyson/tic-tac-toe'
						target='_blank'
						rel='noopener noreferrer'
						alt='live-site'>
						<button>
							Live Site
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
					<a
						href='https://lauraalyson.github.io/tic-tac-toe/'
						target='_blank'
						rel='noopener noreferrer'
						alt='github-repo'>
						<button>
							Github
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
				</div>

					<div style={{ paddingTop: '5em' }}>
						<ProjectLayout
							key1={TicTacToe1}
							key2={TicTacToe2}
							key3={TicTacToe3}
							key4={TicTacToe4}
							key0={TicTacToe5}
						/>
					</div>
			</motion.div>
		)
	}
}

export default ProjectTicTacToe
