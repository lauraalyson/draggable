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
				<ShowcaseLayout onLayoutChange={this.onLayoutChange} />
			</div>
		)
	}
}

export default App
