import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Exit from '../../Assets/Graphics/exit.svg'
import Arrow from '../../Assets/Graphics/arrow.svg'
import ProjectLayout from '../../Layouts/ProjectLayout';

// Image Imports
import Playground1 from './../../Assets/Graphics/Playground/Playground1.png';
import Playground2 from './../../Assets/Graphics/Playground/Playground2.png';
import Playground3 from './../../Assets/Graphics/Playground/Playground3.png';
import Playground4 from './../../Assets/Graphics/Playground/Playground4.png';
import Playground5 from './../../Assets/Graphics/Playground/Playground5.png';

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
							<img className='project-page-icons ' src={Exit} alt='exit' />
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
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
					<a
						href='https://projectplaygroundlha.github.io/PlayGroundClient/'
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
						key1={Playground1}
						key2={Playground2}
						key0={Playground3}
						key4={Playground4}
						key3={Playground5}
					/>
				</div>
			</motion.div>
		)
	}
}

export default ProjectPlayground
