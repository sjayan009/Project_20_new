var car, wall;
var speed, weight;

function setup() 
{
  createCanvas(2000,800);
  
  //setting the speed and weight of the car.  
  speed  = Math.round(random(40,100));
  speed2 = Math.round(random(20,100));
  speed3 = Math.round(random(10,75));
  speed4 = Math.round(random(20,80));

  weight = Math.round(random(500,1500));
  
  //creating the car sprite
  car  = createSprite(75,100,100,40);
  car2 = createSprite(75,300,100,40);
  car3 = createSprite(75,500,100,40);
  car4 = createSprite(75,700,100,40)
  
  //creating the wall sprite
  wall = createSprite(1900,100,30,100);
  wall.shapeColor = "white";

  wall2 = createSprite(1900,300,30,100);
  wall2.shapeColor = "white";

  wall3 = createSprite(1900,500,30,100);
  wall3.shapeColor = "white";

  wall4 = createSprite(1900,700,30,100);
  wall4.shapeColor = "white";

  //assigning the velocity to the car. 
  car.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;
  
}

function draw() 
{
  background(color(0,0,0));

  car1_deformation();
  car2_deformation();
  car3_deformation();
  car4_deformation();

  drawSprites();
}

function car1_deformation()
{
  if((wall.x - car.x < (car.width + wall.width)/2))
  {
    //making sure the car collides with wall
    car.collide(wall);
    
    //making sure that the car stops
    car.velocityX = 0;
    
    //creating variable that calculates deformation of car.
    var deformation = Math.round((0.5 * speed * speed * weight)/22500);
    
    //if the deformation is less than 80, the color of the car is green, to represent good deformation.
    if(deformation < 80)
    {
      car.shapeColor = color(0,255,0);
    }

    //if the deformation is greater than 80 AND less than 180. The color of the car is yellow, to represent average deformation.    
    if(deformation > 80 && deformation < 180)
    {
      car.shapeColor = color(230,230,0);
    }

    //if the deformation is greater than 180, the color of the car is red, to represent lethal deformation.    
    if(deformation > 180)
    {
      car.shapeColor = color(255,0,0);
    }
  }
}

function car2_deformation()
{
  if((wall2.x - car2.x < (car2.width + wall2.width)/2))
  {
    //making sure the car collides with wall
    car2.collide(wall2);
    
    //making sure that the car stops
    car2.velocityX = 0;
    
    //creating variable that calculates deformation of car.
    var deformation = Math.round((0.5 * speed2 * speed2 * weight)/22500);
    
    //if the deformation is less than 80, the color of the car is green, to represent good deformation.
    if(deformation < 80)
    {
      car2.shapeColor = color(0,255,0);
    }

    //if the deformation is greater than 80 AND less than 180. The color of the car is yellow, to represent average deformation.    
    if(deformation > 80 && deformation < 180)
    {
      car2.shapeColor = color(230,230,0);
    }

    //if the deformation is greater than 180, the color of the car is red, to represent lethal deformation.    
    if(deformation > 180)
    {
      car2.shapeColor = color(255,0,0);
    }
  } 
}

function car3_deformation()
{
  if((wall3.x - car3.x < (car3.width + wall3.width)/2))
  {
    //making sure the car collides with wall
    car3.collide(wall3);
    
    //making sure that the car stops
    car3.velocityX = 0;
    
    //creating variable that calculates deformation of car.
    var deformation = Math.round((0.5 * speed3 * speed3 * weight)/22500);
    
    //if the deformation is less than 80, the color of the car is green, to represent good deformation.
    if(deformation < 80)
    {
      car3.shapeColor = color(0,255,0);
    }

    //if the deformation is greater than 80 AND less than 180. The color of the car is yellow, to represent average deformation.    
    if(deformation > 80 && deformation < 180)
    {
      car3.shapeColor = color(230,230,0);
    }

    //if the deformation is greater than 180, the color of the car is red, to represent lethal deformation.    
    if(deformation > 180)
    {
      car3.shapeColor = color(255,0,0);
    }
  } 
}

function car4_deformation()
{
  if((wall4.x - car4.x < (car4.width + wall4.width)/2))
  {
    //making sure the car collides with wall
    car4.collide(wall4);
    
    //making sure that the car stops
    car4.velocityX = 0;
    
    //creating variable that calculates deformation of car.
    var deformation = Math.round((0.5 * speed4 * speed4 * weight)/22500);
    
    //if the deformation is less than 80, the color of the car is green, to represent good deformation.
    if(deformation < 80)
    {
      car4.shapeColor = color(0,255,0);
    }

    //if the deformation is greater than 80 AND less than 180. The color of the car is yellow, to represent average deformation.    
    if(deformation > 80 && deformation < 180)
    {
      car4.shapeColor = color(230,230,0);
    }

    //if the deformation is greater than 180, the color of the car is red, to represent lethal deformation.    
    if(deformation > 180)
    {
      car4.shapeColor = color(255,0,0);
    }
  } 
}