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

  test('the component receives props from dispatched actions', () => {
    store.dispatch(updateScale(110, id));
    const wrapper = withShallowStore(<ConnectedKit />, store);
    expect(wrapper.props().scale).toBe(110);
  });

  test('the component creates actions from react methods', () => {
    const wrapper = withShallowStore(<ConnectedKit />, store);
    expect(wrapper.props().updateScale(120)).toMatchObject({
      id,
      key: 'scale',
      type: '@KIT/UPDATE_PROPERTY',
      value: 120,
    });
  });
});
