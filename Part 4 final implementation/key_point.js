//function to create single hand detection point

function key_point(x,y,s_n){
    this.x=x;
    this.y=y;
    this.select_num=s_n;
    
    //draw function to draw a single point
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
