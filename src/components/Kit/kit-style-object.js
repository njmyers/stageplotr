/**
 * @flow
 * This module is meant to transform redux kit properties into css string
 * This serves as documentation for how our kit properties turn into design :)
 */

import type { State } from './kit-reducer';

function kitStyleObject(state: State) {
  const transformProperties = Object.entries(state)
    .map(mapTransformProperties)
    // filter out empty strings
    .filter((string) => string)
    .reduce((a, b) => `${a} ${b}`);

  return {
    transform: transformProperties,
    zIndex: layerString(state.layer),
  };
}

function mapTransformProperties([key: string, value: number]) {
  switch (key) {
    case 'orientation':
      return orientationString(value);
    case 'positionX':
      return positionXString(value);
    case 'positionY':
      return positionYString(value);
    case 'scale':
      return scaleString(value);
    case 'rotation':
      return rotationString(value);
    default:
      return '';
  }
}

function orientationString(value: number): string {
  return `rotateX(${value})`;
}

function layerString(value: number): string {
  return value.toString();
}

function scaleString(value: number): string {
  return `scale(${value / 100})`;
}

function positionXString(value: number): string {
  return `translateX(${value}px)`;
}

function positionYString(value: number): string {
  return `translateY(${value}px)`;
}

function rotationString(value: number): string {
  return `rotate(${value % 360})`;
}

export default kitStyleObject;
