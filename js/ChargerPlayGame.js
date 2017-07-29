var charger = charger || {};

function updateGame(){
	
}

function checkKeys(){
	
}

function keyPress(key){
	if(key.keyCode === Phaser.KeyCode.UP){
		console.log("UP");
	} else if(key.keyCode === Phaser.KeyCode.DOWN){
		console.log("DOWN");
	} else if(key.keyCode === Phaser.KeyCode.LEFT){
		console.log("LEFT");
	} else if(key.keyCode === Phaser.KeyCode.RIGHT){
		console.log("RIGHT");
	} else if(key.keyCode === Phaser.KeyCode.SPACEBAR){
		console.log("SPACEBAR");
	} else {
		console.log("No action defined for this key");
	}
}

function initKeys(){
	charger.game.key.up = charger.game.input.keyboard.addKey(Phaser.Keyboard.UP);
	charger.game.key.down = charger.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	charger.game.key.left = charger.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	charger.game.key.right = charger.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	charger.game.key.space = charger.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	charger.game.key.up.onDown.add(keyPress, this);
	charger.game.key.down.onDown.add(keyPress, this);
	charger.game.key.left.onDown.add(keyPress, this);
	charger.game.key.right.onDown.add(keyPress, this);
	charger.game.key.space.onDown.add(keyPress, this);
}

function initGame(){
	charger.game.background = null;
	charger.game.menu = null;
	charger.game.key = [];
	charger.game.key.up = null;
	charger.game.key.down = null;
	charger.game.key.left = null;
	charger.game.key.right = null;
	charger.game.key.space = null;
	initKeys();
	createBackground(0);
	createMenu("main_menu");
}

/**
*	Creates a background and saves reference as charger.game.background
*	@param background:
*			int index of the background to create or 'destroy' to destroy background
*/
function createBackground(background_index){
	if((charger.game.background != null) || (background_index === 'destroy')){
		charger.game.background.destroy();
		charger.game.background = null;
	}
	if(background_index === 0){
		charger.game.background = charger.game.add.sprite(15, 78, 'background');
	}
}

/**
*	Creates a menu and saves reference as charger.game.menu
*	@param menu:
*			String name of the menu to create or 'destroy' to destroy menu
*/
function createMenu(menu){
	if((charger.game.menu != null) || (menu === 'destroy')){
		charger.game.menu.destroy();
		charger.game.menu = null;
	}
	if(menu === 'main_menu'){
		charger.game.menu = charger.game.add.sprite(15, 78, 'main_menu');
	} else if(menu === 'you_win'){
		charger.game.menu = charger.game.add.sprite(15, 78, 'you_win');
	} else if(menu === 'you_lose'){
		charger.game.menu = charger.game.add.sprite(15, 78, 'you_lose');
	}
}

charger.PlayGame = function(){

};

charger.PlayGame.prototype = {

	create: function(){
		initGame();
	},
	update: function(){
		updateGame();
	}
}
