var music
var mute_btn

var background
var bird
var pipe
var ground
var GameState

var score

var reset


function preload()
{
  birdplaying = loadImage("New Project (3).png")
  birdidle = loadImage("New Project (4).png")
  birdfail = loadImage("New Project (2).png")
  groundImage = loadImage("Ground.png")
  backgroundImage = loadImage("background.jpg")
}

function setup() {
    createCanvas(500,700);
    
    ground = createSprite(250,600,20,100)
    ground.addImage("Ground", groundImage)
    // ground.x = ground.width/2
    // ground.velocityX = -(6)



  frameRate(80);

  // music.play();
 // music.setVolume(0.5);

  //mute_btn = createImg('mute.');
  //mute_btn.position(450,20);
  //mute_btn.size(50,50);
  //mute_btn.mouseClicked(mute);

  //textSize(50)
  
}

function draw() 
{
  background(51);
  image(backgroundImage);
  //birdplaying.debug = false;

  // if (ground.x < 0){
  //   ground.x = ground.width/2;
  // }

  drawSprites();
   
}


// function mute()
// {
//   if(music.isPlaying())
//      {
//       music.stop();
//      }
//      else{
//       music.play();
//      }
// }


