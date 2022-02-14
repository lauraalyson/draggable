//  Import Dependencies
import React from "react";
import PropTypes from "prop-types";
import { Responsive, WidthProvider } from "react-grid-layout";
import { motion } from 'framer-motion';

// Import Components
import layoutConfig from "./Layouts/Layout";

// Import Styles
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import "./../App.css"

const ResponsiveReactGridLayout = WidthProvider(Responsive);
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
					<div key='0'>
					</div>
					<div key='1'>
					</div>
					<div key='2'>
					</div>
					<div key='3'>
					</div>
					<div key='4'>
					</div>
					<div key='5'>
					</div>
					<div key='6'>
					</div>
					<div key='7'>
					</div>
					<div key='8'>
					</div>
					<div key='9'>
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
  isDraggable: true,
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function() {},
  cols: { lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 },
  breakpoints: { lg: 900, md: 800, sm: 800, xs: 450, xxs: 400 }
};
