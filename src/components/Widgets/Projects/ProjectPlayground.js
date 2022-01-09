import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
				variants={postVariants}>
				<h1>Playground</h1>
				<Link to='/'>Back</Link>
			</motion.div>
		)
	}
}

export default ProjectPlayground
