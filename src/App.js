import React, { Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
// import Header from './components/Header';
import ProjectPlayground from './components/Widgets/Projects/ProjectPlayground';
import ProjectDigiseum from './components/Widgets/Projects/ProjectDigiseum';
import ProjectTicTacToe from './components/Widgets/Projects/ProjectTicTacToe';
// import AboutLayout from './components/AboutLayout';
// import MobileAboutLayout from './components/MobileAboutLayout';
import ShowcaseLayout from './components/GridLayout';
import MobileShowcaseLayout from './components/MobileGridLayout';
// import ProjectsLayout from './components/ProjectsLayout';
// import MobileProjectsLayout from './components/MobileProjectsLayout';
// import layoutConfig from './components/Layouts/Layout';
// import aboutLayout from './components/Layouts/AboutLayout';

function App() {
	// const [layout, setLayout] = layoutConfig

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
						<Fragment>
							{/* <nav className='nav'>
								<NavLink  layouts={layout} className='NavLink' to='/'> Home </NavLink>
								<NavLink onClick={() => setLayout(aboutLayout)} className='NavLink' to='/about'> About </NavLink>
								<NavLink  layouts={layout} className='NavLink' to='/projects'> Projects </NavLink>
							</nav> */}
						</Fragment>
						{/* <Header /> */}
						<Routes>
							<Route
								path='/'
								element={isMobile ? <MobileShowcaseLayout  /> : <ShowcaseLayout />}
							/>
							{/* <Route
								path='/about'
								element={isMobile ? <MobileAboutLayout  layouts={layout} /> : <AboutLayout layouts={layout}  />}
							/>
							<Route
								path='/projects'
								element={isMobile ? <MobileProjectsLayout  layouts={layout} /> : <ProjectsLayout  layouts={layout} />}
							/> */}
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
