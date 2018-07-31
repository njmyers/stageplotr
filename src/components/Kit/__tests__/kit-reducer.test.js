import { createStore } from 'redux';
import kitReducer, { initialKit } from '../kit-reducer';
import {
  updatePositionX,
  updatePositionY,
  updateScale,
  updateRotation,
  updateLayer,
  updateOrientation,
} from '../kit-actions';

describe('testing the base kit action/reducer', () => {
  let store;

  beforeEach(() => {
    const initialState = {};
    store = createStore(kitReducer);
    // sets initial kit state
    // simulates creation of a kit object within a map
    store.dispatch({
      type: '@MAP/CREATE_KIT',
      typeID: 'b413eac0-94d1-11e8-af8b-b534b7557c3a',
    });
  });

  test('sanity test it creates a kit', () => {
    const state = store.getState();
    expect(state).toMatchObject({
      ...initialKit,
      typeID: 'b413eac0-94d1-11e8-af8b-b534b7557c3a',
    });
  });

  test('it updates a positionX property', () => {
    store.dispatch(updatePositionX(200));
    const state = store.getState();
    expect(state).toMatchObject({
      ...initialKit,
      typeID: 'b413eac0-94d1-11e8-af8b-b534b7557c3a',
      positionX: 200,
    });
  });

  test('it updates a positionX property', () => {
    store.dispatch(updatePositionY(200));
    const state = store.getState();
    expect(state).toMatchObject({
      ...initialKit,
      typeID: 'b413eac0-94d1-11e8-af8b-b534b7557c3a',
      positionY: 200,
    });
  });

  test('it updates a scale property', () => {
    store.dispatch(updateScale(120));
    const state = store.getState();
    expect(state).toMatchObject({
      ...initialKit,
      typeID: 'b413eac0-94d1-11e8-af8b-b534b7557c3a',
      scale: 120,
    });
  });

  test('it updates a rotation property', () => {
    store.dispatch(updateRotation(120));
    const state = store.getState();
    expect(state).toMatchObject({
      ...initialKit,
      typeID: 'b413eac0-94d1-11e8-af8b-b534b7557c3a',
      rotation: 120,
    });
  });

  test('it updates a scale property', () => {
    store.dispatch(updateLayer(2));
    const state = store.getState();
    expect(state).toMatchObject({
      ...initialKit,
      typeID: 'b413eac0-94d1-11e8-af8b-b534b7557c3a',
      layer: 2,
    });
  });

  test('it updates a scale property', () => {
    store.dispatch(updateOrientation(false));
    const state = store.getState();
    expect(state).toMatchObject({
      ...initialKit,
      typeID: 'b413eac0-94d1-11e8-af8b-b534b7557c3a',
      orientation: false,
    });
  });
});
