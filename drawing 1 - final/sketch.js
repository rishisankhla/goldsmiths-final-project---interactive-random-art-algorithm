//video functions
var hand_detection;
var video;
var points_array =[];


//function art_1
var p_array = [];
var num_it = 1000;


//function art_2
var art_2_form = [];
var num_rect = 100;


//function art_3
var lin_a = [];
num_line = 1;


//function art_4
var draw_art;


//function art_5
var color_circle;
var art_5_change_color;
var art_5_change_size;
var art_5_movement_x;
var art_5_movement_y;


//extra functionality
var state_change;
var button0;
var button1;
var button2;
var button3;
var button4;
var button5;


function setup() {
  createCanvas(1800, 800);
//  pixelDensity(1);
//  angleMode(DEGREES);
    
    //function art_1
    for(var i=0;i<num_it;i++){
        p_array.push(new art_1());
    }
    
    
    //function art_2
    for(var i=0;i<num_rect;i++){
        art_2_form.push(new art_2());
    }
    

    //function art_3
    for(var i=0;i<num_line;i++){
        lin_a.push(new art_3());
    }
    
    
    //function art_4
    draw_art = new art_4();
    draw_art.setup();
    
    
    //function art_5
    art_5_change_size=50;
    art_5_change_color=3;
    color_circle = new art_5();
    
    
    //extra functionality
    state_change = 2;
    button5 = createButton("pattern 5");
    button5.position(20, 580);
    button5.mousePressed(for_b5);
    button4 = createButton("pattern 4");
    button4.position(100, 580);
    button4.mousePressed(for_b4);
    button3 = createButton("pattern 3");
    button3.position(180, 580);
    button3.mousePressed(for_b3);
    button2 = createButton("pattern 2");
    button2.position(260, 580);
    button2.mousePressed(for_b2);
    button1 = createButton("pattern 1");
    button1.position(340, 580);
    button1.mousePressed(for_b1);
    button0 = createButton("plain background");
    button0.position(420, 580);
    button0.mousePressed(for_b0);
    
    
    //video functions
    video = createCapture(VIDEO);
    video.size(640, 480);

    hand_detection = ml5.handpose(video, modelReady);

    hand_detection.on("hand", results => {
    points_array = results;
    });
    video.hide();
    
     
    
}

function draw() {
  
    //function art_0;
    art_0_calling(state_change);
    
    //function art_1
    art_1_calling(state_change);
    
    
    //function art_2
    art_2_calling(state_change);
    
    
    //function art_3
    art_3_calling(state_change);
    
    
    //function art_4
    art_4_calling(state_change);
    
    
    //function art_5
    art_5_calling(state_change);
//    console.log(art_5_change_size);
    
    
    
    //video functions
    image(video, 0, 0, 640, 480);

    drawpoints();
    
    

}

function art_1_calling(ap_1){
    if(ap_1==1){
        background(255, 10);
        for(var i=0;i<p_array.length;i++){
            var p = p_array[i];
            p.draw();
            p.move();
        } 
    } 
}
function art_2_calling(ap_2){
    if(ap_2==2){
        background(255,10);
        for(var i=0;i<art_2_form.length;i++){
            var q = art_2_form[i];
            q.draw();
            q.move(mouseX,mouseY);
        }    
    }
}
function art_3_calling(ap_3){
    if(ap_3==3){
        background(255,10);
        for(var i=0;i<lin_a.length;i++){
        var r = lin_a[i];
        r.draw(width/2,height/2);
    }
    }
        
}
function art_4_calling(ap_4){
    if(ap_4==4){
    draw_art.draw(mouseX,mouseY);
    }//don't need any background with this
}
function art_5_calling(ap_5){
    if(ap_5==5){
        background(255, 10);
        color_circle.draw(mouseX,mouseY);
//        color_circle.size_c = art_5_change_size;
    }
}
function art_0_calling(ap_0){
    if(ap_0==0){
        background(255, 255,255);
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
//    this.x=0;
//    this.y=0;
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

function art_4(){
    this.el_size = 10;
    this.colorPicker;
    
    this.setup = function(){
        this.colorPicker = createColorPicker('#ff0000');
        this.colorPicker.position(0, 50);
    }
    
    
    this.draw = function(x,y){
        push();
        noStroke();
        fill(this.colorPicker.color()); 
        ellipse(x,y,this.el_size,this.el_size);
        pop();
    }
}

function art_5(){
    
    this.size_c = art_5_change_size;
    this.color_trip = art_5_change_color;
    this.color_trip_array = [];
    this.num_c = round(width/this.size_c)*round(height/this.size_c);
    
    function single_circle(x,y,size_c,fill_c){
        push();
        noStroke();
        fill(fill_c);
        ellipse(x,y,size_c,size_c);
        pop();
    }
    
    
    
    this.draw = function(m_x1,m_y1){
        
        var c_array = [];
        for(var w=1;w<=this.num_c;w++){
            c_array.push(new art_5_mini());
        }
        for(var s=0;s<c_array.length;s++){
            c_array[s].select_number(s+1);
        }
        var c=0;
        for(var i=0;i<round(width/this.size_c);i++){
            
            var x = this.size_c*(i%round(width/this.size_c));
            var m1 = map(i,0,round(width/this.size_c),0,255);
            
            for(var p=0;p<round(height/this.size_c);p++){
                
                var y = this.size_c*(p%round(height/this.size_c));
                var m2 = map(p,0,round(height/this.size_c),0,255);
                var single_element = c_array[c];
                single_element.x=x;
                single_element.y=y;
                var d =single_element.cal_dis(m_x1,m_y1);
                var cal_di = sqrt(sq(width)+sq(height));
                var m3 = map(d,0,cal_di,0,255);
                this.color_trip_array = [];
                this.color_trip_array.push([m1,m2,m3]);
                this.color_trip_array.push([m1,m3,m2]);
                this.color_trip_array.push([m2,m3,m1]);
                this.color_trip_array.push([m2,m1,m3]);
                this.color_trip_array.push([m3,m2,m1]);
                this.color_trip_array.push([m3,m1,m2]);
                single_element.single_circle(this.size_c,
                                this.color_trip_array[this.color_trip]);
                c=c+1;
            }
        }     
    }
}

function art_5_mini(){
    this.circle_number = 0;
    this.x=0;
    this.y=0;
    this.select_number = function(a){
        this.circle_number = a;
    }
    this.single_circle = function(size_c,fill_c){
        
        push();
        noStroke();
        fill(fill_c);
        ellipse(this.x,this.y,size_c,size_c);
        pop();
    }
    this.cal_dis = function(m_x,m_y){
        var d =dist(this.x,this.y,m_x,m_y);
        return d;
    }
}




function drawpoints() {
    for (var i = 0; i < points_array.length; i += 1) {

        var first_prediction = points_array[i];
        t_number = 1;
        var c_key_point_array = [];
        for (var j = 0; j < first_prediction.landmarks.length; j += 1) {
            var keypoint = first_prediction.landmarks[j];
            c_key_point_array.push(new key_point(keypoint[0], keypoint[1],t_number));
            t_number=t_number+1;
        }
        
        for(var d=0;d<c_key_point_array.length;d++){
            var s_e = c_key_point_array[d];
            
            if(state_change==5){
                if(s_e.select_num==9){
                    s_e.draw();
                }
                if(s_e.select_num==5){
                    s_e.draw();
                }
                var common_d1 = dist(c_key_point_array[8].x,c_key_point_array[8].y,
                                    c_key_point_array[4].x,c_key_point_array[4].y);
//                console.log(common_d1);
                var our_m1 = map(common_d1,13,170,10,50);
                art_5_change_size=our_m1;
                
//                console.log(our_m1);
                
            }
            else{
                s_e.draw();
            }
            
        }

    }
}

function key_point(x,y,s_n){
    this.x=x;
    this.y=y;
    this.select_num=s_n;
    this.draw = function(){
        push();
        fill(0, 255, 0);
        noStroke();
        ellipse(this.x, this.y, 15, 15);
        push();
        fill(255);
        textSize(15);
        text(this.select_num.toString(), this.x, this.y);
        pop();
        pop();
    }
}

function modelReady() {
  console.log("Model is working");
}

function for_b0(){
    state_change = 0;
}
function for_b1(){
    state_change = 1;
}
function for_b2(){
    state_change = 2;
}
function for_b3(){
    state_change = 3;
}
function for_b4(){
    state_change = 4;
}
function for_b5(){
    state_change = 5;
}













