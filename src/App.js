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
