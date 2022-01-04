import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
class Skills extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skillCategory:
				'JavaScript, Python, React.js, React Native, jQuery, HTML, CSS, GSAP, Bootstrap',
		}
	}

	handleFrontEnd = () => {
		this.setState({
			skillCategory:
				'JavaScript, Python, React.js, React Native, jQuery, HTML, CSS, GSAP, Bootstrap'
		})
	}

	handleBackEnd = () => {
		this.setState({
			skillCategory:
				'Node.js, Express, MySQL, Django, PostgreSQL, MongoDB, Mongoose.js, Heroku, REST API'
		})
	}
	handleOther = () => {
		this.setState({
			skillCategory:
				'Git, Adobe Creative Suite, Figma, Sketch, Notion, Postman, Heroku, Netlify'
		})
	}

	render() {
		return (
			<div style={{ backgroundColor: '#C9D4F9', height: '100%' }} className='skills-widget'>
				<div>
					{/* <button> Front-End </button>
					<button> Back-End </button>
					<button onClick={this.handleOther}> Other </button> */}
					<h3 onClick={this.handleFrontEnd}> FrontEnd</h3>
					<h3 onClick={this.handleBackEnd}>Backend</h3>
				</div>

				<AnimatePresence exitBeforeEnter>
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 20 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.15 }}>
						{this.state.skillCategory}
					</motion.div>
				</AnimatePresence>
			</div>
		)
	}
}

export default Skills
