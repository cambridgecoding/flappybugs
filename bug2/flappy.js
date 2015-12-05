
var actions = { preload: preload, create: create, update: update };

var game = new Phaser.Game(790, 400, Phaser.AUTO, "game", actions);

var score = 0;




function preload() {
    
    game.load.image("playerImg","../assets/jamesBond.gif");
    
    game.load.audio("score", "../assets/point.ogg");
    
    game.load.image("pipe","../assets/pipe.png");
}


function create() {
    
    game.stage.setbackgroundcolor("#F3D3A3");
    
    game.add.text(20, 20, "Welcome to my game",
        {font: "30px Arial", fill: "#FFFFFF"});
    
    game.add.text(20, 60, "0",
        {font: "30px Arial", fill: "#FFFFFF"});
    
    game.add.sprite("80", "200", "playerimg");
    

    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
              .onDown.add(playerJump);
    



function update() {

}
