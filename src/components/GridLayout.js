//  Import Dependencies
import React from "react";
import PropTypes from "prop-types";
import { Responsive, WidthProvider } from "react-grid-layout";

// Import Components
import DivFill from './DivFill'
import Map from './map'

// Import Syles
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import "./../App.css"
import Bio from "./Widgets/Bio";
import Project1 from "./Widgets/Project1";
import Project2 from "./Widgets/Project2";
import Project3 from './Widgets/Project3';
import Contact from "./Widgets/Contact";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const layoutConfig = {
	lg: [
		{ i: '0', x: 0, y: 0, w: 3, h: 7 },
		{ i: '1', x: 4, y: 0, w: 2, h: 7 },
		{ i: '2', x: 0, y: 9, w: 2, h: 7 },
		{ i: '3', x: 2, y: 9, w: 2, h: 7 },
		{ i: '4', x: 4, y: 9, w: 2, h: 14 },
		{ i: '5', x: 0, y: 18, w: 4, h: 7 },
		{ i: '6', x: 0, y: 27, w: 2, h: 7 },
		{ i: '7', x: 2, y: 27, w: 4, h: 7 },
	],
	md: [
		{ i: '0', x: 0, y: 0, w: 4, h: 7 },
		{ i: '1', x: 4, y: 0, w: 2, h: 7 },
		{ i: '2', x: 0, y: 9, w: 2, h: 7 },
		{ i: '3', x: 2, y: 9, w: 2, h: 7 },
		{ i: '4', x: 4, y: 9, w: 2, h: 14 },
		{ i: '5', x: 0, y: 18, w: 4, h: 7 },
		{ i: '6', x: 0, y: 27, w: 2, h: 7 },
		{ i: '7', x: 2, y: 27, w: 4, h: 7 },
	],
	sm: [
		{ i: '0', x: 0, y: 0, w: 4, h: 7 },
		{ i: '1', x: 0, y: 0, w: 2, h: 7 },
		{ i: '2', x: 2, y: 0, w: 2, h: 7 },
		{ i: '3', x: 2, y: 9, w: 2, h: 7 },
		{ i: '4', x: 0, y: 18, w: 2, h: 14 },
		{ i: '5', x: 0, y: 9, w: 4, h: 7 },
		{ i: '6', x: 2, y: 18, w: 2, h: 7 },
		{ i: '7', x:0, y: 27, w: 4, h: 7 },
	],
	xs: [
		{ i: '0', x: 0, y: 0, w: 4, h: 7 },
		{ i: '1', x: 0, y: 0, w: 2, h: 5 },
		{ i: '2', x: 2, y: 0, w: 2, h: 5 },
		{ i: '3', x: 2, y: 9, w: 2, h: 5 },
		{ i: '4', x: 0, y: 18, w: 2, h: 10 },
		{ i: '5', x: 0, y: 9, w: 4, h: 7 },
		{ i: '6', x: 2, y: 18, w: 2, h: 5 },
		{ i: '7', x: 0, y: 27, w: 4, h: 7 },
	],
	xxs: [
		{ i: '0', x: 0, y: 0, w: 4, h: 7 },
		{ i: '1', x: 0, y: 0, w: 2, h: 5 },
		{ i: '2', x: 2, y: 0, w: 2, h: 5 },
		{ i: '3', x: 2, y: 9, w: 2, h: 5 },
		{ i: '4', x: 0, y: 18, w: 2, h: 10 },
		{ i: '5', x: 0, y: 9, w: 4, h: 7 },
		{ i: '6', x: 2, y: 18, w: 2, h: 5 },
		{ i: '7', x: 0, y: 27, w: 4, h: 7 },
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
					onBreakpointChange={this.onBreakpointChange}
					onLayoutChange={this.onLayoutChange}
					measureBeforeMount={false}
					useCSSTransforms={this.state.mounted}
					compactType={this.state.compactType}
					preventCollision={!this.state.compactType}>

					<div className="widget-bio" key='0'>
						<Bio />
					</div>
					<div key='1'>
						<DivFill />
					</div>
					<div key='2'>
						<Map />
					</div>
					<div key='3'>
						<DivFill />
					</div>
					<div key='4'>
						<Project1 />
					</div>
					<div key='5'>
						<Project2 />
					</div>
					<div key='6'>
						<Contact />
					</div>
					<div key='7'>
						<Project3 />
					</div>

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
  cols: { lg: 6, md: 6, sm: 6, xs: 4, xxs: 4 },
  breakpoints: { lg: 1000, md: 750, sm: 700, xs: 475, xxs: 450 }
};
