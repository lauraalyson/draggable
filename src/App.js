import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ShowcaseLayout from './components/GridLayout';
import ProjectPlayground from './components/Widgets/Projects/ProjectPlayground';
import ProjectDigiseum from './components/Widgets/Projects/ProjectDigiseum';
import Header from './components/Header';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { layout: [] }
	}

	render() {
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
			<div className='col-12' style={{ maxWidth: '950px' }}>
				<Routes>
					<Route path='/' element={<Header />} />
					
					<Route path='/playground' element={<ProjectPlayground />} />
					<Route path='/digi-seum' element={<ProjectDigiseum />} />

				</Routes>
			</div>
		</div>
		</Router>
		)
	}
}

export default App

{/* <Route path='/' element={<ShowcaseLayout onLayoutChange={this.onLayoutChange} />} /> */}
