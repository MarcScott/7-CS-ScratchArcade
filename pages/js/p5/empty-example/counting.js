var x = 0;
var y = 0;
function setup(){

}

function draw(){
    fill(255,255,255)
    rect(0,0,200,200)
    x++
    textSize(32);
    fill(0, 102, 153);
    if(x%10===0){
	y = x/10
	text(y, 10, 30); 
    }
    else{
	text(y, 10, 30);
    }
}
