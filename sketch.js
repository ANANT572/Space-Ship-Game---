var ss,ssi,e,ei,bg;
var enmiesGroup;
var Bullet,BulletGroup;
var score = 0 ;
function preload(){
    ssi = loadImage("spaceship2.png");
    ei = loadImage("enemies.png");
    bg = loadImage("background.png");
    }

    function setup(){
      createCanvas(600,200);
     ss = createSprite(60,160,20,20);
     ss.addImage(ssi);
     ss.scale = 0.3; 
     enmiesGroup = new Group(); 
     BulletGroup = new Group(); 
      
    }


    function draw(){
      background("black");
      ss.x = mouseX;
      ss.y = mouseY;
      if(keyDown("space")){
    createBullet();
  }
      if(BulletGroup.isTouching(enmiesGroup)){
    enmiesGroup.destroyEach();
    score = score+1;
  }
     spawnEnemies();
      drawSprites();
       textSize(20);
  fill("red");
  text("SCORE : "+score,10,15);
    }
function spawnEnemies(){
  if(frameCount%80 === 0){
    var e = createSprite(520,Math.round(random(0,400)),20,20);
      e.addImage(ei); 
     e.scale = 0.15;
    
    enmiesGroup.add(e);
  }
}
   function createBullet(){
  var Bullet = createSprite(ss.x,ss.y,5,5);
  Bullet.velocityX = 6 ;
  Bullet.shapeColor = "yellow";
  BulletGroup.add(Bullet);
}