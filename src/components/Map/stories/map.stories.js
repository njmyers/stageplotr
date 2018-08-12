import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, object, number } from '@storybook/addon-knobs/react';

import ReduxHelper from '../../__tests__/helpers/ReduxHelper';
import Map from '../MapContainer';

//https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
class Circle extends React.Component {
  render() {
    const { color, bubbleRef, ...rest } = this.props;

    return (
      <circle
        style={{ color: 'black', padding: '1rem' }}
        cx="70"
        cy="70"
        r="60"
        fill={color}
        ref={bubbleRef}
        {...rest}
      />
    );
  }
}
storiesOf('Stageplotr/2) Map', module).add('Map Demo', () => (
  <ReduxHelper>
    <section>
      <Map />
    </section>
  </ReduxHelper>
));
