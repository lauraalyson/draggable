import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/Header';
import ProjectPlayground from './components/Widgets/Projects/ProjectPlayground';
import ProjectDigiseum from './components/Widgets/Projects/ProjectDigiseum';


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
