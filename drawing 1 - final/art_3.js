//rotating line pattern

function art_3(){
    this.x=0;
    this.y=0;
    this.number_of_l = slider4.value();
    this.line_gap = slider2.value();
    this.line_dis = 10;
    this.line_h=50;
    this.strokeWeight = slider3.value();
    this.line_color = colorPicker1.color();
    
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
    this.draw = function(){
        
        push();
        for(var i=0;i<this.number_of_l;i++){
            
            single_line(this.x,this.y,this.line_h+(i*this.line_gap),
                        this.number_of_l/((i+1)+(i*this.line_gap)),
                        this.line_dis+(i*this.line_gap),
                        this.strokeWeight,this.line_color);
        }
        pop();
        
    }
}