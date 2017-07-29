var charger = charger || {};
charger.game = new Phaser.Game(430, 600, Phaser.AUTO, 'phaser-game', null, true);

charger.game.state.add('Preload', charger.Preload);
charger.game.state.add('PlayGame', charger.PlayGame);

charger.game.state.start('Preload');