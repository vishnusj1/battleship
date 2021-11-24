const GameBoard = require('./gameboard');
const ship = require('./ship');

describe('board functions', () => {
  beforeEach(() => {
    newBoard = GameBoard();
    Ship = ship(2);
    pos = { x: 0, y: 0 };
  });

  test('places a ship in array', () => {
    newBoard.placeShip(Ship, pos);
    const recieved = newBoard.arr[pos.x][pos.y];
    expect(recieved).not.toBeNull();
  });
  test('cannot place a ship out of range', () => {
    const pos2 = { x: 10, y: 0 };
    const recieved = newBoard.placeShip(Ship, pos2);
    expect(recieved).toBe(false);
  });
  test('board recieves an attack', () => {
    newBoard.recieveAttack(pos);
    const recieved = newBoard.arr[pos.x][pos.y];
    expect(recieved).toEqual('miss');
  });
  test('board recieves an miss shot', () => {
    newBoard.recieveAttack(pos);
    const recieved = newBoard.arr[pos.x][pos.y];
    expect(recieved).toEqual('miss');
  });

  test('ship recieves a attack', () => {
    newBoard.placeShip(Ship, pos);
    newBoard.recieveAttack(pos);
    const recieved = Ship.hits;
    expect(recieved).toEqual(['hit', null]);
  });
});
