import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CompLayout from './components/CompLayout';

const notifications = [
	{
		header: 'Check it out 👀 ',
		body: 'Drag the widgets to rearrange the grid.',
	},
	{
		header: 'Straight to the point 💬 ',
		body: 'Jump straight into my inbox, here.',
	}
]

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
				{notifications.map((notification, i) => (
					<motion.div
						key={i}
						positionTransition
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: i - 0.4 }}
						className='notification'>
						<div className='notification-button'>+</div>
						<div className='notification-body'>
							<h5>{notification.header}</h5>
							<h6>{notification.body}</h6>
						</div>
					</motion.div>
				))}
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
						<Route path='/' element={<CompLayout />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
