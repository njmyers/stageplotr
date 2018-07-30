// @flow
import * as React from 'react';

type State = {
  thing: string,
};

type Props = {};

class Map extends React.Component<Props, State> {
  state = {
    thing: null,
  };

  onClick = () => {
    this.setState((state) => ({
      thing: 'string',
    }));
  };

  render() {
    return <section>Future map</section>;
  }
}

export default Map;
