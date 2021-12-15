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
      layouts: { lg: props.initialLayout }
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onNewLayout = this.onNewLayout.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(l, i) {
      return (
        <div key={i}>
            <div className="text">
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

  onNewLayout() {
    this.setState({
      layouts: { lg: generateLayout() }
    });
  }

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
        //   style={{ maxWidth: '80%' }}
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
  onLayoutChange: function() {},
  cols: { lg: 6, md: 6, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout()
};


function generateLayout() {
    const layout = [
			{ i: '0', x: 0, y: 0, w: 4, h: 7 },
			{ i: '1', x: 4, y: 0, w: 2, h: 7 },
			{ i: '2', x: 0, y: 9, w: 2, h: 7 },
			{ i: '3', x: 2, y: 9, w: 2, h: 7 },
			{ i: '4', x: 4, y: 9, w: 2, h: 14 },
			{ i: '5', x: 0, y: 18, w: 4, h: 7 },
			{ i: '6', x: 0, y: 27, w: 2, h: 7 },
			{ i: '7', x: 2, y: 27, w: 4, h: 7 }
		]

    return layout.map((layout) => {
        return {
            i: layout.i,
            x: layout.x,
            y: layout.y,
            w: layout.w,
            h: layout.h
        }
    })

	// return _.map(_.range(0, 10), function (item, i) {
	// 	var y = Math.ceil(Math.random() * 4) + 1
	// 	return {
	// 		x: (_.random(0, 5) * 2) % 12,
	// 		y: Math.floor(i / 6) * y,
	// 		w: 1,
	// 		h: y * 3,
	// 		i: i.toString(),
	// 	}
	// })
}

// function generateLayout() {
//   return _.map(_.range(0, 10), function(item, i) {
//     var y = Math.ceil(Math.random() * 4) + 1;
//     return {
//       x: (_.random(0, 5) * 2) % 12,
//       y: Math.floor(i / 6) * y,
//       w: 1,
//       h: y * 3,
//       i: i.toString()
//     };
//   });
// }
