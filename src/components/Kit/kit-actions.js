// @flow

type Keys =
  | 'positionX'
  | 'positionY'
  | 'scale'
  | 'rotation'
  | 'layer'
  | 'orientation';

export type Action = {
  type: '@KIT/UPDATE_PROPERTY',
  key: Keys,
  value: number,
};

type Validator = (value: number) => boolean;

/**
 * Use this to create kit action creators
 * Sounds silly but it's just specifying which prop to update
 * Also you can pass in a validator function to give us warnings in development
 * Do we want stricter warnings?
 */
const kitActionCreator = (validator: Validator) => (key: Keys) => (
  value: number
): Action => {
  if (process.env.NODE_ENV !== 'production' && !validator((value: number))) {
    console.warn(`You are trying to set a kit property with an invalid value.
      key: ${key}
      value: ${value.toString()}
      validator: ${validator.name}`);
  }

  return {
    type: '@KIT/UPDATE_PROPERTY',
    key,
    value,
  };
};

/**
 * Validates position
 * We may need more validation here at the moment lets' keep it above 0
 */
const isValidPositionX: Validator = (value) => value > 0;

/**
 * Validates position
 * We may need more validation here at the moment lets' keep it above 0
 */
const isValidPositionY: Validator = (value) => value > 0;

/**
 * Validates the scale parameter
 * Scale should be between this range
 * This is a whole number percentage value
 * Will end up like transform: scale(value / 100)
 */
const isValidScale: Validator = (value) => value > 20 && value < 200;

/**
 * Validates a degree as a value between 0 and 360;
 * We can manipulate these in css using transform: rotate(deg)
 */
const isValidRotation: Validator = (value) => value >= 0 && value <= 360;

/**
 * Validates layer value
 * We can add in later if we need a minimum zIndex to keep above the map
 * This just checks it is below maximum zIndex value
 * https://stackoverflow.com/questions/491052/minimum-and-maximum-value-of-z-index
 */
const isValidLayer: Validator = (value) => value >= 0 && value <= 16777271;

/**
 * This validates a correct orientation value
 * Orientation is either 0 or -1.
 * Seems weird but the best way to do css flip is with transform: rotateX(-1)
 * So we can simply add these values with our scale values
 * https://css-tricks.com/snippets/css/flip-an-image/
 */
const isValidOrientation: Validator = (value) => value === 0 || value === 1;

// These are the actual action creator functions

const updatePositionX = kitActionCreator(isValidPositionX)('positionX');

const updatePositionY = kitActionCreator(isValidPositionY)('positionY');

const updateScale = kitActionCreator(isValidScale)('scale');

const updateRotation = kitActionCreator(isValidRotation)('rotation');

const updateLayer = kitActionCreator(isValidLayer)('layer');

const updateOrientation = kitActionCreator(isValidOrientation)('orientation');

export {
  updatePositionX,
  updatePositionY,
  updateScale,
  updateRotation,
  updateLayer,
  updateOrientation,
};
