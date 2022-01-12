
const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/potion.js');

test('Check for creation of enemy object', () => {
    const enemy = new Enemy('goblin','sword');
    
    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

//test getHealth
test("gets playes health value",()=>{
    const enemy = new Enemy('Dave');
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
  });
  //checks if enemy is alive
  test('checks if enemy is alive or dead', () => {
    const enemy = new Enemy('Dave');
    expect(enemy.isAlive()).toBeTruthy();
    enemy.health =0;
    expect(enemy.isAlive()).toBeFalsy();
  });
  //test for decrease in health
  test('subtracts from enemy health', () => {
    const enemy = new Enemy('Dave');
    const oldHealth = enemy.health;
    enemy.reduceHealth(5);
    expect(enemy.health).toBe(oldHealth-5);
    enemy.reduceHealth(99999);
    expect(enemy.health).toBe(0);
  });
  //get playes attack val
  test('get playes attack value', () => {
    const enemy = new Enemy('Dave');
    enemy.strength = 10;
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
  });
  //return enemy description
  test('get a descritpipn of the enemy',() => {
      const enemy = new Enemy('goblin','sword');
      expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
      expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
  });