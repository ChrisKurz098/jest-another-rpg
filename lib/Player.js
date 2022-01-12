const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    };

    // returns an object with player properties
    getStats() {
        return {
            health: this.health,
            strength: this.strength,
            agility: this.agility,
            potions: this.inventory.length,
        };
    }

    //returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        } else {
            return false;
        }
    }

    //addpotion to inv
    addPotion(potion) {
        this.inventory.push(potion);
    };
    //use potion
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength = + potion.value;
                break;
        }
    }
}
module.exports = Player;