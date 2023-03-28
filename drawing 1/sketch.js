//function art_1
//var p_array = [];
//var num_it = 1000;
//function art_1
//function art_2
//var art_2_form = [];
//var num_rect = 100;
//function art_2
var lin_a = [];
num_line = 1;


function setup() {
  createCanvas(800, 800);
//  pixelDensity(1);
    
    //function art_1
//    for(var i=0;i<num_it;i++){
//        p_array.push(new art_1());
//    }
    //function art_1
    //function art_2
//    for(var i=0;i<num_rect;i++){
//        art_2_form.push(new art_2());
//    }
    //function art_2
//    angleMode(DEGREES);
    
    for(var i=0;i<num_line;i++){
        lin_a.push(new art_3());
    }
    
}

function draw() {
  background(255, 10);
    
    //function art_1
//    for(var i=0;i<p_array.length;i++){
//        var p = p_array[i];
//        p.draw();
//        p.move();
//    }
    //function art_1
    //function art_2
//    for(var i=0;i<art_2_form.length;i++){
//        var q = art_2_form[i];
//        q.draw();
//        q.move(mouseX,mouseY);
//    }
    //function art_2
    
    for(var i=0;i<lin_a.length;i++){
        var r = lin_a[i];
        r.draw(width/2,height/2);
    }
    
    
}

function art_1(){
    this.x=random(0,width);
    this.y=random(0,height);
    this.r_color=[random(0,255),random(0,255),random(0,255)];
    this.size_e = 3;
    this.moving_speed = 0.01;
    this.moving_speed_new = 1;
    this.switch_gate_x = 0;
    this.switch_gate_y = 0;
    
    this.draw = function(){
        push();
//        stroke('white');
        noStroke();
//        strokeWeight(5);
        fill(this.r_color);
        ellipse(this.x,this.y,this.size_e,this.size_e);
        pop();
    }
    
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

function art_2(){
    
    this.x=random(0,width+100);
    this.y=random(0,height+100);
    this.alpha_r=6;
    this.r_color=[random(0,255),random(0,255),random(0,255),random(0,this.alpha_r)];
    this.h = random(0,500);
    this.w = random(0,500);
    this.r = random();
    
    this.draw = function(){
        
        
        push();
        
        noStroke();
        if(this.r<0.5){
            blendMode(HARD_LIGHT);
        }
        else{
            blendMode(BLEND);
        }
        
        fill(this.r_color);
        
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

function art_3(){
    this.x=0;
    this.y=0;
    
    this.number_of_l = 100;
    this.line_gap = 0.7;
    this.line_dis = 10;
    this.line_h=50;
    this.strokeWeight = 3;
    this.line_color = [200, 100, 100];
    
    function single_line(x_s,y_s,lin_h,d_n,
                          line_dis,s_w,line_color){
        push();
        strokeWeight(s_w);
        stroke(line_color);
        
        translate(x_s,y_s);
        rotate((2*PI)/d_n);
        line(line_dis,line_dis,lin_h,lin_h);
        pop();
    }
    this.draw = function(x,y){
        push();
        for(var i=0;i<this.number_of_l;i++){
            
            single_line(x,y,this.line_h+(i*this.line_gap),
                        this.number_of_l/((i+1)+(i*this.line_gap)),
                        this.line_dis+(i*this.line_gap),
                        this.strokeWeight,this.line_color);
        }
        pop();
        
        
//        single_line(x,y,this.line_h,6/2,this.line_dis);
//        
//        single_line(x,y,this.line_h,6/3,this.line_dis);
//        single_line(x,y,this.line_h,6/4,this.line_dis);
//        single_line(x,y,this.line_h,6/5,this.line_dis);
//        single_line(x,y,this.line_h,6/6,this.line_dis);
        
    }
}


























