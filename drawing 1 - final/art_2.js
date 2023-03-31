//random square touch interaction

function art_2(){
    
    this.x=random(0,width+100);
    this.y=random(0,height+100);
    this.alpha_r=slider10.value();
    this.r_color=[random(0,255),random(0,255),random(0,255)];
    this.h = random(0,500);
    this.w = random(0,500);
    this.r = random();
    
    this.draw = function(){
        this.alpha_r=slider10.value();
        
        push();
        
        noStroke();
        if(this.r<0.5){
            blendMode(HARD_LIGHT);
        }
        else{
            blendMode(BLEND);
        }
        
        fill(this.r_color[0],this.r_color[1],this.r_color[2],random(0,this.alpha_r));
        
        rect(this.x,this.y,this.h,this.w);
        pop();
  
        
    }
    
    this.move = function(x_m,y_m){
        var d = dist(this.x,this.y,x_m,y_m);
        if(d<200){
            this.x=this.x+random(-100,100);
            this.y=this.y+random(-100,100);
        }
        if(this.x<0 || this.x>(width+100)){
            this.x=random(0,width+100);
        }
        if(this.y<0 || this.y>(height+100)){
           this.y=random(0,height+100);
           }
    }
}