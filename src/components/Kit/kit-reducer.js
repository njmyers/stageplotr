import type { Action } from './kit-actions';
import type { Action as MapAction } from '../Map/map-actions';

export type Kit = {
  /** a number id specifying which piece of kit (mapped to graphics/metadata) */
  typeID: number,
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

export const initialKit: Kit = {
  typeID: 0,
  category: 0,
  positionX: 0,
  positionY: 0,
  scale: 100,
  orientation: false,
  rotation: 0,
  layer: 1,
};

function kitReducer(state: Kit = initialKit, action: Action & MapAction) {
  switch (action.type) {
    case '@KIT/UPDATE_PROPERTY':
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
    case '@MAP/CREATE_KIT':
      return {
        ...initialKit,
        typeID: action.typeID,
      };
      return state;
  }
}

export default kitReducer;
