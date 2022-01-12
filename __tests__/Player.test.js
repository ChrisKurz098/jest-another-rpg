
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');
//test create player object
test('creates a player object', () => {
    const player = new Player('Dave');
    console.log(player.inventory);

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );

});
//test getStats
test("gets player's stats as an object", () => {
    const player = new Player('Dave');
  
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });
//test getInventory
  test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
  
    expect(player.getInventory()).toEqual(expect.any(Array));
  
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
  });

  //test getHealth
  test("gets playes health value",()=>{
    const player = new Player('Dave');
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
  });
  //checks if player is alive
  test('checks if player is alive or dead', () => {
    const player = new Player('Dave');
    expect(player.isAlive()).toBeTruthy();
    player.health =0;
    expect(player.isAlive()).toBeFalsy();
  });
  //test for decrease in health
  test('subtracts from player health', () => {
    const player = new Player('Dave');
    const oldHealth = player.health;
    player.reduceHealth(5);
    expect(player.health).toBe(oldHealth-5);
    player.reduceHealth(99999);
    expect(player.health).toBe(0);
  });