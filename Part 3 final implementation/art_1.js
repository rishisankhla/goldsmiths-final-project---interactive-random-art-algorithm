//sin-cos movement of circle

//constructor function for the sin-cos movement of circle
function art_1(){
    this.x=random(0,width);
    this.y=random(0,height);
    this.r_color=[random(0,255),random(0,255),random(0,255)];
    this.size_e = slider8.value();
    this.moving_speed = slider7.value();
    this.moving_speed_new = 1;
    this.switch_gate_x = 0;
    this.switch_gate_y = 0;
    
    //draw function to draw all the circle
    this.draw = function(){
        this.size_e = slider8.value();
        this.moving_speed = slider7.value();
        push();
        noStroke();
        fill(this.r_color);
        ellipse(this.x,this.y,this.size_e,this.size_e);
        pop();
    }
    
    //function to make the movement 
    this.move = function(){
        var n1 = noise(this.x*this.moving_speed,this.y*this.moving_speed,frameCount*this.moving_speed);
        var a1 = TAU * n1;
        if(this.switch_gate_x == 0){
            this.x=this.x-(sin(a1)+this.moving_speed_new);
        }
        else if(this.switch_gate_x == 1){
            this.x=this.x+(sin(a1)+this.moving_speed_new);
        }
        if(this.x>width){
            this.switch_gate_x = 0;
        }
        else if(this.x<0){
            this.switch_gate_x = 1;
        }
        if(this.switch_gate_y == 0){
            this.y=this.y-(cos(a1)+this.moving_speed_new);
        }
        else if(this.switch_gate_y == 1){
            this.y=this.y+(cos(a1)+this.moving_speed_new);
        }
        if(this.y>height){
            this.switch_gate_y = 0;
        }
        else if(this.y<0){
            this.switch_gate_y = 1;
        }
    }
}
