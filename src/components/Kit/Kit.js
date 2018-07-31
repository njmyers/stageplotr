import * as React from 'react';

class Kit extends React.Component {
  render() {
    return JSON.stringify(this.props);
  }
}

export default Kit;
