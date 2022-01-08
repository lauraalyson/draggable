import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ShowcaseLayout from './components/GridLayout';
import Header from './components/Header';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { layout: [] }
	}

	render() {
		return (
			<div>
				<div
					className='row'
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
						padding: '1em',
					}}>
					<div
						className='col-12'
						style={{ maxWidth: '950px' }}>
						<Header />	
						{/* <ShowcaseLayout onLayoutChange={this.onLayoutChange} /> */}
					</div>
				</div>
			</div>
		)
	}
}

export default App
