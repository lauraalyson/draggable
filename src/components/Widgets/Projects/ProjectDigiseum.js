import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Exit from '../../Assets/Graphics/exit.svg';
import Arrow from '../../Assets/Graphics/arrow.svg'
import ProjectLayout from '../../Layouts/ProjectLayout';

// Import Imgs
import Digiseum1 from '../../Assets/Graphics/Digi-seum/Digi-seum1.png';
import Digiseum2 from '../../Assets/Graphics/Digi-seum/Digi-seum2.png';
import Digiseum3 from '../../Assets/Graphics/Digi-seum/Digi-seum3.jpeg';
import Digiseum4 from '../../Assets/Graphics/Digi-seum/Digi-seum4.png';
import Digiseum5 from '../../Assets/Graphics/Digi-seum/Digi-seum5.png';

const transition = { duration: 0.5, ease: 'easeInOut' }

const postVariants = {
	initial: { y: -5, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 5, opacity: 0, transition },
}
class ProjectDigiseum extends React.Component {
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
					<h1>Digi-seum</h1>
				</div>

				<div className='col-7'>
					<p>
						Transform historic artwork into a masterpiece of today. This
						full-stack application allows users to examine art from the public
						api of The Metropolitan Museum of Art and draw their own
						interpretation on a konva integrated canvas. The world is your
						(digital) oyster.
					</p>
					<a
						href='https://lauraalyson.github.io/digi-seum/'
						alt='live-site'
						target='_blank'
						rel='noopener noreferrer'>
						<button>
							Live Site
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
					<a
						href='https://github.com/lauraalyson/digi-seum'
						alt='github-repo'
						target='_blank'
						rel='noopener noreferrer'>
						<button>
							Github
							<img className='project-page-icons ' src={Arrow} alt='Arrow' />
						</button>
					</a>
				</div>

				<div style={{ paddingTop: '5em' }}>
					<ProjectLayout
						key2={Digiseum1}
						key0={Digiseum2}
						key1={Digiseum3}
						key3={Digiseum4}
						key4={Digiseum5}
					/>
				</div>
			</motion.div>
		)
	}
}

export default ProjectDigiseum
