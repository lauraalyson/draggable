import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowcaseLayout from './components/GridLayout';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { layout: [] }
	}

	render() {
		return (
			<div className='body-container'>
					<ShowcaseLayout 
					onLayoutChange={this.onLayoutChange} />
				</div>
		)
	}
}

export default App
