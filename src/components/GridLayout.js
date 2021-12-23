//  Import Dependencies
import React from "react";
import PropTypes from "prop-types";
import { Responsive, WidthProvider } from "react-grid-layout";
import { motion } from 'framer-motion';

// Import Components
import DivFill from './Widgets/DivFill'
import Map from './Widgets/Map'
import Bio from "./Widgets/Bio";
import Project1 from "./Widgets/Project1";
import Project2 from "./Widgets/Project2";
import Project3 from './Widgets/Project3';
import Contact from "./Widgets/Contact";
import Spotify from "./Widgets/Spotify";
import Links from "./Widgets/Links";
import lauraMemoji from './Assets/laura-memoji.png';
import mapHover from './Assets/map-hover.png';

// Import Syles
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import "./../App.css"


const ResponsiveReactGridLayout = WidthProvider(Responsive);
const layoutConfig = {
	lg: [
		{ i: '0', x: 0, y: 0, w: 2, h: 7 },
		{ i: '1', x: 2, y: 0, w: 1, h: 7 },
		{ i: '2', x: 4, y: 0, w: 1, h: 14 },
		{ i: '3', x: 0, y: 9, w: 1, h: 7 },
		{ i: '4', x: 1, y: 9, w: 1, h: 7 },
		{ i: '5', x: 2, y: 9, w: 1, h: 14 },
		{ i: '6', x: 0, y: 18, w: 2, h: 7 },
		{ i: '7', x: 4, y: 18, w: 1, h: 7 },
		{ i: '8', x: 0, y: 27, w: 2, h: 7 },
		{ i: '9', x: 4, y: 27, w: 2, h: 7 },
	],
	md: [
		{ i: '0', x: 0, y: 0, w: 2, h: 6 },
		{ i: '1', x: 2, y: 0, w: 1, h: 6 },
		{ i: '2', x: 4, y: 0, w: 1, h: 12 },
		{ i: '3', x: 0, y: 9, w: 1, h: 6 },
		{ i: '4', x: 1, y: 9, w: 1, h: 6 },
		{ i: '5', x: 2, y: 9, w: 1, h: 12 },
		{ i: '6', x: 0, y: 18, w: 2, h: 6 },
		{ i: '7', x: 4, y: 18, w: 1, h: 6 },
		{ i: '8', x: 0, y: 27, w: 2, h: 6 },
		{ i: '9', x: 4, y: 27, w: 2, h: 6 },
	],
	sm: [
		{ i: '0', x: 0, y: 0, w: 2, h: 12 },
		{ i: '1', x: 2, y: 0, w: 1, h: 6 },
		{ i: '2', x: 4, y: 0, w: 1, h: 12 },
		{ i: '3', x: 0, y: 9, w: 1, h: 6 },
		{ i: '4', x: 1, y: 9, w: 1, h: 6 },
		{ i: '5', x: 4, y: 9, w: 1, h: 12 },
		{ i: '6', x: 0, y: 18, w: 2, h: 6 },
		{ i: '7', x: 4, y: 18, w: 1, h: 6 },
		{ i: '8', x: 0, y: 27, w: 2, h: 6 },
		{ i: '9', x: 0, y: 18, w: 2, h: 6 },
	],
	xs: [
		{ i: '0', x: 0, y: 0, w: 2, h: 10 },
		{ i: '1', x: 0, y: 0, w: 2, h: 6 },
		{ i: '2', x: 2, y: 0, w: 1, h: 12 },
		{ i: '3', x: 0, y: 9, w: 1, h: 6 },
		{ i: '4', x: 2, y: 9, w: 1, h: 6 },
		{ i: '5', x: 0, y: 9, w: 1, h: 12 },
		{ i: '6', x: 0, y: 18, w: 2, h: 6 },
		{ i: '7', x: 2, y: 18, w: 1, h: 6 },
		{ i: '8', x: 0, y: 27, w: 1, h: 6 },
		{ i: '9', x: 0, y: 18, w: 2, h: 6 },
	],
	xxs: [
		{ i: '0', x: 0, y: 0, w: 2, h: 8 },
		{ i: '1', x: 0, y: 0, w: 2, h: 4 },
		{ i: '2', x: 2, y: 0, w: 1, h: 8 },
		{ i: '3', x: 0, y: 9, w: 1, h: 4 },
		{ i: '4', x: 2, y: 9, w: 1, h: 4 },
		{ i: '5', x: 0, y: 9, w: 1, h: 8 },
		{ i: '6', x: 0, y: 18, w: 2, h: 4 },
		{ i: '7', x: 2, y: 18, w: 1, h: 4 },
		{ i: '8', x: 0, y: 27, w: 1, h: 4 },
		{ i: '9', x: 0, y: 18, w: 2, h: 4 },
	],
}

export default class ShowcaseLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentBreakpoint: '',
			compactType: 'vertical',
			mounted: false,
			layouts: layoutConfig,
		}

		this.onBreakpointChange = this.onBreakpointChange.bind(this)
		this.onLayoutChange = this.onLayoutChange.bind(this)
		this.onNewLayout = this.onNewLayout.bind(this);
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

	onNewLayout() {
	this.setState({
		layouts: { lg: layoutConfig }
	});
	}

	render() {
		return (
			<div>
				<ResponsiveReactGridLayout
					{...this.props}
					layouts={{
						lg: layoutConfig.lg,
						md: layoutConfig.md,
						sm: layoutConfig.sm,
						xs: layoutConfig.xs,
						xxs: layoutConfig.xxs,
					}}
					  breakpoints={{ lg: 1000, md: 750, sm: 600, xs: 450, xxs: 400 }}
					onBreakpointChange={this.onBreakpointChange}
					onLayoutChange={this.onLayoutChange}
					measureBeforeMount={false}
					useCSSTransforms={this.state.mounted}
					compactType={this.state.compactType}
					preventCollision={!this.state.compactType}>
					<motion.div className='widget-bio' key='0'>
						<Bio />
					</motion.div>
					<motion.div key='1'>
						<div className='map-widget-overlay'>
							<img className='memoji-map' src={lauraMemoji} alt='laura-memoji' />
							<img className='hover-map' src={mapHover} alt='map-hover'/>
						</div>
						<Map />
					</motion.div>
					<motion.div key='2'>
						<Project2 />
					</motion.div>
					<motion.div key='3'>
						<Spotify />
					</motion.div>
					<motion.div key='4'>
						<Links />
					</motion.div>
					<motion.div key='5'>
						<Project1 />
					</motion.div>
					<motion.div key='6'>
						<DivFill />
					</motion.div>
					<motion.div key='7'>
						<DivFill />
					</motion.div>
					<motion.div key='8'>
						<Contact />
					</motion.div>
					<motion.div key='9'>
						<Project3 />
					</motion.div>
				</ResponsiveReactGridLayout>
			</div>
		)
	}
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
};

ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function() {},
  cols: { lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 },
  breakpoints: { lg: 1000, md: 960, sm: 800, xs: 450, xxs: 400 }
};