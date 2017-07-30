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
		this.load.spritesheet('dPressed', 'assets/dPressed.png', 194, 132);
		this.load.image('battery', 'assets/Battery.png');
		this.load.image('block', 'assets/block.png');
		this.load.image('player', 'assets/player.png');
		this.load.image('charger', 'assets/charger.png');
		this.load.spritesheet('battery_bar', 'assets/batteryBar.png', 69, 14);
		},

	
	create: function(){
		this.state.start("PlayGame");
	}
}