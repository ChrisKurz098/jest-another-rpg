const Enemy = require("./Enemy.js");
const Player = require("./Player.js");
const inquirer = require('inquirer');

function Game() {
    this.roundNumber = 0;
    this.isPlayerturn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

//init game
Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

    this.currentEnemy = this.enemies[0];

    ///get players name and create player
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        .then(({ name }) => {
            this.player = new Player(name);
            // test the object creation
            this.startNewBattle();
        })
};

module.exports = Game;