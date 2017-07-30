var charger = charger || {};

function updateGame(){
	
}

function createGame(level){
	createMenu('destroy');

	charger.game.battery_bar.width = 69;
	charger.game.battery_bar.animations.play('sufficient');
	if(level>0){
		charger.game.score+=charger.game.percentage;
	}
	charger.game.scoreText.text = "SCORE: " + charger.game.score;
	charger.game.percentage = 100;
	
	if(charger.game.scoreText_screen!=null){
		charger.game.scoreText_screen.text="";
	}

	charger.game.currentLevelIndex = level;
	console.log("currentLevelIndex: " + charger.game.currentLevelIndex);
	
	removePlayerBlocksCharger();
	
	var currentLevel = charger.game.levels[level];
	charger.game.level = level;
	for(var i = 0; i < currentLevel.length; i++){
		if(currentLevel[i] === 1){
			createBlock(i);
		} else if(currentLevel[i] === 2){
			createPlayer(i);
		} else if(currentLevel[i] === 3){
			createCharger(i);
		}
	}
	
	charger.game.world.bringToTop(charger.game.blocks);
	charger.game.timer.start();
}

function levelCompleted(){
	console.log("Level plus one is " + charger.game.currentLevelIndex++);
	createGame(charger.game.currentLevelIndex++);
}


function movePlayerToIndex(newPlayerLinearIndex){
	if(newPlayerLinearIndex > 1119){
		newPlayerLinearIndex = newPlayerLinearIndex - 1120;
	} else if(newPlayerLinearIndex < 0){
		var x = newPlayerLinearIndex % 40;
		var y = Math.floor(Math.abs(newPlayerLinearIndex/40));
		newPlayerLinearIndex = (1120 - (y * 40)) + x;
	}
	if((charger.game.levels[charger.game.currentLevelIndex])[newPlayerLinearIndex] === 3){
		levelCompleted();
	}
	if((charger.game.levels[charger.game.currentLevelIndex])[newPlayerLinearIndex] === 1){
		return;
	}
	
	charger.game.player.x = 15 + (10 * (newPlayerLinearIndex % 40));
	charger.game.player.y = 78 + (10 * Math.floor(newPlayerLinearIndex / 40));
	charger.game.playerLinearIndex = newPlayerLinearIndex;
}

function jumpPlayer(){
	
}

function movePlayer(direction){
	//charger.game.player = charger.game.add.sprite(15 + (10 * (linearIndex % 40)), 78 + (10 * Math.floor(linearIndex / 40)), 'player');
	if(direction === 'up'){
		movePlayerToIndex(charger.game.playerLinearIndex - 40);
	} else if(direction === 'down'){
		movePlayerToIndex(charger.game.playerLinearIndex + 40);
	} else if(direction === 'left'){
		var oldIndexY = Math.floor(charger.game.playerLinearIndex/40);
		var tempNewIndexY = Math.floor((charger.game.playerLinearIndex - 1)/40);
		var indexToMoveTo = charger.game.playerLinearIndex - 1;
		if(oldIndexY != tempNewIndexY){
				indexToMoveTo = charger.game.playerLinearIndex + 36;
		}
		movePlayerToIndex(indexToMoveTo);
	} else if(direction === 'right'){
		var oldIndexY = Math.floor(charger.game.playerLinearIndex/40);
		var tempNewIndexY = Math.floor((charger.game.playerLinearIndex + 1)/40);
		var indexToMoveTo = charger.game.playerLinearIndex + 1;
		if(oldIndexY != tempNewIndexY){
				indexToMoveTo = charger.game.playerLinearIndex - 36;
		}
		movePlayerToIndex(indexToMoveTo);
	}
}

function keyPress(key){
	if(key.keyCode === Phaser.KeyCode.UP){
		if(charger.game.menu == null){
			if(charger.game.menu == null){
				movePlayer('up');
			}
		}
		console.log("UP");
		charger.game.dPressed.animations.play('up');
	} else if(key.keyCode === Phaser.KeyCode.DOWN){
		if(charger.game.menu == null){
			if(charger.game.menu == null){
				movePlayer('down');
			}
		}
		console.log("DOWN");
		charger.game.dPressed.animations.play('down');
	} else if(key.keyCode === Phaser.KeyCode.LEFT){
		if(charger.game.menu == null){
			if(charger.game.menu == null){
				movePlayer('left');
			}
		}
		console.log("LEFT");
		charger.game.dPressed.animations.play('left');
	} else if(key.keyCode === Phaser.KeyCode.RIGHT){
		if(charger.game.menu == null){
			movePlayer('right');
		}
		console.log("RIGHT");
		charger.game.dPressed.animations.play('right');
	} else if(key.keyCode === Phaser.KeyCode.SPACEBAR){
		if(charger.game.menu != null){
			createGame(0);
		} else {
			console.log(charger.game);
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

function removePlayer(){
	if(charger.game.player != null){
		charger.game.player.destroy();
		charger.game.player = null;
	}
}

function removeBlocks(){
	if(charger.game.blocks != null){
		charger.game.blocks.destroy(true);
		charger.game.blocks = null;
	}
}

function removeCharger(){
	if(charger.game.charger != null){
		charger.game.charger.destroy();
		charger.game.charger = null;
	}
}

function removePlayerBlocksCharger(){
	removePlayer();
	removeBlocks();
	removeCharger();
}

function timerTick(){
	charger.game.percentage -= 5;
	charger.game.battery_bar.width = 69*(charger.game.percentage/100);
	console.log("timer: " + charger.game.percentage);
	if(charger.game.percentage < 50){
		charger.game.battery_bar.animations.play('insufficient');
	}
	if(charger.game.percentage < 0){
		removePlayerBlocksCharger();
		createMenu('you_lose');
		charger.game.timer.stop(false);
	}
}

function initGame(){
	charger.game.score = 0;
	charger.game.percentage = 100;
	
	charger.game.level = null;
	
	charger.game.levels = [];
	charger.game.levels.push([
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
	0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,0,
	0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
	]);
	charger.game.levels.push([
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,
	0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,2,1,0,0,
	0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0
	]);
	
	charger.game.phone_background = charger.game.add.sprite(0, 0, 'phone');
	charger.game.status_bar = charger.game.add.sprite(15, 47, 'statusBar');
	charger.game.battery_bar = charger.game.add.sprite(325, 55, 'battery_bar');
	charger.game.battery_bar.animations.add('sufficient', [0], 10 , true);
	charger.game.battery_bar.animations.add('insufficient', [1], 10 , true);
	charger.game.battery_bar.animations.play('sufficient');
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
	charger.game.scoreText = charger.game.add.text(25, 47, 'SCORE: 0', { font: "30px VT323", fill: '#844' });
	charger.game.scoreText_screen = null;

	charger.game.timer = charger.game.time.create(false);
	charger.game.timer.loop(1000, timerTick, this);
	
	initKeys();
	createBackground(0);
	createMenu("main_menu");
}

function createBlock(linearIndex){
	if(charger.game.blocks == null){
		charger.game.blocks = charger.game.add.group();
	}
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
	charger.game.playerLinearIndex = linearIndex;
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
	console.log("create menu being called");
	if((charger.game.menu != null) || (menu === 'destroy')){
		if(charger.game.menu != null){
			charger.game.menu.destroy();
			charger.game.menu = null;
		}
	}
	if(menu === 'main_menu'){
		charger.game.menu = charger.game.add.sprite(15, 78, 'main_menu');
	} else if(menu === 'you_win'){
		charger.game.menu = charger.game.add.sprite(15, 78, 'you_win');
	} else if(menu === 'you_lose'){
		charger.game.menu = charger.game.add.sprite(15, 78, 'you_lose');
		charger.game.scoreText_screen = charger.game.add.text(135, 230, charger.game.scoreText.text, { font: "45px VT323", fill: '#fff' });
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
