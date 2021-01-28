var canvas, backgroundImage, 

var gameState = 0;
var player, obs;
var form, game;

function preload(){
    player = loadImage("images/Player.PNG")
}

function setup(){
    canvas = createCanvas(displayWidth = 100, displayHeight = 100);
    obs = new Obs(); 
}