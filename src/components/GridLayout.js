import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import DivFill from './DivFill'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { Responsive, WidthProvider } from "react-grid-layout";
import "./../App.css"

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
		// this.onCompactTypeChange = this.onCompactTypeChange.bind(this)
		this.onLayoutChange = this.onLayoutChange.bind(this)
		this.onNewLayout = this.onNewLayout.bind(this);
	}

	componentDidMount() {
		this.setState({ mounted: true })
	}

	// generateDOM() {
	// 	return _.map(this.state.layouts.lg, function (l, i) {
	// 		return (
	// 			<div key={i}>
	// 				<div key='1' className='text grid-container'>
	// 					<DivFill />
	// 				</div>
	// 			</div>
	// 		)
	// 	})
	// }

	onBreakpointChange(breakpoint) {
		this.setState({
			currentBreakpoint: breakpoint,
		})
	}

	// onCompactTypeChange() {
	// 	const { compactType: oldCompactType } = this.state
	// 	const compactType =
	// 		oldCompactType === 'horizontal'
	// 			? 'vertical'
	// 			: oldCompactType === 'vertical'
	// 			? null
	// 			: 'horizontal'
	// 	this.setState({ compactType })
	// }

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
					{/* {this.generateDOM()} */}
					<div key='0'>
						<DivFill />
					</div>
					<div key='1'>
						<DivFill />
					</div>
					<div key='2'>
						<DivFill />
					</div>
					<div key='3'>
						<DivFill />
					</div>
					<div key='4'>
						<DivFill />
					</div>
					<div key='5'>
						<DivFill />
					</div>
					<div key='6'>
						<DivFill />
					</div>
					<div key='7'>
						<DivFill />
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
//   initialLayout: generateLayout()
};

// function generateLayout() {
//     return {
// 			lg: [
// 				{ i: '0', x: 0, y: 0, w: 4, h: 7 },
// 				{ i: '1', x: 4, y: 0, w: 2, h: 7 },
// 				{ i: '2', x: 0, y: 9, w: 2, h: 7 },
// 				{ i: '3', x: 2, y: 9, w: 2, h: 7 },
// 				{ i: '4', x: 4, y: 9, w: 2, h: 14 },
// 				{ i: '5', x: 0, y: 18, w: 4, h: 7 },
// 				{ i: '6', x: 0, y: 27, w: 2, h: 7 },
// 				{ i: '7', x: 2, y: 27, w: 4, h: 7 },
// 			],
// 			md: [
// 				{ i: '0', x: 0, y: 0, w: 4, h: 7 },
// 				{ i: '1', x: 4, y: 0, w: 2, h: 7 },
// 				{ i: '2', x: 0, y: 9, w: 2, h: 7 },
// 				{ i: '3', x: 2, y: 9, w: 2, h: 7 },
// 				{ i: '4', x: 4, y: 9, w: 2, h: 14 },
// 				{ i: '5', x: 0, y: 18, w: 4, h: 7 },
// 				{ i: '6', x: 0, y: 27, w: 2, h: 7 },
// 				{ i: '7', x: 2, y: 27, w: 4, h: 7 },
// 			],
// 			sm: [
// 				{ i: '0', x: 0, y: 0, w: 4, h: 7 },
// 				{ i: '1', x: 4, y: 0, w: 2, h: 7 },
// 				{ i: '2', x: 0, y: 9, w: 2, h: 7 },
// 				{ i: '3', x: 2, y: 9, w: 2, h: 7 },
// 				{ i: '4', x: 4, y: 9, w: 2, h: 14 },
// 				{ i: '5', x: 0, y: 18, w: 4, h: 7 },
// 				{ i: '6', x: 0, y: 27, w: 2, h: 7 },
// 				{ i: '7', x: 2, y: 27, w: 4, h: 7 },
// 			],
// 			sm: [
// 				{ i: '0', x: 0, y: 0, w: 4, h: 7 },
// 				{ i: '1', x: 0, y: 0, w: 2, h: 7 },
// 				{ i: '2', x: 2, y: 0, w: 2, h: 7 },
// 				{ i: '3', x: 2, y: 9, w: 2, h: 7 },
// 				{ i: '4', x: 0, y: 18, w: 2, h: 14 },
// 				{ i: '5', x: 0, y: 9, w: 4, h: 7 },
// 				{ i: '6', x: 2, y: 18, w: 2, h: 7 },
// 				{ i: '7', x: 0, y: 27, w: 4, h: 7 },
// 			],
// 			xs: [
// 				{ i: '0', x: 0, y: 0, w: 4, h: 7 },
// 				{ i: '1', x: 0, y: 0, w: 2, h: 5 },
// 				{ i: '2', x: 2, y: 0, w: 2, h: 5 },
// 				{ i: '3', x: 2, y: 9, w: 2, h: 5 },
// 				{ i: '4', x: 0, y: 18, w: 2, h: 10 },
// 				{ i: '5', x: 0, y: 9, w: 4, h: 7 },
// 				{ i: '6', x: 2, y: 18, w: 2, h: 5 },
// 				{ i: '7', x: 0, y: 27, w: 4, h: 7 },
// 			],
// 			xxs: [
// 				{ i: '0', x: 0, y: 0, w: 4, h: 7 },
// 				{ i: '1', x: 0, y: 0, w: 2, h: 5 },
// 				{ i: '2', x: 2, y: 0, w: 2, h: 5 },
// 				{ i: '3', x: 2, y: 9, w: 2, h: 5 },
// 				{ i: '4', x: 0, y: 18, w: 2, h: 10 },
// 				{ i: '5', x: 0, y: 9, w: 4, h: 7 },
// 				{ i: '6', x: 2, y: 18, w: 2, h: 5 },
// 				{ i: '7', x: 0, y: 27, w: 4, h: 7 },
// 			],
// 		}
// }
