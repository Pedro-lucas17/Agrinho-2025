var xJogador5 = 600
var t = 0
var v = 0
var z = 0
var r = 600;
var y = 0
var x = 600;
var speed = 0.20;

function setup()  {
  createCanvas(600, 600);

  
  
  
  frameRate(30);

}

function draw() {
  background("#222222");

 //primeira parte
  fill("#8BC34A")
  rect(0,460,600,500)
  fill("dark #607D8B")
  rect(0,460,600,5)
  
  fill("black")
  textSize(35)
  text("🐎",xJogador5,560)
  xJogador5 -= random (5)
  if(xJogador5>490){
   text("cheguei no campo")
  }
  if (xJogador5>600){
    xJogador5=0
    
  }
  fill("white")
  rect(0,250,600,10)
   rect(0,270,100,10)
   rect(120,270,120,10)
   rect(250,270,120,10)
   rect(380,270,120,10)
   rect(510,270,120,10)
   rect(0,290,600,10)
  
  
  //segunda parte
  let deltaX = speed * deltaTime

  t += deltaX
  v += deltaX
  x -= deltaX
  y += deltaX
  r -= deltaX
  z += deltaX
  if (v > 615)  {
    v = 0;
  }  
  
   if (t > 630)  {
    t = 0;
  }
  
  if (x < 1)  {
    x = 600;
  }

  if (y > 600)  {
    y = 0;
  }
  if (r < -30)  {
    r = 600;
  }

  if (z > 650)  {
    z = 0;
  }
    
  textSize(40)
 
  text("🚘",r, 150, 20);
  text("🚘",x, 300, 20); 
  text("🚔",z, 100, 20);
  text("🚍",t, 250, 20);
  text("🚘",v, 200, 20); 
  text("🚔",y, 350, 20);
    
  //detalhes(obsional)

  textSize(40)
  
  text("🐂",510,510)
  text("🐖",450,530)
  text("🦆",150,500)
  text("🦨",65,520,)
  
}