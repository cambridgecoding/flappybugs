var actions = { preload: preload, create: create, update: update }
var game = new Phaser.Game(790, 400, Phaser.AUTO, "game", actions)
var score
var labelScore
var player
var pipes=[]
var pipeInterval=3

function preload() {
	//Load all the resources and stuff
    game.load.image("player_img","../assets/jamesBond.gif");
    game.load.audio("score", "../assets/point.ogg");
    game.load.image("pipe","../assets/pipe.png");
}

function create() {
    game.stage.setBackgroundColor("#F3D3A3");
	 //WELCOME!
    game.add.text(20, 20, "Welcome to my game",
        {font: "30px Arial", fill: "#FFFFFF"});
	 //the score label
    labelScore = game.add.text(20, 60, "0",
        {font: "30px Arial", fill: "#FFFFFF"});
			player = game.add.sprite(80, 200, "player_img");
	game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(player);
		 player.body.gravity.y = 200;
				 game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(playerJump);
generatePipe();
	game.time.events.loop(pipeInterval * Phaser.Timer.SECOND, generatePipe);
}

function update() {
	// game Over if the player crashes into a pipe
    game.physics.arcade .overlap(player, pipes, gameOver);
	 //Or goes off-limit
	 if(x<0 || x>400){
		 gameOver();
	 }
}

function add_pipe_block(x, y) {
    var block = game.add.sprite(x,y,"pipe");
    	pipes.push(block);
    game.physics.arcade.enable(block);
    block.body.velocity.x = -200;
}

function generatePipe() {
    var gapStart = game.rnd.integerInRange(1, 5);
    for (var count = 0; count < 8; count++) {
        if(count != gapStart && count != gapStart+1){
            add_pipe_block(790, count * 50);
        }
    }
    changeScore;
}

function playerJump() { player.body.velocity.y = -200; }

function changeScore() {
    score++;
    labelScore.setText(score.toString());
}

function gameOver() { game.destroy(); }
