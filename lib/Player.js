const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
};

// returns an object with player properties
Player.prototype.getStats = function () {
    return {
        health: this.health,
        strength: this.strength,
        agility: this.agility,
        potions: this.inventory.length,
    };
};

//returns the inventory array or false if empty
Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    } else {
        return false;
    }
};

//returns players health
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}`;
};

//checks if player is alive
Player.prototype.isAlive = function () {
    if (this.health === 0){
        return false;
    }
    return true;
};
//reduce player health
Player.prototype.reduceHealth = function (val) {
this.health -= val;

if (this.health<0) {
    this.health = 0;
}
};
//get player attack value
Player.prototype.getAttackValue = function () {
    const min = this.strength-5;
    const max = this.strength+5;
    return Math.floor(Math.random()*(max - min) + min);
};
//addpotion to inv
Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
};
//use potion
Player.prototype.usePotion = function (index) {
const potion = this.getInventory().splice(index, 1)[0];

switch (potion.name) {
    case 'agility':
        this.agility += potion.value;
        break;
    case 'health':
        this.health += potion.value;
        break;
    case 'strength':
        this.strength =+ potion.value;
        break;
}
}
module.exports = Player;