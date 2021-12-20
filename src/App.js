import React from 'react'
import ShowcaseLayout from './components/GridLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
const axios = require('axios').default
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { layout: [] }
	}

	render() {
		return (
			<div>
				<div className='nav'>
					<h3>Laura Waterbury</h3>	
				</div>

				<div className='showcase-container'>
					<ShowcaseLayout 
					onLayoutChange={this.onLayoutChange} />
				</div>				
			</div>
		)
	}
}

export default App
