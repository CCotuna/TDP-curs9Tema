let addButton;
let randomButton;
let sortButton;
let pipes = [];
let inputValue;

function setup() {
  createCanvas(1000, 600);
  background("purple");

  addButton = createButton("Add");
  addButton.position(220, 20);

  randomButton = createButton("Random");
  randomButton.position(270, 20);
  randomButton.mousePressed(randomPipes);

  sortButton = createButton("Sort Pipes");
  sortButton.position(350, 20);
  addButton.mousePressed(addPipes);

  inputValue = createInput();
  inputValue.position(30, 20);
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
    rect(this.x, this.y, this.width, this.height);
  }
}

let pipeRow = 0;
let pipeX = 50;

function addPipes() {
  let numberOfPipes = inputValue.value();

  for (let i = 0; i < numberOfPipes; i++) {
    const pipeY = 50 + pipeRow;
    const pipe = new Pipe(pipeX, pipeY, 10, 50, "#D4ADFC");
    pipes.push(pipe);

    if (pipeX + 30 <= width - 50) {
      pipeX += 20;
    } else {
      pipeX = 50;
      pipeRow += 70;
    }
  }
}

function randomPipes() {
  let numberOfPipes = Math.floor(random(1, 200));

  for (let i = 0; i < numberOfPipes; i++) {
    const pipeY = 50 + pipeRow;
    const pipe = new Pipe(pipeX, pipeY, 10, 50, "#D4ADFC");
    pipes.push(pipe);

    if (pipeX + 30 <= width - 50) {
      pipeX += 20;
    } else {
      pipeX = 50;
      pipeRow += 70;
    }
  }

  pipes.clear();
}

function displayPipe() {
  for (let i = 0; i < pipes.length; i++) {
    pipes[i].display();
  }
}
