import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowcaseLayout from './components/GridLayout';
import Header from './components/Header';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { layout: [] }
	}

	render() {
		return (
			<div className='body-container'>
				<Header />
				<ShowcaseLayout 
				onLayoutChange={this.onLayoutChange} />
			</div>
		)
	}
}

export default App
