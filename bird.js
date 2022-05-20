let up;
class Bird{
  constructor(x=100*unit){
    //not Know yet
    up=100*unit;
    this.up=up;
    this.x=x;
    this.y=height-up;
  }
  show(){
    fill(0,240,240);
    //rect(this.x,height-this.up,20*unit,15*unit);
    image(bird1,this.x,height-this.up,20*unit,15*unit);
  }
  move(){
    if(height-this.up<height-25*unit){
      this.up-=3*unit;
    }
  }
  add(num){
    //console.log(num);
    this.up+=num*soundSensi*unit;
  }
}

