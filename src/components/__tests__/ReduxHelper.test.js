import * as React from 'react';
import { mount } from 'enzyme';
import ReduxHelper from './helpers/ReduxHelper';
import { createKit } from '../Map/map-actions';

const Dead = () => null;

describe('ReduxHelper component works as described', () => {
  test('we can dispatch from the mounted helper', () => {
    const wrapper = mount(
      <ReduxHelper>
        <Dead />
      </ReduxHelper>
    );

    const store = wrapper.state('store');
    store.dispatch(createKit('928d2ca0-94e4-11e8-82e4-61f5917152d6', 0));

    expect(store.getState().map.length).toBe(1);
    expect(store.getState()).toMatchSnapshot();
  });

  test('we can mount a new component with a new store', () => {
    const wrapper = mount(
      <ReduxHelper>
        <Dead />
      </ReduxHelper>
    );

    const store = wrapper.state('store');

    store.dispatch(createKit('928d2ca0-94e4-11e8-82e4-61f5917152d5', 0));
    expect(store.getState().map.length).toBe(1);

    store.dispatch(createKit('928d2ca0-94e4-11e8-82e4-61f5917152d6', 0));
    expect(store.getState().map.length).toBe(2);
    expect(store.getState()).toMatchSnapshot();
  });
});
