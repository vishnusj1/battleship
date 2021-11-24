const Player = require('./player');
const GameBoard = require('./gameboard');
const Ship = require('./ship');

describe('player function', () => {
  beforeEach(() => {
    player = Player('human');
    enemyBoard = GameBoard();
    playerBoard = GameBoard();
    enemyShip = Ship(2);
  });
  test('returns a new player', () => {
    expect(player).not.toBeNull();
  });
  test('returns a players fleet', () => {
    expect(player.fleet).toEqual([]);
  });
  test('player attacks an enemy board and misses', () => {
    const pos = { x: 0, y: 9 };
    player.attack(pos, enemyBoard);
    const result = enemyBoard.arr[pos.x][pos.y];
    expect(result).toEqual('miss');
  });
  test('player attacks an enemy board and hits a ship', () => {
    const pos = { x: 1, y: 2 };
    enemyBoard.placeShip(enemyShip, pos);
    player.attack(pos, enemyBoard);
    const result = enemyBoard.arr[pos.x][pos.y].hit;
    expect(result).toEqual(true);
  });
});
