import * as React from 'react';
import { Provider } from 'react-redux';
import Kit from '../Kit';
import Map from '../Map';

import store from './store';

class Plotr extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <Kit />
          <Map />
        </main>
      </Provider>
    );
  }
}

export default Plotr;
