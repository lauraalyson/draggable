
// LARGE MEDIUM

const layout = [
	{ i: '0', x: 0, y: 0, w: 4, h: 7 },
	{ i: '1', x: 4, y: 0, w: 2, h: 7 },
	{ i: '2', x: 0, y: 9, w: 2, h: 7 },
	{ i: '3', x: 2, y: 9, w: 2, h: 7 },
	{ i: '4', x: 4, y: 9, w: 2, h: 14 },
	{ i: '5', x: 0, y: 18, w: 4, h: 7 },
	{ i: '6', x: 0, y: 27, w: 2, h: 7 },
	{ i: '7', x: 2, y: 27, w: 4, h: 7 },
]

// SM
const layout = [
        { i: '0', x: 0, y: 0, w: 4, h: 7 },
        { i: '1', x: 0, y: 0, w: 2, h: 7 },
        { i: '2', x: 2, y: 0, w: 2, h: 7 },
        { i: '3', x: 2, y: 9, w: 2, h: 7 },
        { i: '4', x: 0, y: 18, w: 2, h: 14 },
        { i: '5', x: 0, y: 9, w: 4, h: 7 },
        { i: '6', x: 2, y: 18, w: 2, h: 7 },
        { i: '7', x: 2, y: 27, w: 4, h: 7 },
    ]

//  XS XXS
const layout = [
        { i: '0', x: 0, y: 0, w: 4, h: 7 },
        { i: '1', x: 0, y: 0, w: 2, h: 5 },
        { i: '2', x: 2, y: 0, w: 2, h: 5 },
        { i: '3', x: 2, y: 9, w: 2, h: 5 },
        { i: '4', x: 0, y: 18, w: 2, h: 10 },
        { i: '5', x: 0, y: 9, w: 4, h: 7 },
        { i: '6', x: 2, y: 18, w: 2, h: 5 },
        { i: '7', x: 2, y: 27, w: 4, h: 7 },
    ]

import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import "./../App.css"

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: storedLayouts
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    // this.onNewLayout = this.onNewLayout.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(l, i) {
      return (
        <div key={i}>
            <div className="text grid-container">
                <div>
                 This is the text rendered on the div - {i}   
                </div>
            </div>
        </div>
      );
    });
  }

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  }

  onCompactTypeChange() {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
          ? null
          : "horizontal";
    this.setState({ compactType });
  }

  onLayoutChange(layout, layouts) {
    this.props.onLayoutChange(layout, layouts);
  }

//   onNewLayout() {
//     this.setState({
//       layouts: { lg: generateLayout() }
//     });
//   }
  onLayoutChange = (layout, layouts) => {
    this.setState({ layouts });
  };

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
};

ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  isResizable: false,
  onLayoutChange: function() {},
  cols: { lg: 6, md: 6, sm: 6, xs: 4, xxs: 4 },
//   initialLayout: generateLayout()
};

;[
	{ i: '0', x: 0, y: 0, w: 4, h: 7 },
	{ i: '1', x: 4, y: 0, w: 2, h: 7 },
	{ i: '2', x: 0, y: 9, w: 2, h: 7 },
	{ i: '3', x: 2, y: 9, w: 2, h: 7 },
	{ i: '4', x: 4, y: 9, w: 2, h: 14 },
	{ i: '5', x: 0, y: 18, w: 4, h: 7 },
	{ i: '6', x: 0, y: 27, w: 2, h: 7 },
	{ i: '7', x: 2, y: 27, w: 4, h: 7 },
]
const storedLayouts = {
   lg: [
			{ i: '0', x: 0, y: 0, w: 4, h: 7 },
			{ i: '1', x: 4, y: 0, w: 2, h: 7 },
			{ i: '2', x: 0, y: 9, w: 2, h: 7 },
			{ i: '3', x: 2, y: 9, w: 2, h: 7 },
			{ i: '4', x: 4, y: 9, w: 2, h: 14 },
			{ i: '5', x: 0, y: 18, w: 4, h: 7 },
			{ i: '6', x: 0, y: 27, w: 2, h: 7 },
			{ i: '7', x: 2, y: 27, w: 4, h: 7 }
		]
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
        { i: '7', x: 2, y: 27, w: 4, h: 7 },
    ],
    xxs: [
        { i: '0', x: 0, y: 0, w: 4, h: 7 },
        { i: '1', x: 0, y: 0, w: 2, h: 5 },
        { i: '2', x: 2, y: 0, w: 2, h: 5 },
        { i: '3', x: 2, y: 9, w: 2, h: 5 },
        { i: '4', x: 0, y: 18, w: 2, h: 10 },
        { i: '5', x: 0, y: 9, w: 4, h: 7 },
        { i: '6', x: 2, y: 18, w: 2, h: 5 },
        { i: '7', x: 2, y: 27, w: 4, h: 7 },
    ], 
} 

    // return layout.map((layout) => {
    //     return {
    //         i: layout.i,
    //         x: layout.x,
    //         y: layout.y,
    //         w: layout.w,
    //         h: layout.h
    //     }
    // })
