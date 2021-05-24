//variaveis grid
let cols = 6;
let rows = 6;
let cols2 = 12;
let rows2 = 12;
let conta1 = 0;
let conta2 = 0;

let width = 300;
let height = 300;

//create grids
//Cell[][] grid = new Cell[cols][rows];
let grid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
//Cell[][] grid2 = new Cell[cols2][rows2];
let grid2 = new Array(rows2).fill(0).map(() => new Array(cols2).fill(0));

let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

let myFont;
function preload() {
  myFont = loadFont("data/SpaceMono-Bold.ttf");
}

function setup() {
  let cnv = createCanvas(width, height);
  cnv.parent("canvas-container");
  frameRate(30);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(
        i * (width / 6),
        j * (height / 6),
        width / 6,
        height / 6,
        null
      );
    }
  }
}

function draw() {
  background("#ededed");

  for (let i = 0; i < cols2; i++) {
    for (let j = 0; j < rows2; j++) {
      noFill();
      stroke(211, 211, 211);
      rect(i * (width / 12), j * (height / 12), width / 12, height / 12);
    }
  }

  for (let i = 0; i < cols2; i++) {
    for (let j = 0; j < rows2; j++) {
      noFill();
      stroke(211, 211, 211);
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      noFill();

      if (grid[i][j].getletra() != "") {
        noFill();
        stroke(0);
        grid[i][j].display();
      }

      textSize(28);
      textFont(myFont);
      fill("#1f1f1f");
      text(grid[i][j].getletra(), grid[i][j].getx(), grid[i][j].gety());
    }
  }
}

function touchStarted() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (
        grid[i][j].hit(mouseX, mouseY) == true &&
        grid[i][j].getletra() == ""
      ) {
        if (alfabeto.length > 0) {
          grid[i][j].setletra(alfabeto[0]);
          alfabeto.splice(0, 1);

          document.querySelector(".letters").innerText = alfabeto.join(" ");
        }
      } else if (
        grid[i][j].hit(mouseX, mouseY) == true &&
        grid[i][j].getletra() != ""
      ) {
        alfabeto.push(grid[i][j].getletra());
        grid[i][j].setletra("");
        alfabeto.sort();
        document.querySelector(".letters").innerText = alfabeto.join(" ");

        /*
         document.getElementById("remove").remove(); 
         alfabeto.forEach(item =>letters.insertAdjacentHTML('beforeend', `<h1 id="remove">${item}</h1>`));
         */
      }
    }
  }
}

class Cell {
  // Cell Constructor
  constructor(tempX, tempY, tempW, tempH, tempL) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.l = tempL;
  }

  setletra(letra) {
    this.l = letra;
    return this.l;
  }

  getletra() {
    if (this.l == null) {
      return "";
    } else {
      return this.l;
    }
  }

  getx() {
    let a = this.x + (this.w / 2 - 8);
    return a;
  }
  gety() {
    let a = this.y + (this.h / 2 + 9);
    return a;
  }
  hit(x1, y1) {
    if (
      dist(this.x + width / 6 / 2, this.y + height / 6 / 2, x1, y1) <
      width / 6 / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    rect(this.x, this.y, this.w, this.h);

    rect(this.x, this.y, this.w / 2, this.h / 2);
    rect(this.x + this.w / 2, this.y, this.w / 2, this.h / 2);

    rect(this.x, this.y + this.h / 2, this.w / 2, this.h / 2);
    rect(this.x + this.w / 2, this.y, this.w / 2, this.h / 2);
  }
}
document.querySelector(".letters").innerText = alfabeto.join(" ");
