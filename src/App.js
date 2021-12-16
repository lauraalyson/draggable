import React from 'react'
import ShowcaseLayout from './components/GridLayout'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { layout: [] }
	}

	render() {
		return (
			<div>
				<div className='app-container'>
					<h3>Navigation bar</h3>	
				</div>

				<div className='showcase-container'>
					<ShowcaseLayout onLayoutChange={this.onLayoutChange} />
				</div>				
			</div>
		)
	}
}

export default App
