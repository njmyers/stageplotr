// @flow
import * as React from 'react';
// components
import ResizeGraphic from './ResizeGraphic';
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
    strokeWidth: '2',
    strokeDasharray: '4',
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

  safeBBox = () => {
    if (this.childRef) {
      const { x, y, width, height } = this.childRef.getBBox();
      return { x, y, width, height };
    }

    return { x: 0, y: 0, width: 0, height: 0 };
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
        <ResizeGraphic {...this.props} {...this.safeBBox()} />
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
