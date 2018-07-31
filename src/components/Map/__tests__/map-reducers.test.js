import { createStore } from 'redux';
import mapReducer, { initialState } from '../map-reducer';
import {
  createKit,
  deleteKit,
  renameMap,
  resizeMapWidth,
  resizeMapHeight,
} from '../map-actions';

const id = '928d2ca0-94e4-11e8-82e4-61f5917152d6';

describe('testing the base kit action/reducer', () => {
  let store;

  beforeEach(() => {
    const initialState = {};
    store = createStore(mapReducer);
  });

  test('it creates a kit', () => {
    store.dispatch(createKit(id));
    const state = store.getState();
    expect(state.length).toBe(1);
    expect(state.kits).toHaveProperty(id);
  });

  test('it deletes a kit', () => {
    store.dispatch(createKit(id));
    store.dispatch(deleteKit(id));
    const state = store.getState();
    expect(state.length).toBe(0);
    expect(state.kits).not.toHaveProperty(id);
  });

  test('it resizes the map', () => {
    store.dispatch(resizeMapWidth(1000));
    store.dispatch(resizeMapHeight(1200));
    const state = store.getState();
    expect(state.width).toBe(1000);
    expect(state.height).toBe(1200);
  });

  test('it renames the map', () => {
    store.dispatch(renameMap('My Map'));
    const state = store.getState();
    expect(state.name).toBe('My Map');
  });
});
