import React from 'react'
import ShowcaseLayout from './components/GridLayout'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { layout: [] }
	}

	render() {
		return (
			<div className='app-container'>
				<div className='showcase-container'>
					<ShowcaseLayout onLayoutChange={this.onLayoutChange} />
				</div>				
			</div>

		)
	}
}

export default App
