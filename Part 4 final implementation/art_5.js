//colourful doted background

//constructor function to draw the grid of circles
function art_5(){
    
    this.size_c = slider5.value();
    this.color_trip = round(slider6.value());
    this.color_trip_array = [];
    this.num_c = round(width/this.size_c)*round(height/this.size_c);

    //draw function to draw the entire grid
    this.draw = function(m_x1,m_y1){
        this.size_c = slider5.value();
        this.color_trip = round(slider6.value());
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

//constructor function for one single circle
function art_5_mini(){
    this.circle_number = 0;
    this.x=0;
    this.y=0;
    this.select_number = function(a){
        this.circle_number = a;
    }
    
    //function to draw single circle
    this.single_circle = function(size_c,fill_c){
        
        push();
        noStroke();
        fill(fill_c);
        ellipse(this.x,this.y,size_c,size_c);
        pop();
    }
    
    //function to calculate distance
    this.cal_dis = function(m_x,m_y){
        var d =dist(this.x,this.y,m_x,m_y);
        return d;
    }
}