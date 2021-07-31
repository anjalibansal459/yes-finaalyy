var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var s1
var form, player, game;

var cars, car1, car2, car3, car4;
var car1i,car2i,car3i,car4i,track;

var xPos=375;

function preload(){
  car1i=loadImage ("car1.png")
  car2i=loadImage ("car2.png")
  car3i=loadImage ("car3.png")
  car4i=loadImage ("car4.png")
  track=loadImage("track.png")
  //s1=loadSound("images/s.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //s1.play()
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState=== 2){
    game.end();
  }
}

