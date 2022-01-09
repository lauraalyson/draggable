import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header';
import ProjectPlayground from './components/Widgets/Projects/ProjectPlayground';
import ProjectDigiseum from './components/Widgets/Projects/ProjectDigiseum';
import ProjectTicTacToe from './components/Widgets/Projects/ProjectTicTacToe';

const App = () => {
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
							<Route path='/' element={<Header />} />
							<Route path='/playground' element={<ProjectPlayground />} />
							<Route path='/digi-seum' element={<ProjectDigiseum />} />
							<Route path='/tic-tac-toe' element={<ProjectTicTacToe />} />
						</Routes>
					</div>
				</div>
			</Router>
		)
	}

export default App
