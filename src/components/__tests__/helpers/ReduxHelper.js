import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../Plotr/root-reducer';

/**
 * Redux Helper
 * Automatically imports our root reducer and creates a store
 * Import this helper component in a test file to simulate a real redux store
 * The store is held in the root components state so you can manually access
 * Use this method to dispatch actions and test their results
 * Useful for testing integration for example with container components
 */
class ReduxHelper extends React.Component {
  state = {
    store: createStore(rootReducer),
  };

  render() {
    return <Provider store={this.state.store}>{this.props.children}</Provider>;
  }
}

export default ReduxHelper;
