import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ShowcaseLayout from './components/GridLayout';
import MobileShowcaseLayout from './components/MobileGridLayout';


function App() {

	return (
	<Router>
		<div
		className='row'
		style={{
			justifyContent: 'center',
			alignItems: 'center',
			height: '100%',
			padding: '1em',
		}}>
			<div className='col-12 grid-container'>
				<div>
					<h1>Header 1</h1>
					<h2>Header 2</h2>
					<h3>Header 3</h3>
					<h4>Header 4</h4>
					<h5>Header 5</h5>
					<h6>Header 6</h6>
					<p>Paragraph</p>
					<div>Div Text</div>
					<a href='/' >Link</a> <br />
					<input placeholder='Input tag'/>
					<button>Button</button> <br />
				</div>
				<Routes>
					<Route
						path='/'
						element={isMobile ? <MobileShowcaseLayout  /> : <ShowcaseLayout />}
					/>
				</Routes>
			</div>
		</div>
	</Router>
	)
}

export default App
