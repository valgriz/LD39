var charger = charger || {};

charger.Preload = function(){};


function loadStart(){
	//this.loading = this.add.sprite(0, 0, 'loading');
}

charger.Preload.prototype = {
	preload: function(){
		this.load.image('background', 'assets/background.png');
		this.load.image('statusBar', 'assets/statusBar.png');
		this.load.image('phone', 'assets/phone.png');
		this.load.image('main_menu', 'assets/main_menu.png');
		this.load.spritesheet('you_win', 'assets/you_win.png');
		this.load.image('you_lose', 'assets/you_lose.png');
<<<<<<< HEAD
		this.load.image('block', 'assets/block.png');
		this.load.image('player', 'assets/player.png');
		this.load.image('charger', 'assets/charger.png');
=======
		this.load.spritesheet('dPressed', 'assets/dPressed.png', 194, 132);
		this.load.image('battery', 'assets/Battery.png');
		this.load.spritesheet('battery_bar', 'assets/batteryBar.png');
		
>>>>>>> aee783bd05db893c9e0ae7ee0b9cb8b4140b029f
	},
	
	create: function(){
		this.state.start("PlayGame");
	}
}