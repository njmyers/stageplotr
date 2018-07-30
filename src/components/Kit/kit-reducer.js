import type { Action } from './kit-actions';

export type Kit = {
  /** a number id specifying which piece of kit (mapped to graphics/metadata) */
  id: number,
  /** number specifying the category of the kit */
  category: number,
  /** whole number pixel value for position on y axis */
  positionX: number,
  /** whole number pixel value for position on x axis */
  positionY: number,
  /** scale is expressed as a whole number percentage */
  scale: number,
  /** orientation is a boolean expressing whether or not the image is flipped */
  orientation: boolean,
  /** rotation is a whole number in degrees ie max 360 */
  rotation: number,
  /** layer is a whole number expressing z-index style properties */
  layer: number,
};

const initialKit = {
  id: 0,
  category: 0,
  positionX: 0,
  positionY: 0,
  scale: 100,
  orientation: false,
  rotation: 0,
  layer: 1,
};

function kitReducer(state: Kit = initialKit, action: Action) {
  switch (action.type) {
    case '@KIT/UPDATE_PROPERTY':
      return {
        ...state,
        [action.prop]: action.value,
      };
    default:
    case '@KIT/CREATE':
      return {
        ...state,
        id: action.id,
      };
      return state;
  }
}

export default kitReducer;
