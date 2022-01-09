import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class ProjectPlayground extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Fragment>
				<h1>Digi-seum</h1>
				<Link to='/'>Back</Link>
			</Fragment>
		)
	}
}

export default ProjectPlayground
