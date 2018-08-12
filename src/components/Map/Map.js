// @flow
import * as React from 'react';
import uuid from 'uuid/v1';

import Kit from '../Kit';
import Resize from '../Resize';
import type { State as MapState } from './map-reducer';

type State = {};

type Props = {
  map: MapState,
};

class Map extends React.Component<Props, State> {
  svg = null;

  onCreate = () => {
    this.props.createKit();
  };

  render() {
    return (
      <section>
        <svg
          ref={(svg) => (this.svg = svg)}
          width={this.props.map.width}
          height={this.props.map.height}
        >
          {Object.keys(this.props.map.kits).map((id) => {
            return (
              <Resize key={id}>
                <Kit id={id} />
              </Resize>
            );
          })}
        </svg>
        <button onClick={this.onCreate}>Create Kit!</button>
      </section>
    );
  }
}

export default Map;
