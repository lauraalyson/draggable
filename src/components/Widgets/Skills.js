import React from 'react';
// import { motion } from 'framer-motion';
// import ToolBelt from './../Assets/Logos/toolbelt-cutout-bottom.png';
class Skills extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// skillCategory:
			// 	'JavaScript, Python, ReactJS, React Native, VueJS, jQuery, HTML, CSS, GSAP, Bootstrap',
		}
	}

	// handleFrontEnd = () => {
	// 	this.setState({
	// 		skillCategory:
	// 			'JavaScript, Python, ReactJS, React Native, VueJS, jQuery, HTML, CSS, GSAP, Bootstrap'
	// 	})
	// }

	// handleBackEnd = () => {
	// 	this.setState({
	// 		skillCategory:
	// 			'Node.js, Express, MySQL, Django, PostgreSQL, MongoDB, Mongoose, Heroku, REST API'
	// 	})
	// }
	// handleOther = () => {
	// 	this.setState({
	// 		skillCategory:
	// 			'Git, Adobe Creative Suite, Figma, Sketch, Notion, Postman, Heroku, Netlify'
	// 	})
	// }

	render() {
		// const { skillCategory } = this.state
		return (
			<div style={{ height: '100%', width: '100%', padding: '4em' }}>
				<a href='https://www.google.com'>Link</a>
			</div>
			// <div className='skills-widget'>
			// 	<h3>Tool Belt</h3>
			// 	<div>
			// 		<button onTap={this.handleFrontEnd} onClick={this.handleFrontEnd}>
			// 			Front-End
			// 		</button>
			// 		<button onTap={this.handleBackEnd} onClick={this.handleBackEnd}>
			// 			Back-End
			// 		</button>
			// 		<button onTap={this.handleOther} onClick={this.handleOther}>
			// 			Other
			// 		</button>
			// 	</div>

			// 		<motion.div>
			// 			<p>{skillCategory}</p>
			// 		</motion.div>
			// 		<img className='skills-widget-img' src={ToolBelt} alt='Toolbelt Emoji'/>
			// </div>
		)
	}
}

export default Skills
