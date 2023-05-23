let addButton;
let randomButton;
let sortButton;
let pipes = [];
let inputValue;
let clearCanvas;

function setup() {
  createCanvas(1000, 600);
  background("purple");

  addButton = createButton("Add");
  addButton.position(220, 20);
  

  randomButton = createButton("Random");
  randomButton.position(270, 20);

  sortButton = createButton("Sort Pipes");
  sortButton.position(350, 20);


  inputValue = createInput();
  inputValue.position(30, 20);

  clearCanvas = createButton('Clear Canvas');
  clearCanvas.position(440, 20);
  

  addButton.mousePressed(addPipes);
  randomButton.mousePressed(randomPipes);
  sortButton.mousePressed(sortPipes);
  clearCanvas.mousePressed(clearPipes);
}

function draw() {
  displayPipe();
}

class Pipe {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y - this.height, this.width, this.height);
  }
}

let pipeRow = 0;
let pipeX = 50;

function addPipes() {
  let numberOfPipes = inputValue.value();
  

  for (let i = 0; i < numberOfPipes; i++) {
    let randomHeight = Math.floor(random(5, 50));
    const pipeY = 100 + pipeRow;
    const pipe = new Pipe(pipeX, pipeY, 10, randomHeight, "#D4ADFC");
    pipes.push(pipe);

    if (pipeX + 30 <= width - 50) {
      pipeX += 20;
    } else {
      pipeX = 50;
      pipeRow += 80;
    }
  }
}

function randomPipes() {
  let numberOfPipes = Math.floor(random(1, 200));

  for (let i = 0; i < numberOfPipes; i++) {
    let randomHeight = Math.floor(random(5, 65));
    const pipeY = 100 + pipeRow;
    const pipe = new Pipe(pipeX, pipeY, 10, randomHeight, "#D4ADFC");
    pipes.push(pipe);

    if (pipeX + 30 <= width - 50) {
      pipeX += 20;
    } else {
      pipeX = 50;
      pipeRow += 80;
    }
  }
}

function displayPipe() {
  for (let i = 0; i < pipes.length; i++) {
    pipes[i].display();
  }
}

function clearPipes(){
    clear();
    pipes.splice(0, pipes.length);
    background('purple');
    pipeX = 50;
    pipeRow = 0;
}

function sortPipes() {
    
  pipes.sort((a, b) => a.height - b.height);

  clear();
  background('purple');

  let pipeRow = 0;
  let pipeX = 50;

  for (let i = 0; i < pipes.length; i++) {
    pipes[i].x = pipeX;
    pipes[i].y = 100 + pipeRow;
    pipes[i].display();

    if (pipeX + 30 <= width - 50) {
      pipeX += 20;
    } else {
      pipeX = 50;
      pipeRow += 100;
    }
  }
    console.log('1');
    console.log(pipes);
  }