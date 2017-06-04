// Enemies our player must avoid
var Enemy = function(xloc,yloc,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = xloc;
    this.y = yloc;
    this.speed = Math.random() * 100 * speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    //  initial enemy when enemy beyond the canvas
    if(this.x >= 505) {
      this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
// x center is 200, 392 = 60 + 83 *4
  this.x = 200;
  this.y = 392;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
// when you get the river
  if(this.y <= 0) {
    // x center is 200, 392 = 60 + 83 *4
    this.x = 200;
    this.y = 392;
    alert("YOU WIN THE GAME : )");
  }
  //set the collision condition
  for (var i = 0; i < allEnemies.length; i++) {
    var enemy = allEnemies[i];
    if (enemy.y === this.y && enemy.x + 50 >= this.x - 30  && enemy.x - 50 <= this.x + 30) {
// x center is 200, 392 = 60 + 83 *4
      this.x = 200;
      this.y = 392;
      alert("TRY IT AGAIN");
    }
  }

};

// draw the Player
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// listen to some keys when you press
Player.prototype.handleInput = function(direction) {
  if (direction === "left" && this.x >= 100) {
    this.x -= 100;
  }
  if (direction === "right" && this.x <= 300) {
    this.x += 100;
  }
  if (direction === "up" ) {
    this.y -= 83;
  }
  //  309 = 392(all height) - 83
  if (direction === "down" && this.y <= 309) {
    this.y += 83;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Set the level of the game  HAHA

//var enemy11 = new Enemy(-100,60,1);
var enemy12 = new Enemy(-100,60,3);
//var enemy13 = new Enemy(-100,60,5);
var enemy14 = new Enemy(-100,60,7);
// var enemy21 = new Enemy(-100,143,1);
var enemy22 = new Enemy(-100,143,3);
// var enemy23 = new Enemy(-100,143,5);
var enemy24 = new Enemy(-100,143,7);
// var enemy31 = new Enemy(-100,226,2);
var enemy32 = new Enemy(-100,226,4);
// var enemy33 = new Enemy(-100,226,6);
var enemy34 = new Enemy(-100,226,8);

var player = new Player();

var allEnemies = [enemy12,enemy14,
                  enemy22,enemy24,
                  enemy32,enemy34];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
