//canvas drawing pen

//constructor function to draw the drawing pen
function art_4(){
    this.el_size = slider1.value();
    this.colorPicker;
    
    this.setup = function(){
        this.colorPicker = createColorPicker('#ff0000');
        this.colorPicker.position(20, 640);
    }
    
    //draw function which implements the pen
    this.draw = function(x,y){
        this.el_size = slider1.value();
        push();
        noStroke();
        fill(this.colorPicker.color()); 
        ellipse(x,y,this.el_size,this.el_size);
        pop();
    }
}
