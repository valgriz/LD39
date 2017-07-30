var charger = charger || {};

function updateGame(){
	
}

function createGame(level){
	
	//level array [40][28] = [1120]
	
	createMenu('destroy');
	
	var currentLevel = charger.game.levels[0];
	
	console.log(currentLevel);
	
	
	
	for(var i = 0; i < currentLevel.length; i++){
		if(currentLevel[i] === 1){
			createBlock(i);
			//charger.game.blocks.create(15 + (10 * (i % 40)), 78 + (10 * Math.floor(i / 40)), 'block');	
		} else if(currentLevel[i] === 2){
			createPlayer(i);
		} else if(currentLevel[i] === 3){
			createCharger(i);
		}
	}
	
	charger.game.world.bringToTop(charger.game.blocks);
}

function keyPress(key){
	if(key.keyCode === Phaser.KeyCode.UP){
		if(charger.game.menu == null){
			if(charger.game.menu == null){
				charger.game.player.y -= 10;
			}
		}
		console.log("UP");
		charger.game.dPressed.animations.play('up');
	} else if(key.keyCode === Phaser.KeyCode.DOWN){
		if(charger.game.menu == null){
			if(charger.game.menu == null){
				charger.game.player.y += 10;
			}
		}
		console.log("DOWN");
		charger.game.dPressed.animations.play('down');
	} else if(key.keyCode === Phaser.KeyCode.LEFT){
		if(charger.game.menu == null){
			if(charger.game.menu == null){
				charger.game.player.x -= 10;
			}
		}
		console.log("LEFT");
		charger.game.dPressed.animations.play('left');
	} else if(key.keyCode === Phaser.KeyCode.RIGHT){
		if(charger.game.menu == null){
			charger.game.player.x += 10;
		}
		console.log("RIGHT");
		charger.game.dPressed.animations.play('right');
	} else if(key.keyCode === Phaser.KeyCode.SPACEBAR){
		if(charger.game.menu != null){
			createGame(0);
		}
		console.log("SPACEBAR");
		charger.game.dPressed.animations.play('other');
	} else {
		console.log("No action defined for this key");
		charger.game.dPressed.animations.play('other');
	}
}

function keyRelease(key){
	charger.game.dPressed.animations.play('other');
}

function initKeys(){
	charger.game.key.up = charger.game.input.keyboard.addKey(Phaser.Keyboard.UP);
	charger.game.key.down = charger.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	charger.game.key.left = charger.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	charger.game.key.right = charger.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	charger.game.key.space = charger.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	charger.game.key.up.onDown.add(keyPress, this);
	charger.game.key.up.onUp.add(keyRelease, this);
	charger.game.key.down.onDown.add(keyPress, this);
	charger.game.key.down.onUp.add(keyRelease, this);
	charger.game.key.left.onDown.add(keyPress, this);
	charger.game.key.left.onUp.add(keyRelease, this);
	charger.game.key.right.onDown.add(keyPress, this);
	charger.game.key.right.onUp.add(keyRelease, this);
	charger.game.key.space.onDown.add(keyPress, this);
}



function initGame(){
	charger.game.levels = [];
	
	charger.game.levels.push(
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
	0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,0,
	0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	
	charger.game.phone_background = charger.game.add.sprite(0, 0, 'phone');
	charger.game.status_bar = charger.game.add.sprite(15, 47, 'statusBar');
	charger.game.battery = charger.game.add.sprite(322, 52, 'battery');
	charger.game.background = null;
	charger.game.dPressed = charger.game.add.sprite(119, 380, 'dPressed');
	charger.game.dPressed.animations.add('up', [1], 10 ,true);
	charger.game.dPressed.animations.add('down', [2], 10 ,true);
	charger.game.dPressed.animations.add('right', [3], 10 ,true);
	charger.game.dPressed.animations.add('left', [4], 10 ,true);
	charger.game.dPressed.animations.add('other', [0], 10 ,true);
	charger.game.menu = null;
	charger.game.key = [];
	charger.game.key.up = null;
	charger.game.key.down = null;
	charger.game.key.left = null;
	charger.game.key.right = null;
	charger.game.key.space = null;
	charger.game.blocks = charger.game.add.group();
	charger.game.player = null;
	
	//charger.game.physics.startSystem(Phaser.Physics.ARCADE);
	
	initKeys();
	createBackground(0);
	createMenu("main_menu");
}

function createBlock(linearIndex){
	if(linearIndex != null){
		charger.game.blocks.create(15 + (10 * (linearIndex % 40)), 78 + (10 * Math.floor(linearIndex / 40)), 'block');	
	}
}

function createCharger(linearIndex){
	if((charger.game.charger != null) || (linearIndex === 'destroy')){
		charger.game.charger.destroy();
		charger.game.charger = null;
	}
	if(linearIndex != null){
		charger.game.charger = charger.game.add.sprite(15 + (10 * (linearIndex % 40)), 78 + (10 * Math.floor(linearIndex / 40)), 'charger');
	}
}

function createPlayer(linearIndex){
	if((charger.game.player != null) || (linearIndex === 'destroy')){
		charger.game.player.destroy();
		charger.game.player = null;
	}
	if(linearIndex != null){
		charger.game.player = charger.game.add.sprite(15 + (10 * (linearIndex % 40)), 78 + (10 * Math.floor(linearIndex / 40)), 'player');
		//charger.game.physics.arcade.enable([charger.game.player]);
		//charger.game.player.enableBody = true;
	}
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

	charger.game.phone_background.moveDown();

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
