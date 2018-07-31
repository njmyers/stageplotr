import {
  updatePositionX,
  updatePositionY,
  updateScale,
  updateRotation,
  updateLayer,
  updateOrientation,
} from '../kit-actions';

describe('testing the kit actions', () => {
  test('sanity test for actions, creates an object with type property', () => {
    expect(updatePositionX(100)).toHaveProperty('type');
    expect(updatePositionY(100)).toHaveProperty('type');
    expect(updateScale(100)).toHaveProperty('type');
    expect(updateRotation(0)).toHaveProperty('type');
    expect(updateLayer(0)).toHaveProperty('type');
    expect(updateOrientation(false)).toHaveProperty('type');
  });

  test('it creates a kit action object with correct key', () => {
    expect(updatePositionX(100).key).toBe('positionX');
    expect(updatePositionY(100).key).toBe('positionY');
    expect(updateScale(100).key).toBe('scale');
    expect(updateRotation(0).key).toBe('rotation');
    expect(updateLayer(0).key).toBe('layer');
    expect(updateOrientation(false).key).toBe('orientation');
  });

  test('it creates a kit action object with correct value', () => {
    expect(updatePositionX(100).value).toBe(100);
    expect(updatePositionY(100).value).toBe(100);
    expect(updateScale(100).value).toBe(100);
    expect(updateRotation(0).value).toBe(0);
    expect(updateLayer(0).value).toBe(0);
    expect(updateOrientation(false).value).toBe(false);
  });
});
