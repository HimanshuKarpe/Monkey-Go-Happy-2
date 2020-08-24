var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","e6e8204a-6c00-4c09-a8e9-08981f9bdcc6","63abb35d-ffd3-4e1e-93d0-9cf2983ad499"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":3,"version":"XYA4ZpJbMeKASTZ3DmWDXMNJyz98jqSY","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"2Yvqoxy6fyik.SrBjPar0tn1PTJPIXsk","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"XB8mcj.CtHDAVmzkLsn_5c3xuN7s1Bhc","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/33841f90-7a53-4346-b956-e51d1961959b.png"},"e6e8204a-6c00-4c09-a8e9-08981f9bdcc6":{"name":"glitch-game over-background","sourceUrl":"assets/v3/animations/eYtuUGotEz1zIhS2t9iGN-xHGNWxNhJeROe-_kd5d7I/e6e8204a-6c00-4c09-a8e9-08981f9bdcc6.png","frameSize":{"x":626,"y":626},"frameCount":1,"looping":true,"frameDelay":4,"version":"hEs1uROhH7Ejq3lc6pjJShrcD6mZWCcn","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":626},"rootRelativePath":"assets/v3/animations/eYtuUGotEz1zIhS2t9iGN-xHGNWxNhJeROe-_kd5d7I/e6e8204a-6c00-4c09-a8e9-08981f9bdcc6.png"},"63abb35d-ffd3-4e1e-93d0-9cf2983ad499":{"name":"banana.png_1","sourceUrl":"assets/v3/animations/eYtuUGotEz1zIhS2t9iGN-xHGNWxNhJeROe-_kd5d7I/63abb35d-ffd3-4e1e-93d0-9cf2983ad499.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"yg3mILLsQoLS.VBpCq.RJMKqjHQs_IW8","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/eYtuUGotEz1zIhS2t9iGN-xHGNWxNhJeROe-_kd5d7I/63abb35d-ffd3-4e1e-93d0-9cf2983ad499.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY=1;
var END=0;
var gameState=PLAY;

var monkey=createSprite(70,280,20,20);
monkey.setAnimation("monkey");
monkey.scale=0.1;

var ground=createSprite(200,325,400,5);

var InvisibleGround=createSprite(200,330,400,5);
InvisibleGround.visible=false;

var ObstaclesGroup=createGroup();
var FruitGroup=createGroup();
monkey.debug=true;
var count=0;

var rand=randomNumber(1,9);

function draw() {
  
  background(rgb(0, 255, 255));
  
  //monkey.setCollider("circle",0,13);
  
  if(gameState===PLAY){
   ground.velocityX=-5;
   
   if(keyDown("space")&&monkey.y>250){
    monkey.velocityY=-10;       
    }
  
    //ObstaclesGroup();
    //FruitGroup();
    
    
  
    if(FruitGroup.isTouching(monkey)){
      FruitGroup.destroyEach();
      count=count+rand;
    }
  
    if(ObstaclesGroup.isTouching(monkey)){
      ObstaclesGroup.destroyEach();
      monkey.scale=0.2;
      playSound("assets/Game-over-robotic-voice.mp3");
      gameState=END;
    }
    
    if(count===count+10){
      ObstaclesGroup.velocityX=ObstaclesGroup.velocityX+5;
      FruitGroup.velocityX=FruitGroup+4;
      ground.velocityX=ground.velocityX+5;
    }
    
  }
  
  else if(gameState===END){
    var gameover=createSprite(200,200);
    gameover.setAnimation("glitch-game over-background");
    gameover.scale=0.75;
    
    monkey.velocityY=0;
    ground.velocityX=0;
    ObstaclesGroup.setVelocityXEach(0);
    ObstaclesGroup.setLifetimeEach(-1);
    
    FruitGroup.setVelocityXEach(0);
    FruitGroup.setLifetimeEach(-1);
    
  }
  textSize(25);
  text("score: "+count,230,60);
    
  monkey.velocityY=monkey.velocityY+0.5;  
    
  if(ground.x<200){
    ground.x=ground.width/2;
  }  
    
  monkey.collide(InvisibleGround);  
    
  Obstacles(); 
  Banana();
    
 drawSprites(); 
}

function Obstacles(){
  if(World.frameCount%120===0){
    var obstacle=createSprite(400,300,20,20);
    obstacle.velocityX=-5;
    obstacle.setAnimation("Stone");
    obstacle.scale=0.13;
    obstacle.lifetime=120;
    ObstaclesGroup.add(obstacle);
  }
}

function Banana(){
  if (World.frameCount%160===0){
    var banana=createSprite(400,240,20,20);
    banana.y=randomNumber(200,240);
    banana.velocityX=-4;
    banana.setAnimation("Banana");
    banana.scale=0.05;
    banana.lifetime=140;
    FruitGroup.add(banana);
    
  }
  switch(count){
    case 10:monkey.scale=0.12;
     break;
    case 20:monkey.scale=0.14;
     break;
    case 30:monkey.scale=0.12;
     break;
    case 40:monkey.scale=0.14;
     break;
    default: break;
    
  }
}




  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
