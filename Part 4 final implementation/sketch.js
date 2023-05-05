//video functions
var hand_detection;
var video;
var points_array =[];
var video_button;
var video_state;

//function art_1
var p_array = [];
var num_it = 1000;
var slider7;
var slider8;
var slider9;


//function art_2
var art_2_form = [];
var num_rect = 100;
var slider10;
var slider11;

//function art_3
var lin_a = [];
var num_line = 0;
var slider2;
var slider3;
var slider4;
var colorPicker1;

//function art_4
var draw_art;
var slider1;
var art_4_mouse_state;

//function art_5
var color_circle;
var art_5_movement_x;
var art_5_movement_y;
var slider5;
var slider6;

//extra functionality
var state_change;
var button0;
var button1;
var button2;
var button3;
var button4;
var button5;
var savebutton;
var slider_save_d;
var slider_save_b;
var change_to_hand;
var change_to_hand_state;

//setup function
function setup() {
  cnv = createCanvas(1800, 800);
    
    //function art_1
    slider7 = createSlider(0.01, 0.1, 0.01,0.01);
    slider7.position(260, 650);
    slider7.style('width', '80px');
    slider8 = createSlider(3, 10, 3,1);
    slider8.position(260, 670);
    slider8.style('width', '80px');
    slider9 = createSlider(500, 1500, 1000,50);
    slider9.position(260, 690);
    slider9.style('width', '80px');
    for(var i=0;i<num_it;i++){
        p_array.push(new art_1());
    }
    
    
    //function art_2
    slider10 = createSlider(5, 20, 6,1);
    slider10.position(260, 710);
    slider10.style('width', '80px');
    slider11 = createSlider(75, 150, 100,1);
    slider11.position(260, 730);
    slider11.style('width', '80px');
    for(var i=0;i<num_rect;i++){
        art_2_form.push(new art_2());
    }
    

    //function art_3
    slider2 = createSlider(0.1, 1, 0.5,0.1);
    slider2.position(20, 680);
    slider2.style('width', '80px');
    slider3 = createSlider(1, 10, 3,1);
    slider3.position(20, 700);
    slider3.style('width', '80px');
    slider4 = createSlider(75, 200, 100,1);
    slider4.position(20, 720);
    slider4.style('width', '80px');
    colorPicker1= createColorPicker('#ff0000');
    colorPicker1.position(20, 740);
    for(var i=0;i<num_line;i++){
        lin_a.push(new art_3());
    }
    
    
    //function art_4
    art_4_mouse_state=false;
    slider1 = createSlider(10, 50, 10);
    slider1.position(20, 610);
    slider1.style('width', '80px');
    draw_art = new art_4();
    draw_art.setup();
    
    
    //function art_5
    slider5 = createSlider(15, 50, 15,1);
    slider5.position(260, 610);
    slider5.style('width', '80px');
    slider6 = createSlider(0, 5, 1,1);
    slider6.position(260, 630);
    slider6.style('width', '80px');
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
    savebutton = createButton("save button");
    savebutton.position(260, 780);
    savebutton.mousePressed(for_b_save);
    slider_save_d={pt1:0,pt2:0,pt3:0,pt4:0,pt5:0};
    slider_save_b=createButton("save slider state");
    slider_save_b.position(360, 780);
    slider_save_b.mousePressed(for_slider_save);
    change_to_hand=createButton("change by hand");
    change_to_hand.position(490, 780);
    change_to_hand.mousePressed(for_change_to_hand);
    change_to_hand_state=false;
    
    //video functions
    video = createCapture(VIDEO);
    video.size(640, 480);
    hand_detection = ml5.handpose(video, modelReady);
    hand_detection.on("hand", results => {
    points_array = results;
    });
    video.hide();
    video_state=false;
    video_button = createButton("plain video");
    video_button.position(560, 580);
    video_button.mousePressed(for_vo);
     
    
}

//main draw loop
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

    
    //video functions
    if(video_state){
        image(video, 0, 0, 640, 480);
        drawpoints();
    }
    
    //creating labels
    create_all_labels();
    
    
}

//mouse pressed function
function mousePressed() {
    if(state_change==4){
        art_4_mouse_state=true;
    }
    if(state_change==3){
        var new_art_3 = new art_3();
        new_art_3.x=mouseX;
        new_art_3.y=mouseY;
        lin_a.push(new_art_3);
    }
    if(state_change==2){
    }
}

//mouse released function
function mouseReleased(){
    if(state_change==4){
        art_4_mouse_state=false;
    }
    if(state_change==3){

    }
    if(state_change==2){
        if(art_2_form.length < slider11.value()){
            num_rect=art_2_form.length;
            for(var i=0;i<slider11.value()-num_rect;i++){
                art_2_form.push(new art_2());
            }
            num_rect=art_2_form.length;
        }
        if(art_2_form.length > slider11.value()){
            num_rect=art_2_form.length;
            for(var i=0;i<num_rect-slider11.value();i++){
                art_2_form.splice(0, 1);
            }
            num_rect=art_2_form.length;
        }
    }
    if(state_change==1){
        if(p_array.length < slider9.value()){
            num_it=p_array.length;
            for(var i=0;i<slider9.value()-num_it;i++){
                p_array.push(new art_1());
            }
            num_it=p_array.length;
        }
        if(p_array.length > slider9.value()){
            num_it=p_array.length;
            for(var i=0;i<num_it-slider9.value();i++){
                p_array.splice(0, 1);
            }
            num_it=p_array.length;
        }
    }
}

// art 1 function to call inside draw loop
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

// art 2 function to call inside draw loop
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

// art 3 function to call inside draw loop
function art_3_calling(ap_3){
    if(ap_3==3){
        background(255,10);
        for(var i=0;i<lin_a.length;i++){
        var r = lin_a[i];
        r.draw();
    }
    }
        
}

// art 4 function to call inside draw loop
function art_4_calling(ap_4){
    if(ap_4==4 && art_4_mouse_state){
    draw_art.draw(mouseX,mouseY);//don't need any background with this
    }
}

// art 5 function to call inside draw loop
function art_5_calling(ap_5){
    if(ap_5==5){
        background(255, 10);
        color_circle.draw(mouseX,mouseY);
    }
}

// art 0 function to call inside draw loop
function art_0_calling(ap_0){
    if(ap_0==0){
        background(255, 255,255);
    }
}

//draw point function to draw all the hand detection points
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
            if(state_change==5 && change_to_hand_state){
                if(s_e.select_num==9){
                    s_e.draw();
                }
                if(s_e.select_num==5){
                    s_e.draw();
                }
                var common_d1 = dist(c_key_point_array[8].x,c_key_point_array[8].y,
                                    c_key_point_array[4].x,c_key_point_array[4].y);
//                console.log(common_d1);
                if(slider_save_d['pt5']==0){
                    var our_m1 = map(common_d1,13,170,15,50);
                    slider5.value(our_m1);
                }
                if(slider_save_d['pt5']==1){
                    var our_m1 = map(common_d1,13,170,0,5);
                    slider6.value(our_m1);
                }
                
                
            }
            else if(state_change==1 && change_to_hand_state){
                if(slider_save_d['pt1']==0){
                   if(s_e.select_num==9){
                        s_e.draw();
    //                    console.log(s_e.x);
                        var our_m1 = map(s_e.x,0,640,0.01,0.1);
                        slider7.value(our_m1);

                    }
                }
                else if(slider_save_d['pt1']==1){
                    if(s_e.select_num==9){
                        s_e.draw();
                        var our_m1 = map(s_e.y,0,480,3, 10);
                        slider8.value(our_m1);
                    }
                }
                else if(slider_save_d['pt1']==2){
                    if(s_e.select_num==9){
                        s_e.draw();
                        var our_m1 = dist(s_e.x,s_e.y,(640/2),(480/2));
                        var our_m2 = map(our_m1,0,(690/2),500, 1500);
                        slider9.value(our_m2);
                    }
                }
                
            }
            else if(state_change==2 && change_to_hand_state){
                
            }
            else if(state_change==3 && change_to_hand_state){
                
            }
            else if(state_change==4 && change_to_hand_state){
                
            }
            else{
                s_e.draw();
            }
        }
    }
}

//function to print "Model is working" when model starts working
function modelReady() {
  console.log("Model is working");
}

// function for button 0
function for_b0(){
    state_change = 0;
    lin_a = [];
}

// function for button 1
function for_b1(){
    state_change = 1;
    slider_save_d['pt1']=0;
}

// function for button 2
function for_b2(){
    state_change = 2;
    slider_save_d['pt2']=0;
}

// function for button 3
function for_b3(){
    state_change = 3;
    slider_save_d['pt3']=0;
}

// function for button 4
function for_b4(){
    state_change = 4;
    slider_save_d['pt4']=0;
}

// function for button 5
function for_b5(){
    state_change = 5;
    slider_save_d['pt5']=0;
}

// function for save button 
function for_b_save(){
    save(cnv, 'myCanvas.jpg');
    saveCanvas(cnv,"screenshot","png");
}

// function for video button
function for_vo(){
    video_state=!video_state;
}

// function for slider save
function for_slider_save(){
    if(state_change==1){
        slider_save_d['pt1']+=1;
    }
    else if(state_change==2){
        slider_save_d['pt2']+=1;
    }
    else if(state_change==3){
        slider_save_d['pt3']+=1;
    }
    else if(state_change==4){
        slider_save_d['pt4']+=1;
    }
    else if(state_change==5){
        slider_save_d['pt5']+=1;
    }
}

//button function for for_change_to_hand
function for_change_to_hand(){
    change_to_hand_state=!change_to_hand_state;
}

//label create function
function create_label(text1,x,y,s){
    push();
    textSize(s);
    strokeWeight(5);
    stroke(255);
    fill(0, 102, 153);
    text(text1, x, y);
    pop();
}

//creating single labels
function create_all_labels(){
    create_label("=  pattern 5 p_1",350,558,15);
    create_label("=  pattern 5 p_2",350,578,15);
    create_label("=  pattern 1 p_1",350,598,15);
    create_label("=  pattern 1 p_2",350,618,15);
    create_label("=  pattern 1 p_3",350,638,15);
    create_label("=  pattern 2 p_1",350,658,15);
    create_label("=  pattern 2 p_2",350,678,15);
    create_label("=  pattern 4 p_1",110,558,15);
    create_label("=  pattern 4 p_2",110,588,15);
    create_label("=  pattern 3 p_1",110,628,15);
    create_label("=  pattern 3 p_2",110,648,15);
    create_label("=  pattern 3 p_3",110,668,15);
    create_label("=  pattern 3 p_4",110,695,15);
    
}






