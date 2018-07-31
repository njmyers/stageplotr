// @flow
import kitReducer from '../Kit/kit-reducer';
import type { Kit } from '../Kit/kit-reducer';
import type { Action } from './map-actions';

export type Map = {
  name: string,
  width: number,
  height: number,
  length: number,
  /** Jeff you were right the collection of kits needs to be something
   * besides a simple array
   * This currently is an implementation kind of like a map hash table.
   * This is flow syntax to designate that behavior
   * unknown property key but specific object type
   * https://flow.org/en/docs/types/objects/#toc-objects-as-maps
   */
  kits: {
    [key: string]: Kit,
    __proto__: null,
  },
};

const initialState = {
  name: 'StagePlot',
  width: 100,
  height: 100,
  length: 0,
  // https://davidwalsh.name/object-create-null
  // blank dictionary
  kits: Object.create(null),
};

function mapReducer(state: Map = initialState, action: Action) {
  switch (action.type) {
    // these are integrated with kits
    case '@MAP/CREATE_KIT':
      return {
        ...state,
        length: state.length + 1,
        kits: {
          ...state.kits,
          [action.id]: kitReducer({}, action),
        },
      };
    case '@MAP/DELETE_KIT': {
      // functional object deleting
      const { [action.id]: deleted, ...rest } = state.kits;
      return {
        ...state,
        length: state.length - 1,
        kits: {
          ...rest,
        },
      };
    }
    case '@KIT/UPDATE_PROPERTY': {
      const { [action.id]: updateable, ...rest } = state.kits;
      return {
        ...state,
        kits: {
          ...rest,
          [action.id]: kitReducer(updateable, action),
        },
      };
    }
    // these are straight map
    case '@MAP/RESIZE_WIDTH':
      return {
        ...state,
        width: action.value,
      };
    case '@MAP/RESIZE_HEIGHT':
      return {
        ...state,
        height: action.value,
      };
    case '@MAP/RENAME':
      return {
        ...state,
        name: action.value,
      };

    default:
      return state;
  }
}

export default mapReducer;
