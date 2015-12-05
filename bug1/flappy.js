
var actions = { preload: preload, create: create, update: update };

var game = new Phaser.Game(790, 400, Phaser.AUTO, "game", actions);

var score = 0;

var labelScore;

var player;

var pipes = [];

var pipeInterval = 1.75;


function preload() {
    
    game.load.image("playerImg","asets/jamesBond.gif");

}


function create() {
    
    game.stage.setBackgroundColor("#F3D3A3");
    
    game.add.text(20, 20, "Welcome to my game",
        {font: "30px Arial", fill: "#FFFFFF"});
    
    labelScore = game.add.text(20, 60, "0",
        {font: "30px Arial", fill: "#FFFFFF"});
    
    game.add.sprite(80, 200, "playerImg");

}


function update() {
    


}


