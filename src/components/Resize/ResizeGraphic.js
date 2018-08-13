// @flow
import * as React from 'react';

type Props = {
  x: number,
  y: number,
  width: number,
  height: number,
  padding: number,
};

// Just lots of dumb math and geometry here.
// Drawing a resize tool around an svg object.

const TopLine = ({ x, y, width, height, padding, ...rest }) => (
  <line
    x1={x - padding}
    y1={y - padding}
    x2={x + width + padding}
    y2={y - padding}
    {...rest}
  />
);

const LeftLine = ({ x, y, width, height, padding, ...rest }) => (
  <line
    x1={x - padding}
    y1={y - padding}
    x2={x - padding}
    y2={y + height + padding}
    {...rest}
  />
);

const BottomLine = ({ x, y, width, height, padding, ...rest }) => (
  <line
    x1={x - padding}
    y1={y + height + padding}
    x2={x + width + padding}
    y2={y + height + padding}
    {...rest}
  />
);

const RightLine = ({ x, y, width, height, padding, ...rest }) => (
  <line
    x1={x + width + padding}
    y1={y - padding}
    x2={x + width + padding}
    y2={y + height + padding}
    {...rest}
  />
);

const TopLeftRect = ({ x, y, width, height, padding, ...rest }) => (
  <rect
    className="resizeRect_topLeft"
    x={x - padding - 4}
    y={y - padding - 4}
    width={8}
    height={8}
    fill="#ffffff"
    {...rest}
    strokeDasharray={0}
  />
);

const TopRightRect = ({ x, y, width, height, padding, ...rest }) => (
  <rect
    className="resizeRect_topRight"
    x={x + width + padding - 4}
    y={y - padding - 4}
    width={8}
    height={8}
    fill="#ffffff"
    {...rest}
    strokeDasharray={0}
  />
);

const BottomLeftRect = ({ x, y, width, height, padding, ...rest }) => (
  <rect
    className="resizeRect_bottomLeft"
    x={x - padding - 4}
    y={y + height + padding - 4}
    width={8}
    height={8}
    fill="#ffffff"
    {...rest}
    strokeDasharray={0}
  />
);

const BottomRightRect = ({ x, y, width, height, padding, ...rest }) => (
  <rect
    className="resizeRect_bottomRight"
    x={x + width + padding - 4}
    y={y + height + padding - 4}
    width={8}
    height={8}
    fill="#ffffff"
    {...rest}
    strokeDasharray={0}
  />
);

const ResizeGraphic = (props: Props) => (
  <g className="resize_rect">
    <TopLine {...props} />
    <LeftLine {...props} />
    <BottomLine {...props} />
    <RightLine {...props} />
    <TopLeftRect {...props} />
    <TopRightRect {...props} />
    <BottomLeftRect {...props} />
    <BottomRightRect {...props} />
  </g>
);

ResizeGraphic.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: 8,
  strokeWidth: 2,
  stroke: '#000000',
  strokeDasharray: 4,
};

export default ResizeGraphic;
