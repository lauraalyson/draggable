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
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '2em 1em',
				}}>
				<h1>Laura Waterbury</h1>
				<h3 style={{ color: 'grey' }}>Monday, Feb 14th.</h3>
			</div>

			{/* Notification */}
			<div className='notification-bar'>
				<div className='notification'>
					<div className='notification-button'>+</div>
					<div className='notification-body'>
						<h5>Check it out 👀 </h5>
						<h6>Jump straight into my inbox, here.</h6>
					</div>
				</div>

				<div className='notification'>
					<div className='notification-button'>+</div>
					<div className='notification-body'>
						<h5>Straight to the point 👋 </h5>
						<h6>Drag the widgets to rearrange the grid.</h6>
					</div>
				</div>
			</div>

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
						{/* <Route
							path='/'
							element={isMobile ? <MobileShowcaseLayout /> : <ShowcaseLayout />}
						/> */}

						<Route
							path='/'
							element={<ShowcaseLayout />}
						/>
					</Routes>

					<div>
						<h1>Header 1</h1>
						<h2>Header 2</h2>
						<h3>Header 3</h3>
						<h4>Header 4</h4>
						<h5>Header 5</h5>
						<h6>Header 6</h6>
						<p>Paragraph</p>
						<div>Div Text</div>
						<a href='/'>Link</a> <br />
						<input placeholder='Input tag' />
						<button>Button</button> <br />
					</div>
				</div>
			</div>
		</Router>
	)
}

export default App
