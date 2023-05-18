function setup(){
    createCanvas(500,500);
    background('red');
}

function draw(){
    
}

class Pipe {
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    display(){
        fill(this.color);
        rect(x, y, width, height);
    }
}