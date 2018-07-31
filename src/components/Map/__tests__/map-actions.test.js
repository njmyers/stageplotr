import {
  createKit,
  deleteKit,
  renameMap,
  resizeMapWidth,
  resizeMapHeight,
} from '../map-actions';

const id = '928d2ca0-94e4-11e8-82e4-61f5917152d6';

describe('testing the map actions', () => {
  test('sanity test for actions, creates an object with type property', () => {
    expect(createKit(id)).toHaveProperty('type');
    expect(deleteKit(id)).toHaveProperty('type');
    expect(renameMap()).toHaveProperty('type');
    expect(resizeMapWidth()).toHaveProperty('type');
    expect(resizeMapHeight()).toHaveProperty('type');
  });

  test('creates an object with id property', () => {
    expect(createKit(id)).toHaveProperty('id');
    expect(deleteKit(id)).toHaveProperty('id');
  });

  test('creates an object with id value', () => {
    expect(createKit(id).id).toBe(id);
    expect(deleteKit(id).id).toBe(id);
  });

  test('creates an object with typeID property/value', () => {
    expect(createKit(id, 0)).toHaveProperty('typeID');
    expect(createKit(id, 0).typeID).toBe(0);
  });

  test('creates an object with value property', () => {
    expect(renameMap()).toHaveProperty('value');
    expect(resizeMapWidth()).toHaveProperty('value');
    expect(resizeMapHeight()).toHaveProperty('value');
  });

  test('creates an object with values', () => {
    expect(renameMap('My Map').value).toBe('My Map');
    expect(resizeMapWidth(100).value).toBe(100);
    expect(resizeMapHeight(100).value).toBe(100);
  });
});
