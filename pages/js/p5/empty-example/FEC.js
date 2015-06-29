var PC = 1;
function setup(){
    createCanvas(600, 500);
}

function drawCPU(){
    var green =color(80,200,60);
    var red = color(200,40,40);
    var blue = color(40,40,200);
    var grey = color(120,120,120);
    var black = color(30,30,30)
    var yellow =color(204,204,0)

    //draw memory
    stroke(green);
    fill(green);
    rect (50,50,150,400);
    textSize(28);
    textAlign(CENTER);
    text("Memory", 50+150/2,45);
    
    //Add mem locations
    fill(black);
    stroke(black);
    textAlign(RIGHT);
    textSize(18);
    for(var i=0;i<13;i++){
	text(i+1,75,50+(i+1)*30)
    }
    
    //draw registers
    textAlign(CENTER)
    stroke(red)
    fill(red)
    rect(400,50,150,100)
    fill(0,0,0);
    stroke(0,0,0);
    text("Registers", 400+150/2,45); 
    text('PC -',425,75)

    //draw CU
    stroke(blue) 
    fill(blue)
    rect(400,200,150,100)
    text("Control Unit", 400+150/2,195); 

    //draw ALU
    stroke(yellow)
    fill(yellow)
    rect(400,350,150,100);
    translate(50,0);
    var theALU = text("ALU", 400+150/2,345); 
    translate(-50,0);
}

function fetch(){
    var grey = color(120,120,120);
    var black = color(30,30,30);
    
    stroke(black)
    fill(black)
    textAlign(CENTER)
    text(PC, 450,75)

    //Add data at mem locations
    fill(grey);
    stroke(grey);
    textAlign(CENTER)
    var instructions =['Load from 5','Add from 6','Store at 8','','12','8'];
    for(var i=0;i<instructions.length;i++){
	text(instructions[i],140,50+(i+1)*30)
    }
}

function animateAlongArray(points,index,object){
    
        }
var blahx = 0;
var blahy = 0;

function draw(){
    var white = color(255,255,255)
    var black = color(0,0,0)
    fill(white)
    rect(0,0,600,500)
    blahx++;
    drawCPU()
    fetch()
    fill(black)
    text('some blah',blahx,400)
}
