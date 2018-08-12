import * as React from 'react';
import kitStyleObject from './kit-style-object';

/** TODO:
    Add JSON list of typeID to cross reference SVG icon files
 */

class Kit extends React.Component {
  render() {
    const { bubbleRef, ...rest } = this.props;
    return (
      <circle
        style={kitStyleObject(rest)}
        cx="50"
        cy="50"
        r="40"
        fill="black"
        ref={bubbleRef}
      />
    );
  }
}

export default Kit;
