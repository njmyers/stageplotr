import * as React from 'react';
import { shallow } from 'enzyme';
import withShallowStore from '../../__tests__/helpers/withShallowStore';

import { initialKit } from '../kit-reducer';
import withKitState from '../withKitState';
import { createKit } from '../../Map/map-actions';
import { updateScale } from '../kit-actions';

import { createStore } from 'redux';
import rootReducer from '../../Plotr/root-reducer';

const id = '928d2ca0-94e4-11e8-82e4-61f5917152d6';

const store = createStore(rootReducer);
store.dispatch(createKit(id, 0));

const Kit = (props) => null;
const ConnectedKit = withKitState(id)(Kit);

describe('integration test withKitState HOC', () => {
  test('sanity test it renders without crashing', () => {
    const wrapper = withShallowStore(<ConnectedKit />, store);
    expect(wrapper.props()).toMatchSnapshot();
  });

  test('it renders initial kit props', () => {
    const wrapper = withShallowStore(<ConnectedKit />, store);
    expect(wrapper.props()).toMatchObject({ ...initialKit });
  });

  test('it adds methods that dispatch actions', () => {
    const wrapper = withShallowStore(<ConnectedKit />, store);
    store.dispatch(updateScale(110, id));
    expect(wrapper.props().scale).toBe(110);
  });
});
