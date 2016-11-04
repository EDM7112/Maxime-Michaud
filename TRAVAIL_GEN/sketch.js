//MON TRAVAIL DE GÉNÉRATION D'IMAGE - MAXIME MICHAUD




var img1; // partie isolée de l'image originale
var img2; // partie isolée de l'image originale
var img3; // partie isolée de l'image originale
var img4; // partie isolée de l'image originale
var img5; // partie isolée de l'image originale
var img6; // partie isolée de l'image originale
 
var song1; // Maxime Michaud - Essai n° 1 en do majeur






//PRELOAD----------------------------------------------------------------------

function preload() {
  img1 = loadImage('assets/brush1.png');
  img2 = loadImage('assets/brush2.png');
  img3 = loadImage('assets/brush3.png');
  img4 = loadImage('assets/brush4.png');
  img5 = loadImage('assets/brush5.png');
  img6 = loadImage('assets/brush6.png');
  song = loadSound('assets/essai.mp3');
}




//SETUP --------------------------------------------------------------------

function setup() {
        createCanvas(windowWidth, windowHeight);
        song1 = loadSound('assets/essai.mp3');
        song.loop();
        song.stop();
        loop();
        colorMode(HSB);
        //BACKGROUND ALÉATOIRE DANS LES TEINTES
        background(random (68,82),random (2,8),random(82,100));
        cursor (CROSS, [0,1288], [0,910]);



        
       
        //les IMAGES ICI-----------------------
        
        loadImage("assets/brush1.png", 
        function(img1) {
        scale (random(0.4,1.8));
        tint(random (30,60), random (0,82), random(60,92));
        image(img1, random (20,1000), random(10,600));});
        
        
        
        loadImage("assets/brush2.png", 
        function(img2) {
        scale (random(0.4,1.6));
        tint(random (144,192), random (0,88), random(44,88));
        image(img2, random (100,1000), random(60,600));});
        
        
        
        loadImage("assets/brush3.png", 
        function(img3) {
        scale (random(0.6,1.4));
        tint(random (30,60), random (0,86), random(40,96));
        image(img3, random (200,1110), random(100,760));});
        
        
        loadImage("assets/brush4.png", 
        function(img4) {
        scale (random(0.8,1.4));
        tint(random (144,192), random (0,68), random(48,100));
        image(img4, random (140,800), random(100,680));});
        
        
        
        loadImage("assets/brush5.png", 
        function(img5) {
        scale (random(0.8,2.0));
        tint(random (30,60), random (0,90), random(20,82));
        image(img5, random (80,1080), random(200,400));});
        
        
        
        loadImage("assets/brush6.png", 
        function(img6) {
        scale (random(0.8,1.2));
        tint(random (144,192), random (0,76), random(56,92));
        image(img6, random (180,680), random(60,720));});
        
        
        
        
}





//TRACK SON---------------------------------------------

function mousePressed() {
  if ( song.isPlaying() ) { // cliquer
    song.stop();
   
  } else {
    song.play();
    
  }
}






//DESSINER ! ! !-----------------------------------------------------------------------

function draw() 
  
{
  
  //SCALE
  
  autoScale(1288,910);
  


  // VOLUME TRACK
  var volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  song.amp(volume);




 // RANGE PITCH
  var speed = map(mouseY, 1, height, 0, 2);
  speed = constrain(speed, 1, 4);
  song.rate(speed);



        angleMode(DEGREES);

        if ( mouseIsPressed ) {
          
          loadImage("assets/brush5.png", 
           function(img5) {
           tint(random (20,140), random (0,82), random(46,94));
    
           scale (random(0.4,1.8));
          
        
        push();
        rotate(random(1,360));
        image(img5, random (0,1260), random(0,880));
        pop();
          
           
        });
                
       
        }
        
        
        
        

  }
  


  

//WINDOW RESIZE


  
  function autoScale (targetWidth, targetHeight) {
    var aw = windowWidth/targetWidth;
    var ah= windowHeight/targetHeight;
    translate(windowWidth*0.5,windowHeight*0.5);
    
    scale ( min(aw,ah));
    translate (-targetWidth*0.5,-targetHeight*0.5);
    
  }
  
  


// ALLRIGHT LOL

