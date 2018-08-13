import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs/react';

import Resize from '../Resize';

//https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
class Circle extends React.Component {
  render() {
    const { color, radius, bubbleRef, ...rest } = this.props;

    return (
      <circle
        style={{ color: 'black', padding: '1rem' }}
        cx="100"
        cy="100"
        r={radius}
        fill={color}
        ref={bubbleRef}
        {...rest}
      />
    );
  }
}
storiesOf('Stageplotr/2) Resize', module).add('Resize Demo', () => (
  <section>
    <svg width="800" height="600" viewBox="0 0 800 600">
      <Resize>
        <Circle radius={number('radius', 40, { min: 0, max: 100 })} />
      </Resize>
    </svg>
  </section>
));
