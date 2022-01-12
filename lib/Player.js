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
        potions: this.potions,
        health: this.health,
        strength: this.strength,
        agility: this.agility,
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
module.exports = Player;