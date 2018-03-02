import 'phaser';

export default function PreloadScene(width, height) {
   var scene = new Phaser.Scene('Preload');

	scene.preload = function()
	{
		this.load.spritesheet('button', 'assets/img/Button/button_sprite_sheet.png', { frameWidth: 193, frameHeight: 71 });
		this.load.image('logo', 'assets/logo.png');
	};

	scene.create= function()
	{
		var logo = this.add.image(400, 150, 'logo');
		var headingText = this.add.text(((width/2)-130), height-30, 'Click To Start', { fontSize: '32px', fill: '#FFF' });

		this.tweens.add({
			targets: logo,
			y: 250,
			duration: 2000,
			ease: 'Power2',
			yoyo: true,
			loop: -1
		});
		
		this.input.once('pointerdown', function () {
            this.scene.start('Game');
        }, this);
	};

	scene.update= function()
	{
		'use strict';
		
		// ...
	};
	
	
	return scene;
}



