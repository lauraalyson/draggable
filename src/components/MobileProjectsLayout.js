//  Import Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { motion } from 'framer-motion'

// Import Components
import Map from './Widgets/Map'
import Bio from './Widgets/Bio'
import Playground from './Widgets/Playground'
import Digiseum from './Widgets/Digiseum'
import TicTacToe from './Widgets/TicTacToe'
import Spotify from './Widgets/Spotify'
import lauraMemoji from './Assets/Graphics/laura-memoji.png'
import mapHover from './Assets/Graphics/map-hover.png'
import LinkedIn from './Widgets/LinkedIn'
import Github from './Widgets/Github'
import projectsLayout from './Layouts/ProjectsLayout'

// Import Styles
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './../App.css'
import Skills from './Widgets/Skills'
import Contact from './Widgets/Contact'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

export default class MobileProjectsLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentBreakpoint: '',
			compactType: 'vertical',
			mounted: false,
			layouts: projectsLayout,
		}

		this.onBreakpointChange = this.onBreakpointChange.bind(this)
		this.onLayoutChange = this.onLayoutChange.bind(this)
	}

	componentDidMount() {
		this.setState({ mounted: true })
	}

	onBreakpointChange(breakpoint) {
		this.setState({
			currentBreakpoint: breakpoint,
		})
	}

	onLayoutChange = (layout, layouts) => {
		this.setState({ layouts })
	}

	render() {
		const { layouts } = this.state

		return (
			<motion.div>
				<ResponsiveReactGridLayout
					{...this.props}
					cancel='.btn'
					animate
					isResizable='false'
					isBounded='true'
					className='showcase-container'
					layouts={{
						lg: layouts.lg,
						md: layouts.md,
						sm: layouts.sm,
						xs: layouts.xs,
						xxs: layouts.xxs,
					}}
					breakpoints={{ lg: 1000, md: 750, sm: 660, xs: 450, xxs: 400 }}
					onBreakpointChange={this.onBreakpointChange}
					onLayoutChange={this.onLayoutChange}
					measureBeforeMount={false}
					useCSSTransforms={this.state.mounted}
					compactType={this.state.compactType}
					preventCollision={!this.state.compactType}>
					<div style={{ opacity: '40%' }} key='0'>
						<Bio layout={this.state.currentBreakpoint} />
					</div>
					<div style={{ opacity: '40%' }} key='1'>
						<div className='map-widget-overlay'>
							<img
								className='memoji-map'
								src={lauraMemoji}
								alt='laura-memoji'
							/>
							<img className='hover-map' src={mapHover} alt='map-hover' />
						</div>
						<Map />
					</div>
					<div key='2'>
						<TicTacToe />
					</div>
					<div style={{ opacity: '40%' }} key='3'>
						<Spotify />
					</div>
					<div style={{ opacity: '40%' }} key='4'>
						<Github />
					</div>
					<div key='5'>
						<Playground />
					</div>
					<div key='6'>
						<Digiseum />
					</div>
					<div style={{ opacity: '40%' }} key='7'>
						<LinkedIn />
					</div>
					<div style={{ opacity: '40%' }} key='8'>
						<Skills layout={this.state.currentBreakpoint} />
					</div>
					<div style={{ opacity: '40%' }} key='9'>
						<Contact layout={this.state.currentBreakpoint} />
					</div>
				</ResponsiveReactGridLayout>
			</motion.div>
		)
	}
}

MobileProjectsLayout.propTypes = {
	onLayoutChange: PropTypes.func.isRequired,
}

MobileProjectsLayout.defaultProps = {
	isDraggable: false,
	className: 'layout',
	rowHeight: 30,
	onLayoutChange: function () {},
	cols: { lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 },
	breakpoints: { lg: 900, md: 800, sm: 800, xs: 450, xxs: 400 },
}
