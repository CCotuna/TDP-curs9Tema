let addButton;
let randomButton;
let sortButton;
let pipes = [];

function setup(){
    createCanvas(500,500);
    background('purple');

    addButton = createButton('Add');
    addButton.position(20,20);
    
    randomButton = createButton('Random');
    randomButton.position(20,50);
    
    sortButton = createButton('Sort Pipes');
    sortButton.position(20,80);
    addButton.mousePressed(addPipes);
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
        rect(this.x, this.y, this.width, this.height);
    }
}

function addPipes(){
    let x = 50;
    const pipe = new Pipe(x + (pipes.length * 20), 50, 10, 50, '#D4ADFC');
    pipes.push(pipe);
    pipe.display();   
}

function displayPipe(){
for(let i = 0; i<pipes.length; i++){
    pipes[i].display();
}
}