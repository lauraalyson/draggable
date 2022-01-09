//  Import Dependencies
import React from "react";
import PropTypes from "prop-types";
import { Responsive, WidthProvider } from "react-grid-layout";
import { motion } from 'framer-motion';

// Import Components
import Map from './Widgets/Map'
import Bio from "./Widgets/Bio";
import Playground from "./Widgets/Playground";
import Digiseum from "./Widgets/Digiseum";
import TicTacToe from './Widgets/TicTacToe';
import Spotify from "./Widgets/Spotify";
import lauraMemoji from './Assets/laura-memoji.png';
import mapHover from './Assets/map-hover.png';
import LinkedIn from "./Widgets/LinkedIn";
import Github from './Widgets/Github';
import layoutConfig from "./Layouts/Layout";
import aboutLayout from "./Layouts/AboutLayout";

// Import Styles
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import "./../App.css"
import Skills from "./Widgets/Skills";
import Contact from "./Widgets/Contact";


const ResponsiveReactGridLayout = WidthProvider(Responsive);
	const transition = { duration: 0.5, ease: 'easeInOut' }

	const postVariants = {
		initial: { y: -5, opacity: 0 },
		enter: { y: 0, opacity: 1, transition },
		exit: { y: 5, opacity: 0, transition },
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
		// this.onNewLayout = this.onNewLayout.bind(this);
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

	// onNewLayout() {
	// this.setState({
	// 	layouts: { lg: layoutConfig }
	// });
	// }

	render() {
		// const { sort } = this.props
		const { layouts } = this.state

		return (
			<motion.div
				initial='exit'
				animate='enter'
				exit='exit'
				variants={postVariants}>
				<ResponsiveReactGridLayout
					cancel='.btn'
					animate
					{...this.props}
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
					<div key='0'>
						<Bio layout={this.state.currentBreakpoint} />
					</div>
					<div key='1'>
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
					<div key='3'>
						<Spotify />
					</div>
					<div key='4'>
						<Github />
					</div>
					<div key='5'>
						<Playground />
					</div>
					<div key='6'>
						<Digiseum />
					</div>
					<div key='7'>
						<LinkedIn />
					</div>
					<div key='8'>
						<Skills />
					</div>
					<div key='9'>
						<Contact layout={this.state.currentBreakpoint} />
					</div>
				</ResponsiveReactGridLayout>
			</motion.div>
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
  breakpoints: { lg: 900, md: 800, sm: 800, xs: 450, xxs: 400 }
};
