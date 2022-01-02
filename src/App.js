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
				
				{/* <h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
				<p>Paragraph</p>
				<input placeholder='Input'/>
				<button>Button</button> */}
					<Header />
					<ShowcaseLayout 
					onLayoutChange={this.onLayoutChange} />
				</div>
		)
	}
}

export default App
