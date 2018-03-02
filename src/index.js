import 'phaser';
import PreloadScene from './PreloadScene.js';
import GameScene from './GameScene.js';

var width = 800;
var height = 600;
var App = function() {};

App.prototype.start = function()
{
	// Scenes
	var scenes		= [];	
	scenes.push(PreloadScene(width, height));
	scenes.push(GameScene(width, height));
	// scenes.push(UpdateScene);
	
	// Game config
	var config		= {
		type	: Phaser.AUTO,
		width: width,
		height: height,
		parent: 'khaoz-game',
		scene	: scenes,
		title	: 'KhaozTest',
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 300 },
				debug: false
			}
		},
	};
	
	// Create game app
	var game		= new Phaser.Game(config);
	
	// Globals
	game._URL		= 'http://localhost/PhaserGames/PixelMemory/';	// this.sys.game._URL
	game._USER_ID	= 0;
	
	game._CONFIG	= config;
};

window.onload = function()
{
	'use strict';
	
	var app = new App();
	app.start();
}

// Fullscreen
function fs_status()
{
	if(document.fullscreenElement)
	{
		return true;
	}
	else if(document.webkitFullscreenElement)
	{
		return true;
	}
	else if(document.mozFullScreenElement)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function goFullscreen()
{
	if(fs_status())
	{
		return;
	}
	
	var el			= document.getElementById('khaoz-game').firstChild;
	el.style.height = '0';
	var requestFullScreen	= el.requestFullscreen || el.msRequestFullscreen || el.mozRequestFullScreen || el.webkitRequestFullscreen;
			
	if(requestFullScreen)
	{
		requestFullScreen.call(el);
	}
	el.style.height = '100%';
}
document.getElementById('khaoz-game').addEventListener('click', goFullscreen);


