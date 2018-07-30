// @flow

/**
 * Use this to create kit action creators
 * Sounds silly but it's just specifying which prop to update
 * Also you can pass in a validator function to give us warnings
 */
const kitActionCreator = (validator) => (prop) => (value: number) => {
  if (process.env.NODE_ENV !== 'production' && !validator(value)) {
    console.warn(`You are trying to set a kit property with an invalid value.
      prop: ${prop}
      value: ${value}
      validator: ${validator.name}`);
  }

  return {
    type: '@KIT/UPDATE_PROPERTY',
    prop,
    value,
  };
};

// validators

/** Future home of position validator */
const isValidPositionX = (value) => value > 0;

/** Future home of position validator */
const isValidPositionY = (value) => value > 0;

/** Scale should be between this range */
const isValidScale = (value) => value > 20 && value < 200;

/** Degree as whole number */
const isValidRotation = (value) => value > 0 && value <= 360;

/** Max zIndex value */
const isValidLayer = (value) => value >= 0 && value <= 16777271;

const isValidOrientation = (value) => true;

// These are the actual action creators

const updatePositionX = kitActionCreator(isValidPositionX)('positionX');

const updatePositionY = kitActionCreator(isValidPositionY)('positionY');

const updateScale = kitActionCreator(isValidScale)('scale');

const updateRotation = kitActionCreator(isValidRotation)('rotation');

const updateLayer = kitActionCreator(isValidLayer)('layer');

const updateOrientation = kitActionCreator(isValidOrientation)('orientation');

function createKit(value: number) {
  return {
    type: '@KIT/CREATE',
    value,
  };
}

export {
  updatePositionX,
  updatePositionY,
  updateScale,
  updateRotation,
  updateLayer,
  updateOrientation,
};
