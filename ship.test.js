const { expect, beforeEach } = require('@jest/globals');
const ship = require('./ship');

describe('ship functions', () => {
  beforeEach(() => {
    Ship = ship(2);
  });

  test('return hits', () => {
    expect(Ship.hits).toEqual([null, null]);
  });

  test('recieves a hit', () => {
    Ship.hit(1);
    expect(Ship.hits).toEqual([null, 'hit']);
  });

  test('recieves multiple hits', () => {
    Ship.hit(1);
    Ship.hit(0);
    expect(Ship.hits).toEqual(['hit', 'hit']);
  });

  test('Prevents from hitting the same spots', () => {
    Ship.hit(1);
    Ship.hit(1);
    expect(Ship.hits).toEqual([null, 'hit']);
  });

  test('Cannot hit in non existing postion', () => {
    Ship.hit(3);
    expect(Ship.hits).toEqual([null, null]);
  });

  test('Ship has sunk', () => {
    Ship.hit(0);
    Ship.hit(1);
    expect(Ship.isSunk()).toBe(true);
  });

  test('Ship has not sunk', () => {
    Ship.hit(0);
    expect(Ship.isSunk()).toBe(false);
  });
});
