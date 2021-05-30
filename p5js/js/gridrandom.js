//variaveis grid
let cols = 6;
let rows = 6;
let cols2 = 12;
let rows2 = 12;
let conta1 = 0;
let conta2 = 0;

let width = 300;
let height = 300;

let rectSize = width / 6;

//create grids
let grid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

let grid2 = new Array(rows2).fill(0).map(() => new Array(cols2).fill(0));

<<<<<<< HEAD
let alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
=======
let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
>>>>>>> b05a2f792e8c64c4a051aea576468a3d34f12a95

let myFont;
function preload() {
  myFont = loadFont("data/SpaceMono-Bold.ttf");
}

function setup() {
  let cnv = createCanvas(width, height);
  cnv.parent("canvas-container");

  frameRate(30);

  let linha = 1;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let a = int(random(0, 2));
      let del = int(random(alfabeto.length));
      if ((a == 0 && conta1 <= 9) || alfabeto.length == 0) {
        grid[i][j] = new Cell(
          i * rectSize,
          j * rectSize,
          rectSize,
          rectSize,
          null
        );
        //prletln(linha);
        linha++;
        if (conta1 <= 9) {
          conta1++;
        }
      } else {
        grid[i][j] = new Cell(
          i * rectSize,
          j * rectSize,
          rectSize,
          rectSize,
          alfabeto[del]
        );
        //prletln(alfabeto[del]);
        linha++;
        alfabeto.splice(del, 1);
        //alfabeto.remove(del);
      }
    }
  }
  for (let i = 0; i < cols2; i++) {
    for (let j = 0; j < rows2; j++) {
      grid2[i][j] = new Cell(
        i * (width / 12),
        j * (height / 12),
        width / 12,
        height / 12,
        null
      );
    }
  }
}

function contains(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return true;
    }
  }
  return false;
}
function draw() {
  for (let i = 0; i < cols2; i++) {
    for (let j = 0; j < rows2; j++) {
      noFill();
      stroke(211, 211, 211);
      grid2[i][j].display();
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      noStroke();
      textSize(32);
      textFont(myFont);
      fill(0, 0, 0);
      text(grid[i][j].getletra(), grid[i][j].getx(), grid[i][j].gety());

      if (grid[i][j].getletra() != "") {
        noFill();
        stroke(0);
        grid[i][j].display();
      }
    }
  }
}

function saveKey() {
  saveCanvas("myCanvas", "png");
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

  getletra() {
    if (this.l == null) {
      return "";
    } else {
      return this.l;
    }
  }

  getx() {
    let a = this.x + (this.w / 2 - 12);
    return a;
  }

  gety() {
    let a = this.y + (this.h / 2 + 12);
    return a;
  }

  display() {
    noFill();
    rect(this.x, this.y, this.w, this.h);

    rect(this.x, this.y, this.w / 2, this.h / 2);
    rect(this.x + this.w / 2, this.y, this.w / 2, this.h / 2);
    rect(this.x, this.y + this.h / 2, this.w / 2, this.h / 2);
    rect(this.x + this.w / 2, this.y, this.w / 2, this.h / 2);
  }
}
