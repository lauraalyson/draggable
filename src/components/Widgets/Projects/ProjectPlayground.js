import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Exit from '../../Assets/Logos/exit.svg';
import Arrow from '../../Assets/Logos/arrow.svg';

const transition = { duration: 0.5, ease: 'easeInOut' }

const postVariants = {
	initial: { y: -5, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 5, opacity: 0, transition },
}
class ProjectPlayground extends React.Component {
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
						<img src={Exit} alt='exit' />
					</Link>
				</div>

				<div className='col-5'>
					<h1>Playground</h1>
				</div>

				<div className='col-7'>
					<p>
						Log in and make the world your playground. Show off your favorite
						places around the world by setting pins on the map and telling us
						what makes this location special. Share your pins with other users
						and see their favorite spots.
					</p>
					<a
						href='https://github.com/ProjectPlayGroundLHA/PlayGroundClient'
						target='_blank'
						rel='noopener noreferrer'
						alt='live-site'>
						<button>
							Live Site
							<img src={Arrow} alt='Arrow' />
						</button>
					</a>
					<a
						href='https://projectplaygroundlha.github.io/PlayGroundClient/'
						target='_blank'
						rel='noopener noreferrer'
						alt='github-repo'>
						<button>
							Github
							<img src={Arrow} alt='Arrow' />
						</button>
					</a>
				</div>
			</motion.div>
		)
	}
}

export default ProjectPlayground
