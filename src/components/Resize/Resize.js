// @flow
import * as React from 'react';
// styles
import './resize.sass';

type Props = {
  strokeWidth: number,
  strokeDasharray: number,
  stroke: 'string',
  padding: number,
  children?: React.Node,
};

type State = {
  hover: boolean,
};

class Resize extends React.Component<Props, State> {
  static defaultProps = {
    strokeWidth: '3',
    strokeDasharray: '7',
    stroke: 'black',
    padding: 8,
  };

  state = {
    hover: false,
  };

  childRef = null;

  onHover = () => {
    this.setState((state) => ({ hover: true }));
  };

  onUnHover = () => {
    this.setState((state) => ({ hover: false }));
  };

  viewBox = () => {
    if (this.childRef) {
      const { x, y, width, height } = this.childRef.getBBox();
      return `${x} ${y} ${width} ${height}`;
    }

    return 'auto';
  };

  rect = () => {
    if (this.childRef) {
      const { x, y, width, height } = this.childRef.getBBox();
      return {
        x: x - this.props.padding,
        y: y - this.props.padding,
        width: width + this.props.padding * 2,
        height: height + this.props.padding * 2,
      };
    }

    return { x1: 0, y1: 0, width: 0, height: 0 };
  };

  bubbleRef = (ref) => {
    this.childRef = ref;
    this.forceUpdate();
  };

  render() {
    return (
      <g
        viewBox={this.viewBox()}
        className="resize"
        onMouseEnter={this.onHover}
        onMouseLeave={this.onUnHover}
      >
        <rect
          className="resize_rect"
          {...this.rect()}
          {...this.props}
          fill="none"
        />
        {React.cloneElement(React.Children.only(this.props.children), {
          bubbleRef: this.bubbleRef,
          onMouseEnter: this.onHover,
          onMouseLeave: this.onUnHover,
        })}
      </g>
    );
  }
}

export default Resize;
