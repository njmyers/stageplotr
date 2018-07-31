import kitStyleObject from '../kit-style-object';

const exampleKitState = {
  typeID: 0,
  category: 0,
  positionX: 100,
  positionY: 250,
  scale: 110,
  orientation: -1,
  rotation: 90,
  layer: 1,
};

describe('it transforms a state object into css style object', () => {
  test('sanity test it is a function and returns a react style object', () => {
    expect(typeof kitStyleObject).toBe('function');

    const style = kitStyleObject(exampleKitState);
    expect(typeof style).toBe('object');
    expect(style).toHaveProperty('transform');
    expect(style).toHaveProperty('zIndex');

    expect(typeof style.transform).toBe('string');
    expect(typeof style.zIndex).toBe('string');
  });

  test('it correctly generates the transform strings', () => {
    const style = kitStyleObject(exampleKitState);

    expect(style.transform).toBe(
      'translateX(100) translateY(250) scale(1.1) rotateX(-1) rotate(90)'
    );

    expect(style.zIndex).toBe('1');
  });
});
