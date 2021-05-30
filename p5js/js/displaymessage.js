//inserir a mensagem
let texto = "Your Message";
let tamanho = texto.length;
let list = texto.split(" ");

//círculos a iniciar em 1
let dots = 1;

//booleans letra inicial
let ativaA = false;
let ativaB = false;
let ativaC = false;
let ativaD = false;
let ativaE = false;
let ativaF = false;
let ativaG = false;
let ativaH = false;
let ativaI = false;
let ativaJ = false;
let ativaK = false;
let ativaL = false;
let ativaM = false;
let ativaN = false;
let ativaO = false;
let ativaP = false;
let ativaQ = false;
let ativaR = false;
let ativaS = false;
let ativaT = false;
let ativaU = false;
let ativaV = false;
let ativaW = false;
let ativaX = false;
let ativaY = false;
let ativaZ = false;

let a = "a";let A = "A";
let b = "b";let B = "B";
let c = "c";let C = "C";
let d = "d";let D = "D";
let e = "e";let E = "E";
let f = "f";let F = "F";
let g = "g";let G = "G";
let h = "h";let H = "H";
let i = "i";let I = "I";
let j = "j";let J = "J";
let k = "k";let K = "K";
let l = "l";let L = "L";
let m = "m";let M = "M";
let n = "n";let N = "N";
let o = "o";let O = "O";
let p = "p";let P = "P";
let q = "q";let Q = "Q";
let r = "r";let R = "R";
let s = "s";let S = "S";
let t = "t";let T = "T";
let u = "u";let U = "U";
let v = "v";let V = "V";
let w = "w";let W = "W";
let x = "x";let X = "X";
let y = "y";let Y = "Y";
let z = "z";let Z = "Z";

//variáveis grid principal
let larg = 216;
let alt = 216;
let cols = 6;
let rows = 6;

//contador de palavras consoante o nr de letras iniciais
let letrai = list.length;

//criação do array para disposição da letra inicial de cada palavra
let myArr = new Array(letrai).fill(0).map(() => new Array(rows).fill(0).map(() => new Array(cols).fill(0)));

/*---------------------------------------------------------------------------------------------------------------------------*/

//variaveis grid 12x12
let cols2 = 12;
let rows2 = 12;

//variaveis grid colocação círculos
let cols3 = 36;
let rows3 = 36;
let conta1 = 0;
let conta2 = 0;

//create circle
let circle;

//criação do array para disposição das grids para cada palavra
let grid = new Array(letrai).fill(0).map(() => new Array(rows).fill(0).map(() => new Array(cols).fill(0)));

//string com o alfabeto para dispor na chave
let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

function setup() {
  let canvas = createCanvas(500, 1000);
  canvas.parent("encrypted-message");

  //inicialização chave
  for (let letra = 0; letra < letrai; letra++) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[letra][i][j] = new Cell(i * (larg / rows), j * (alt / cols), larg / rows, alt / cols, null, 0);
      }
    }
  }
  //função que incializa a primeira letra da palavra
  primeira();

  //ciclo que percorre o nr de círculos
  for (let i = 1; i < tamanho; i++) {
    dots += i;
  }

  //criação array disposição de círculos
  circle = new Array(dots);
}

function draw() {
  for (let letra = 0; letra < letrai; letra++) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        //myArr[letra][i][j].display();
      }
    }
  }
  //função que desenha a primeira letra da palavra
  desenhaPrimeira();

  //desenha chave
  for (let letra = 0; letra < letrai; letra++) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        noFill();
        textSize(28);
        fill(0, 102, 153);
        // text(
        //   grid[letra][i][j].getletra(),
        //   grid[letra][i][j].getx(),
        //   grid[letra][i][j].gety()
        // );
        
        //variáveis para desenho dos círculos
        let raio = larg / 36;
      
        let control = 0;
        let line = 0;
        //variável quadrantes
        let avancaquad = larg / 12;

        //desenha círculos, avança no quadrante se a letra repetir
        for (let b = 0; b < list[letra].length; b++) {
          //conta quantas ocorrências de cada letra existem na palavra
          count = list[letra].split(list[letra].substring(b, b + 1)).length -1;

          if (list[letra].substring(b, b + 1).toUpperCase() == grid[letra][i][j].getletra()) {
            if (grid[letra][i][j].getquadrante() == 0) {
           
              for (let h = 1; h < b + 1; h++) {
                if (control < 3) {
                  circle = new Circle(grid[letra][i][j].getx() + control * raio - larg / 65, grid[letra][i][j].gety() + line * raio - alt / 8, raio);
                  circle.display();
                  control++;
                } else {
                  control = 0;
                  line++;
                  circle = new Circle(grid[letra][i][j].getx() + control * raio - larg / 65, grid[letra][i][j].gety() + line * raio - alt / 8, raio);
                  circle.display();
                  control++;
                }
              }
              
              control = 0;
              linha = 0;
              count--;
              //se a letra ocorrer mais do que uma vez, o posicionamento dos círculos avança no quadrante
              if(count>0){
                grid[letra][i][j].setquadrante();
              }
              
            } else if (grid[letra][i][j].getquadrante() == 1) {
          
              for (let h = 1; h < b + 1; h++) {
                if (control < 3) {
                  circle = new Circle(grid[letra][i][j].getx() + avancaquad + control * raio - larg / 65, grid[letra][i][j].gety() + line * raio - alt / 8, raio);
                  circle.display();
                  control++;
                } else {
                  control = 0;
                  line++;
                  circle = new Circle(grid[letra][i][j].getx() + avancaquad + control * raio - larg / 65, grid[letra][i][j].gety() + line * raio - alt / 8, raio);
                  circle.display();
                  control++;
                }
              }
              control = 0;
              linha = 0;
              count--;
              //se a letra ocorrer mais do que uma vez, o posicionamento dos círculos avança no quadrante
              if(count>0){
                grid[letra][i][j].setquadrante();
              }

            } else if (grid[letra][i][j].getquadrante() == 2) {
         
              for (let h = 1; h < b + 1; h++) {
                if (control < 3) {
                  circle = new Circle(grid[letra][i][j].getx() + avancaquad + control * raio - larg / 65, grid[letra][i][j].gety() + avancaquad + line * raio - alt / 8, raio);
                  circle.display();
                  control++;
                } else {
                  control = 0;
                  line++;
                  circle = new Circle(grid[letra][i][j].getx() + avancaquad + control * raio - larg / 65, grid[letra][i][j].gety() + avancaquad + line * raio - alt / 8, raio);
                  circle.display();
                  control++;
                }
              }
              control = 0;
              linha = 0;
              count--;
              //se a letra ocorrer mais do que uma vez, o posicionamento dos círculos avança no quadrante
              if(count>0){
                grid[letra][i][j].setquadrante();
              }
              
            } else if (grid[letra][i][j].getquadrante() == 3) {
              for (let h = 1; h < b + 1; h++) {
                if (control < 3) {
                  circle = new Circle(grid[letra][i][j].getx() + control * raio - larg / 65, grid[letra][i][j].gety() + avancaquad + line * raio - alt / 8, raio);
                  circle.display();
                  control++;
                } else {
                  control = 0;
                  line++;
                  circle = new Circle(grid[letra][i][j].getx()+ control * raio - larg / 65, grid[letra][i][j].gety() + avancaquad + line * raio - alt / 8, raio);
                  circle.display();
                  control++;
                }
              }
              control = 0;
              linha = 0;
              count--;
              //se a letra ocorrer mais do que uma vez, o posicionamento dos círculos avança no quadrante
              if(count>0){
                grid[letra][i][j].setquadrante();
              }
            }
          }
        }
      }
    }
  }
}


class Grelha {
  // Grelha Constructor
  constructor(tempX, tempY, tempW, tempH, tempL) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.l = tempL;
  }

  display() {
    noFill();
    rect(this.x, this.y, this.w, this.h);
  }

  getl() {
    let letra = this.l;
    return letra;
  }
}

class Cell {
  // Cell Constructor
  constructor(tempX, tempY, tempW, tempH, tempL, quadrante) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.l = tempL;
    this.q = quadrante;
  }

  getquadrante() {
    return this.q;
  }

  setquadrante() {
    this.q = this.q + 1;
    return this.q;
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
    stroke(0);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Circle {
  // Cell Constructor
  constructor(tempX, tempY, tempW) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
  }

  display() {
    let c = color(234, 105, 33);
    noStroke();
    fill(c);
    ellipse(this.x, this.y, this.w);
  }
}

//inicialização do createGraphics para desenho das letras iniciais de cada palavra, colocação das letras nas respetivas posições da chave genérica
function primeira() {
  pgA = createGraphics(larg, alt);
  pgB = createGraphics(larg, alt);
  pgC = createGraphics(larg, alt);
  pgD = createGraphics(larg, alt);
  pgE = createGraphics(larg, alt);
  pgF = createGraphics(larg, alt);
  pgG = createGraphics(larg, alt);
  pgH = createGraphics(larg, alt);
  pgI = createGraphics(larg, alt);
  pgJ = createGraphics(larg, alt);
  pgK = createGraphics(larg, alt);
  pgL = createGraphics(larg, alt);
  pgM = createGraphics(larg, alt);
  pgN = createGraphics(larg, alt);
  pgO = createGraphics(larg, alt);
  pgP = createGraphics(larg, alt);
  pgQ = createGraphics(larg, alt);
  pgR = createGraphics(larg, alt);
  pgS = createGraphics(larg, alt);
  pgT = createGraphics(larg, alt);
  pgU = createGraphics(larg, alt);
  pgV = createGraphics(larg, alt);
  pgW = createGraphics(larg, alt);
  pgX = createGraphics(larg, alt);
  pgY = createGraphics(larg, alt);
  pgZ = createGraphics(larg, alt);

  let conta = 0;
  let avanca = 0;
  let linha = 0;

  for (let letra = 0; letra < letrai; letra++) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (conta < 2) {
          myArr[letra][i][j] = new Grelha((larg + larg / cols) * conta + i * (larg / cols), linha + j * (alt / rows), larg / cols, alt / rows,
            list[letra].substring(0, 1)
          );

          //chave genérica
          grid[letra][0][0] = new Cell(0 * (larg / rows) + ((larg + larg / cols) * conta), linha + 0 * (alt / cols), larg / rows, alt / cols, alfabeto[2], 0);
          grid[letra][3][0] = new Cell(3 * (larg / rows) + ((larg + larg / cols) * conta), linha + 0 * (alt / cols), larg / rows, alt / cols, alfabeto[7], 0);
          grid[letra][4][0] = new Cell(4 * (larg / rows) + ((larg + larg / cols) * conta), linha + 0 * (alt / cols), larg / rows, alt / cols, alfabeto[16], 0);
          grid[letra][5][0] = new Cell(5 * (larg / rows) + ((larg + larg / cols) * conta), linha + 0 * (alt / cols), larg / rows, alt / cols, alfabeto[23], 0);

          grid[letra][1][1] = new Cell(1 * (larg / rows) + ((larg + larg / cols) * conta), linha + 1 * (alt / cols), larg / rows, alt / cols, alfabeto[20], 0);
          grid[letra][3][1] = new Cell(3 * (larg / rows) + ((larg + larg / cols) * conta), linha + 1 * (alt / cols), larg / rows, alt / cols, alfabeto[4], 0);
          grid[letra][4][1] = new Cell(4 * (larg / rows) + ((larg + larg / cols) * conta), linha + 1 * (alt / cols), larg / rows, alt / cols, alfabeto[22], 0);
          grid[letra][5][1] = new Cell(5 * (larg / rows) + ((larg + larg / cols) * conta), linha + 1 * (alt / cols), larg / rows, alt / cols, alfabeto[9], 0);

          grid[letra][1][2] = new Cell(1 * (larg / rows) + ((larg + larg / cols) * conta), linha + 2 * (alt / cols), larg / rows, alt / cols, alfabeto[14], 0);
          grid[letra][2][2] = new Cell(2 * (larg / rows) + ((larg + larg / cols) * conta), linha + 2 * (alt / cols), larg / rows, alt / cols, alfabeto[19], 0);
          grid[letra][4][2] = new Cell(4 * (larg / rows) + ((larg + larg / cols) * conta), linha + 2 * (alt / cols), larg / rows, alt / cols, alfabeto[24], 0);
          grid[letra][5][2] = new Cell(5 * (larg / rows) + ((larg + larg / cols) * conta), linha + 2 * (alt / cols), larg / rows, alt / cols, alfabeto[6], 0);

          grid[letra][0][3] = new Cell(0 * (larg / rows) + ((larg + larg / cols) * conta), linha + 3 * (alt / cols), larg / rows, alt / cols, alfabeto[18], 0);
          grid[letra][1][3] = new Cell(1 * (larg / rows) + ((larg + larg / cols) * conta), linha + 3 * (alt / cols), larg / rows, alt / cols, alfabeto[25], 0);
          grid[letra][3][3] = new Cell(3 * (larg / rows) + ((larg + larg / cols) * conta), linha + 3 * (alt / cols), larg / rows, alt / cols, alfabeto[21], 0);
          grid[letra][4][3] = new Cell(4 * (larg / rows) + ((larg + larg / cols) * conta), linha + 3 * (alt / cols), larg / rows, alt / cols, alfabeto[3], 0);

          grid[letra][0][4] = new Cell(0 * (larg / rows) + ((larg + larg / cols) * conta), linha + 4 * (alt / cols), larg / rows, alt / cols, alfabeto[8], 0);
          grid[letra][2][4] = new Cell(2 * (larg / rows) + ((larg + larg / cols) * conta), linha + 4 * (alt / cols), larg / rows, alt / cols, alfabeto[17], 0);
          grid[letra][4][4] = new Cell(4 * (larg / rows) + ((larg + larg / cols) * conta), linha + 4 * (alt / cols), larg / rows, alt / cols, alfabeto[5], 0);
          grid[letra][5][4] = new Cell(5 * (larg / rows) + ((larg + larg / cols) * conta), linha + 4 * (alt / cols), larg / rows, alt / cols, alfabeto[10], 0);

          grid[letra][0][5] = new Cell(0 * (larg / rows) + ((larg + larg / cols) * conta), linha + 5 * (alt / cols), larg / rows, alt / cols, alfabeto[13], 0);
          grid[letra][1][5] = new Cell(1 * (larg / rows) + ((larg + larg / cols) * conta), linha + 5 * (alt / cols), larg / rows, alt / cols, alfabeto[11], 0);
          grid[letra][2][5] = new Cell(2 * (larg / rows) + ((larg + larg / cols) * conta), linha + 5 * (alt / cols), larg / rows, alt / cols, alfabeto[12], 0);
          grid[letra][3][5] = new Cell(3 * (larg / rows) + ((larg + larg / cols) * conta), linha + 5 * (alt / cols), larg / rows, alt / cols, alfabeto[1], 0);
          grid[letra][4][5] = new Cell(4 * (larg / rows) + ((larg + larg / cols) * conta), linha + 5 * (alt / cols), larg / rows, alt / cols, alfabeto[0], 0);
          grid[letra][5][5] = new Cell(5 * (larg / rows) + ((larg + larg / cols) * conta), linha + 5 * (alt / cols), larg / rows, alt / cols, alfabeto[15], 0);
        }

        if (conta == 2) {
          //variáveis para colocar as grelhas base no local das respetivas palavras 
          conta = 0;
          avanca = 0;

          avanca++;
          linha += (larg + larg / cols) * avanca;

          //criação da grelha base e ir buscar a primeira letra da palavra
          myArr[letra][i][j] = new Grelha(
            (larg + larg / cols) * conta + i * (larg / cols),
            linha + j * (alt / rows),
            larg / cols,
            alt / rows,
            list[letra].substring(0, 1)
          );

        }
      }
    }
    conta++;
  }
}

//desenho das letras iniciais de cada palavra
function desenhaPrimeira() {
  let counter = 0;
  let linha = 0;

  for (let letra = 0; letra < letrai; letra++) {
    if (myArr[letra][0][0].getl() == a || myArr[letra][0][0].getl() == A) {
      ativaA = true;
    }
    if (myArr[letra][0][0].getl() == b || myArr[letra][0][0].getl() == B) {
      ativaB = true;
    }
    if (myArr[letra][0][0].getl() == c || myArr[letra][0][0].getl() == C) {
      ativaC = true;
    }
    if (myArr[letra][0][0].getl() == d || myArr[letra][0][0].getl() == D) {
      ativaD = true;
    }
    if (myArr[letra][0][0].getl() == e || myArr[letra][0][0].getl() == E) {
      ativaE = true;
    }
    if (myArr[letra][0][0].getl() == f || myArr[letra][0][0].getl() == F) {
      ativaF = true;
    }
    if (myArr[letra][0][0].getl() == g || myArr[letra][0][0].getl() == G) {
      ativaG = true;
    }
    if (myArr[letra][0][0].getl() == h || myArr[letra][0][0].getl() == H) {
      ativaH = true;
    }
    if (myArr[letra][0][0].getl() == i || myArr[letra][0][0].getl() == I) {
      ativaI = true;
    }
    if (myArr[letra][0][0].getl() == j || myArr[letra][0][0].getl() == J) {
      ativaJ = true;
    }
    if (myArr[letra][0][0].getl() == k || myArr[letra][0][0].getl() == K) {
      ativaK = true;
    }
    if (myArr[letra][0][0].getl() == l || myArr[letra][0][0].getl() == L) {
      ativaL = true;
    }
    if (myArr[letra][0][0].getl() == m || myArr[letra][0][0].getl() == M) {
      ativaM = true;
    }
    if (myArr[letra][0][0].getl() == n || myArr[letra][0][0].getl() == N) {
      ativaN = true;
    }
    if (myArr[letra][0][0].getl() == o || myArr[letra][0][0].getl() == O) {
      ativaO = true;
    }
    if (myArr[letra][0][0].getl() == p || myArr[letra][0][0].getl() == P) {
      ativaP = true;
    }
    if (myArr[letra][0][0].getl() == q || myArr[letra][0][0].getl() == Q) {
      ativaQ = true;
    }
    if (myArr[letra][0][0].getl() == r || myArr[letra][0][0].getl() == R) {
      ativaR = true;
    }
    if (myArr[letra][0][0].getl() == s || myArr[letra][0][0].getl() == S) {
      ativaS = true;
    }
    if (myArr[letra][0][0].getl() == t || myArr[letra][0][0].getl() == T) {
      ativaT = true;
    }
    if (myArr[letra][0][0].getl() == u || myArr[letra][0][0].getl() == U) {
      ativaU = true;
    }
    if (myArr[letra][0][0].getl() == v || myArr[letra][0][0].getl() == V) {
      ativaV = true;
    }
    if (myArr[letra][0][0].getl() == w || myArr[letra][0][0].getl() == W) {
      ativaW = true;
    }
    if (myArr[letra][0][0].getl() == x || myArr[letra][0][0].getl() == X) {
      ativaX = true;
    }
    if (myArr[letra][0][0].getl() == y || myArr[letra][0][0].getl() == Y) {
      ativaY = true;
    }
    if (myArr[letra][0][0].getl() == z || myArr[letra][0][0].getl() == Z) {
      ativaZ = true;
    }
   //====================================================================================================A
    if (ativaA == true) {
      pgA.beginShape();
      pgA.rectMode(CORNER);
      pgA.noStroke();
      //Cantos
      pgA.fill(200);
      //superior esquerdo
      pgA.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgA.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgA.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgA.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgA.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgA.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgA.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgA.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgA.fill(0);
      pgA.rect((larg / cols) * 2, alt / rows, larg / cols, alt / rows);
      pgA.rect((larg / cols) * 3, alt / rows, larg / cols, alt / rows);
      pgA.rect((larg / cols) * 4, alt / rows, larg / cols, alt / rows);
      pgA.rect((larg / cols) * 5, alt / rows, larg / cols, alt / rows);
      pgA.rect((larg / cols) * 4, (alt / rows) * 3, larg / cols, alt / rows);
      pgA.rect((larg / cols) * 4, (alt / rows) * 4, larg / cols, alt / rows);
      pgA.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgA.endShape();

      if (counter < 2) {
        image(pgA, counter * (larg + larg / cols), linha);
        counter++;
      }
      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaA = false;
    }
    //====================================================================================================B
    if (ativaB == true) {
      pgB.beginShape();
      pgB.rectMode(CORNER);
      pgB.noStroke();
      //Cantos
      pgB.fill(200);
      //superior esquerdo
      pgB.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgB.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgB.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgB.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgB.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgB.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgB.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgB.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgB.fill(0);
      pgB.rect(larg / cols, (alt / rows) * 0, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 5, alt / rows, larg / cols, alt / rows / 2);
      pgB.rect(larg / cols, (alt / rows) * 2, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 2, (alt / rows) * 2, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 3, (alt / rows) * 2, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 4, (alt / rows) * 2, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 2, (alt / rows) * 4, larg / cols, alt / rows);
      pgB.rect((larg / cols) * 3, (alt / rows) * 4, larg / cols, alt / rows);
      pgB.rect(
        (larg / cols) * 4 + larg / cols / 2,
        (larg / rows) * 3 + larg / rows / 2,
        larg / cols,
        alt / rows / 2
      );
      pgB.rect(
        (larg / cols) * 4 + larg / cols / 2,
        (alt / rows) * 4,
        larg / cols,
        alt / rows
      );
      pgB.rect(
        (larg / cols) * 4 + larg / cols / 2,
        (alt / rows) * 5,
        larg / cols,
        alt / rows
      );
      pgB.endShape();

      if (counter < 2) {
        image(pgB, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaB = false;
    }
    //====================================================================================================C
    if (ativaC == true) {
      pgC.beginShape();
      pgC.rectMode(CORNER);
      pgC.noStroke();
      //Cantos
      pgC.fill(200);
      //superior esquerdo
      pgC.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgC.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgC.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgC.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgC.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgC.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgC.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgC.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgC.fill(0);
      pgC.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgC.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgC.rect((larg / cols) * 2, alt / rows, larg / cols, alt / rows);
      pgC.rect((larg / cols) * 3, alt / rows, larg / cols, alt / rows);
      pgC.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgC.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgC.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgC.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgC.endShape();

      if (counter < 2) {
        image(pgC, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaC = false;
    }
    //====================================================================================================D
    if (ativaD == true) {
      pgD.beginShape();
      pgD.rectMode(CORNER);
      pgD.noStroke();
      //Cantos
      pgD.fill(200);
      //superior esquerdo
      pgD.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgD.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgD.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgD.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgD.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgD.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgD.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgD.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgD.fill(0);
      pgD.rect((larg / cols) * 4, alt / rows, larg / cols, alt / rows);
      pgD.rect((larg / cols) * 4, (alt / rows) * 2, larg / cols, alt / rows);
      pgD.rect((larg / cols) * 4, (alt / rows) * 3, larg / cols, alt / rows);
      pgD.rect(
        (larg / cols) * 4,
        (alt / rows) * 4,
        larg / cols,
        alt / rows / 2
      );
      pgD.rect(larg / cols, (alt / rows) * 5, larg / cols, alt / rows);
      pgD.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgD.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgD.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgD.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgD.endShape();

      if (counter < 2) {
        image(pgD, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaD = false;
    }
    //====================================================================================================E
    if (ativaE == true) {
      pgE.beginShape();
      pgE.rectMode(CORNER);
      pgE.noStroke();
      //Cantos
      pgE.fill(200);
      //superior esquerdo
      pgE.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgE.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgE.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgE.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgE.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgE.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgE.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgE.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgE.fill(0);
      pgE.rect(larg / cols, (alt / rows) * 0, larg / cols, alt / rows);
      pgE.rect(larg / cols, (alt / rows) * 2, larg / cols, alt / rows);
      pgE.rect((larg / cols) * 2, (alt / rows) * 2, larg / cols, alt / rows);
      pgE.rect((larg / cols) * 3, (alt / rows) * 2, larg / cols, alt / rows);
      pgE.rect(larg / cols, (alt / rows) * 5, larg / cols, alt / rows);
      pgE.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgE.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgE.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgE.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgE.endShape();

      if (counter < 2) {
        image(pgE, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaE = false;
    }
    //====================================================================================================F
    if (ativaF == true) {
      pgF.beginShape();
      pgF.rectMode(CORNER);
      pgF.noStroke();
      //Cantos
      pgF.fill(200);
      //superior esquerdo
      pgF.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgF.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgF.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgF.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgF.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgF.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgF.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgF.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgF.fill(0);
      pgF.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgF.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgF.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgF.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgF.rect(larg / cols, (alt / rows) * 2, larg / cols, alt / rows);
      pgF.rect((larg / cols) * 2, (alt / rows) * 2, larg / cols, alt / rows);
      pgF.rect((larg / cols) * 3, (alt / rows) * 2, larg / cols, alt / rows);
      pgF.endShape();

      if (counter < 2) {
        image(pgF, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaF = false;
    }
    //====================================================================================================G
    if (ativaG == true) {
      pgG.beginShape();
      pgG.rectMode(CORNER);
      pgG.noStroke();
      //Cantos
      pgG.fill(200);
      //superior esquerdo
      pgG.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgG.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgG.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgG.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgG.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgG.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgG.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgG.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgG.fill(0);
      pgG.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 3, (alt / rows) * 2, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 4,(alt / rows) * 2,larg / cols / 2,alt / rows);
      pgG.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 5,(alt / rows) * 4,larg / cols,alt / rows / 2);
      pgG.rect(larg / cols, (alt / rows) * 5, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgG.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgG.endShape();

      if (counter < 2) {
        image(pgG, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaG = false;
    }
    //====================================================================================================H
    if (ativaH == true) {
      pgH.beginShape();
      pgH.rectMode(CORNER);
      pgH.noStroke();
      //Cantos
      pgH.fill(200);
      //superior esquerdo
      pgH.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgH.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgH.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgH.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgH.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgH.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgH.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgH.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgH.fill(0);
      pgH.rect(larg / cols, (alt / rows) * 3, larg / cols, alt / rows);
      pgH.rect((larg / cols) * 2, (alt / rows) * 3, larg / cols, alt / rows);
      pgH.rect((larg / cols) * 3, (alt / rows) * 3, larg / cols, alt / rows);
      pgH.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgH.rect((larg / cols) * 5, alt / rows, larg / cols, alt / rows);
      pgH.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgH.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgH.rect((larg / cols) * 5, (alt / rows) * 4, larg / cols, alt / rows);
      pgH.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgH.endShape();

      if (counter < 2) {
        image(pgH, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaH = false;
    }
    //====================================================================================================I
    if (ativaI == true) {
      pgI.beginShape();
      pgI.rectMode(CORNER);
      pgI.noStroke();
      //Cantos
      pgI.fill(200);
      //superior esquerdo
      pgI.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgI.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgI.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgI.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgI.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgI.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgI.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgI.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgI.fill(0);
      pgI.rect(larg / cols, (alt / rows) * 0, larg / cols, alt / rows);
      pgI.rect(larg / cols, alt / rows, larg / cols, alt / rows);
      pgI.rect(larg / cols, (alt / rows) * 2, larg / cols, alt / rows);
      pgI.rect(larg / cols, (alt / rows) * 3, larg / cols, alt / rows);
      pgI.rect(larg / cols, (alt / rows) * 4, larg / cols, alt / rows);
      pgI.rect(larg / cols, (alt / rows) * 5, larg / cols, alt / rows);
      pgI.endShape();

      if (counter < 2) {
        image(pgI, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaI = false;
    }
    //====================================================================================================J
    if (ativaJ == true) {
      pgJ.beginShape();
      pgJ.rectMode(CORNER);
      pgJ.noStroke();
      //Cantos
      pgJ.fill(200);
      //superior esquerdo
      pgJ.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgJ.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgJ.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgJ.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgJ.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgJ.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgJ.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgJ.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgJ.fill(0);
      pgJ.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgJ.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgJ.rect((larg / cols) * 0, (alt / rows) * 2, larg / cols, alt / rows);
      pgJ.rect((larg / cols) * 0, (alt / rows) * 3, larg / cols, alt / rows);
      pgJ.rect(
        (larg / cols) * 0,
        (alt / rows) * 4,
        larg / cols,
        alt / rows / 2
      );
      pgJ.rect((larg / cols) * 0, (alt / rows) * 5, larg / cols, alt / rows);
      pgJ.rect(larg / cols, (alt / rows) * 5, larg / cols, alt / rows);
      pgJ.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgJ.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgJ.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgJ.endShape();

      if (counter < 2) {
        image(pgJ, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaJ = false;
    }
    //====================================================================================================K
    if (ativaK == true) {
      pgK.beginShape();
      pgK.rectMode(CORNER);
      pgK.noStroke();
      //Cantos
      pgK.fill(200);
      //superior esquerdo
      pgK.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgK.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgK.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgK.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgK.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgK.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgK.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgK.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgK.fill(0);
      pgK.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgK.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgK.rect((larg / cols) * 2, (alt / rows) * 2, larg / cols, alt / rows);
      pgK.rect((larg / cols) * 2, (alt / rows) * 3, larg / cols, alt / rows);
      pgK.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgK.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgK.endShape();

      if (counter < 2) {
        image(pgK, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaK = false;
    }
    //====================================================================================================L
    if (ativaL == true) {
      pgL.beginShape();
      pgL.rectMode(CORNER);
      pgL.noStroke();
      //Cantos
      pgL.fill(200);
      //superior esquerdo
      pgL.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgL.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgL.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgL.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgL.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgL.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgL.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgL.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgL.fill(0);
      pgL.rect(larg / cols, (alt / rows) * 5, larg / cols, alt / rows);
      pgL.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgL.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgL.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgL.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgL.endShape();

      if (counter < 2) {
        image(pgL, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaL = false;
    }
    //====================================================================================================M
    if (ativaM == true) {
      pgM.beginShape();
      pgM.rectMode(CORNER);
      pgM.noStroke();
      //Cantos
      pgM.fill(200);
      //superior esquerdo
      pgM.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgM.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgM.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgM.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgM.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgM.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgM.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgM.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgM.fill(0);
      pgM.rect(
        larg / cols + larg / cols / 2,
        alt / rows,
        larg / cols,
        alt / rows
      );
      pgM.rect(
        (larg / cols) * 3 + larg / cols / 2,
        alt / rows,
        larg / cols,
        alt / rows
      );
      pgM.rect((larg / cols) * 2, (alt / rows) * 3, larg / cols, alt / rows);
      pgM.rect((larg / cols) * 3, (alt / rows) * 3, larg / cols, alt / rows);
      pgM.rect((larg / cols) * 2, (alt / rows) * 4, larg / cols, alt / rows);
      pgM.rect((larg / cols) * 3, (alt / rows) * 4, larg / cols, alt / rows);
      pgM.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgM.rect((larg / cols) * 5, alt / rows, larg / cols, alt / rows);
      pgM.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgM.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgM.rect((larg / cols) * 5, (alt / rows) * 4, larg / cols, alt / rows);
      pgM.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgM.endShape();

      if (counter < 2) {
        image(pgM, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaM = false;
    }
    //====================================================================================================N
    if (ativaN == true) {
      pgN.beginShape();
      pgN.rectMode(CORNER);
      pgN.noStroke();
      //Cantos
      pgN.fill(200);
      //superior esquerdo
      pgN.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgN.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgN.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgN.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgN.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgN.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgN.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgN.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgN.fill(0);
      pgN.rect(
        (larg / cols) * 1 + larg / cols / 2,
        (alt / rows) * 0,
        larg / cols,
        alt / rows
      );
      pgN.rect(
        (larg / cols) * 2 + larg / cols / 2,
        (alt / rows) * 2 + alt / rows / 2,
        larg / cols,
        alt / rows
      );
      pgN.rect(
        (larg / cols) * 3 + larg / cols / 2,
        (alt / rows) * 5,
        larg / cols,
        alt / rows
      );
      pgN.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgN.rect((larg / cols) * 5, alt / rows, larg / cols, alt / rows);
      pgN.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgN.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgN.rect((larg / cols) * 5, (alt / rows) * 4, larg / cols, alt / rows);
      pgN.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgN.endShape();

      if (counter < 2) {
        image(pgN, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaN = false;
    }
    //====================================================================================================O
    if (ativaO == true) {
      pgO.beginShape();
      pgO.rectMode(CORNER);
      pgO.noStroke();
      //Cantos
      pgO.fill(200);
      //superior esquerdo
      pgO.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgO.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgO.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgO.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgO.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgO.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgO.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgO.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgO.fill(0);
      pgO.rect(larg / cols, (alt / rows) * 0, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 5,alt / rows + alt / rows / 2,larg / cols,alt / rows / 2);
      pgO.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 5,(alt / rows) * 4,larg / cols,alt / rows / 2);
      pgO.rect(larg / cols, (alt / rows) * 5, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgO.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgO.endShape();

      if (counter < 2) {
        image(pgO, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaO = false;
    }
    //====================================================================================================P
    if (ativaP == true) {
      pgP.beginShape();
      pgP.rectMode(CORNER);
      pgP.noStroke();
      //Cantos
      pgP.fill(200);
      //superior esquerdo
      pgP.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgP.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgP.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgP.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgP.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgP.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgP.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgP.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgP.fill(0);
      pgP.rect(larg / cols, (alt / rows) * 0, larg / cols, alt / rows);
      pgP.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgP.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgP.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgP.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgP.rect((larg / cols) * 5,alt / rows + alt / rows / 2,larg / cols,alt / rows / 2);
      pgP.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgP.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgP.rect(larg / cols + larg / cols / 2,(alt / rows) * 3,larg / cols / 2,alt / rows);
      pgP.rect((larg / cols) * 2, (alt / rows) * 3, larg / cols, alt / rows);
      pgP.rect((larg / cols) * 3, (alt / rows) * 3, larg / cols, alt / rows);
      pgP.endShape();

      if (counter < 2) {
        image(pgP, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaP = false;
    }
    //====================================================================================================Q
    if (ativaQ == true) {
      pgQ.beginShape();
      pgQ.rectMode(CORNER);
      pgQ.noStroke();
      //Cantos
      pgQ.fill(200);
      //superior esquerdo
      pgQ.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgQ.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgQ.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgQ.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgQ.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgQ.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgQ.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgQ.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgQ.fill(0);
      pgQ.rect(larg / cols + larg / cols / 2,(alt / rows) * 0,larg / cols / 2,alt / rows);
      pgQ.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgQ.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgQ.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgQ.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgQ.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgQ.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgQ.rect(larg / cols + larg / cols / 2,(alt / rows) * 4,larg / cols / 2,alt / rows);
      pgQ.rect((larg / cols) * 2, (alt / rows) * 4, larg / cols, alt / rows);
      pgQ.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgQ.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgQ.endShape();

      if (counter < 2) {
        image(pgQ, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaQ = false;
    }
    //====================================================================================================R
    if (ativaR == true) {
      pgR.beginShape();
      pgR.rectMode(CORNER);
      pgR.noStroke();
      //Cantos
      pgR.fill(200);
      //superior esquerdo
      pgR.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgR.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgR.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgR.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgR.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgR.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgR.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgR.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgR.fill(0);
      pgR.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgR.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgR.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgR.rect(larg / cols, (alt / rows) * 3, larg / cols, alt / rows);
      pgR.rect((larg / cols) * 2, (alt / rows) * 3, larg / cols, alt / rows);
      pgR.rect((larg / cols) * 4,alt / rows + alt / rows / 2,larg / cols,alt / rows / 2);
      pgR.rect((larg / cols) * 4, (alt / rows) * 2, larg / cols, alt / rows);
      pgR.rect((larg / cols) * 4, (alt / rows) * 3, larg / cols, alt / rows);
      pgR.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgR.endShape();

      if (counter < 2) {
        image(pgR, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaR = false;
    }
    //====================================================================================================S
    if (ativaS == true) {
      pgS.beginShape();
      pgS.rectMode(CORNER);
      pgS.noStroke();
      //Cantos
      pgS.fill(200);
      //superior esquerdo
      pgS.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgS.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgS.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgS.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgS.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgS.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgS.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgS.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgS.fill(0);
      pgS.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgS.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgS.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgS.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgS.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgS.rect((larg / cols) * 5, (alt / rows) * 4, larg / cols, alt / rows);
      pgS.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgS.rect(larg / cols, (alt / rows) * 5, larg / cols, alt / rows);
      pgS.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgS.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgS.rect(larg / cols + larg / cols / 2,(alt / rows) * 3,larg / cols / 2,alt / rows);
      pgS.rect((larg / cols) * 2, (alt / rows) * 3, larg / cols, alt / rows);
      pgS.rect((larg / cols) * 3, (alt / rows) * 3, larg / cols, alt / rows);
      pgS.endShape();

      if (counter < 2) {
        image(pgS, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaS = false;
    }
    //====================================================================================================T
    if (ativaT == true) {
      pgT.beginShape();
      pgT.rectMode(CORNER);
      pgT.noStroke();
      //Cantos
      pgT.fill(200);
      //superior esquerdo
      pgT.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgT.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgT.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgT.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgT.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgT.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgT.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgT.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgT.fill(0);
      pgT.rect(larg / cols, (alt / rows) * 0, larg / cols, alt / rows);
      pgT.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgT.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgT.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgT.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgT.endShape();

      if (counter < 2) {
        image(pgT, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaT = false;
    }
    //====================================================================================================U
    if (ativaU == true) {
      pgU.beginShape();
      pgU.rectMode(CORNER);
      pgU.noStroke();
      //Cantos
      pgU.fill(200);
      //superior esquerdo
      pgU.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgU.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgU.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgU.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgU.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgU.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgE.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgE.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgU.fill(0);
      pgU.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgU.rect((larg / cols) * 5, alt / rows, larg / cols, alt / rows);
      pgU.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgU.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgU.rect((larg / cols) * 5, (alt / rows) * 4, larg / cols, alt / rows);
      pgU.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgU.rect(larg / cols + larg / cols / 2,(alt / rows) * 5,larg / cols / 2,alt / rows);
      pgU.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgU.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgU.rect((larg / cols) * 4,(alt / rows) * 5,larg / cols / 2,alt / rows);
      pgU.endShape();

      if (counter < 2) {
        image(pgU, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaU = false;
    }
    //====================================================================================================V
    if (ativaV == true) {
      pgV.beginShape();
      pgV.rectMode(CORNER);
      pgV.noStroke();
      //Cantos
      pgV.fill(200);
      //superior esquerdo
      pgV.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgV.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgV.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgV.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgV.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgV.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgV.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgV.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgV.fill(0);
      pgV.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgV.rect((larg / cols) * 5, alt / rows, larg / cols, alt / rows);
      pgV.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgV.rect((larg / cols) * 2, (alt / rows) * 4, larg / cols, alt / rows);
      pgV.rect((larg / cols) * 3, (alt / rows) * 4, larg / cols, alt / rows);
      pgV.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgV.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgV.endShape();

      if (counter < 2) {
        image(pgV, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaV = false;
    }
    //====================================================================================================W
    if (ativaW == true) {
      pgW.beginShape();
      pgW.rectMode(CORNER);
      pgW.noStroke();

      //Cantos
      pgW.fill(200);
      //superior esquerdo
      pgW.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgW.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgW.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgW.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgW.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgW.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgW.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgW.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgW.fill(0);
      pgW.rect(larg / cols + larg / cols / 2,(alt / rows) * 4,larg / cols,alt / rows);
      pgW.rect((larg / cols) * 3 + larg / cols / 2,(alt / rows) * 4,larg / cols,alt / rows);
      pgW.rect((larg / cols) * 2, alt / rows, larg / cols, alt / rows);
      pgW.rect((larg / cols) * 3, alt / rows, larg / cols, alt / rows);
      pgW.rect((larg / cols) * 2, (alt / rows) * 2, larg / cols, alt / rows);
      pgW.rect((larg / cols) * 3, (alt / rows) * 2, larg / cols, alt / rows);
      pgW.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgW.rect((larg / cols) * 5, alt / rows, larg / cols, alt / rows);
      pgW.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgW.rect((larg / cols) * 5, (alt / rows) * 3, larg / cols, alt / rows);
      pgW.rect((larg / cols) * 5, (alt / rows) * 4, larg / cols, alt / rows);
      pgW.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgW.endShape();

      if (counter < 2) {
        image(pgW, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaW = false;
    }
    //====================================================================================================X
    if (ativaX == true) {
      pgX.beginShape();
      pgX.rectMode(CORNER);
      pgX.noStroke();

      //Cantos
      pgX.fill(200);
      //superior esquerdo
      pgX.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgX.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgX.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgX.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgX.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgX.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgX.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgX.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgX.fill(0);
      pgX.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgX.rect((larg / cols) * 5, alt / rows, larg / cols, alt / rows);
      pgX.rect((larg / cols) * 5, (alt / rows) * 2, larg / cols, alt / rows);
      pgX.rect((larg / cols) * 5, (alt / rows) * 4, larg / cols, alt / rows);
      pgX.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgX.rect((larg / cols) * 2, (alt / rows) * 2, larg / cols, alt / rows);
      pgX.rect((larg / cols) * 3, (alt / rows) * 2, larg / cols, alt / rows);
      pgX.rect((larg / cols) * 2, (alt / rows) * 3, larg / cols, alt / rows);
      pgX.rect((larg / cols) * 3, (alt / rows) * 3, larg / cols, alt / rows);
      pgX.endShape();

      if (counter < 2) {
        image(pgX, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaX = false;
    }
    //====================================================================================================Y
    if (ativaY == true) {
      pgY.beginShape();
      pgY.rectMode(CORNER);
      pgY.noStroke();

      //Cantos
      pgY.fill(200);
      //superior esquerdo
      pgY.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgY.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgY.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgY.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgY.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgY.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgY.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgY.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgY.fill(0);
      pgY.rect((larg / cols) * 0, (alt / rows) * 0, larg / cols, alt / rows);
      pgY.rect((larg / cols) * 0, alt / rows, larg / cols, alt / rows);
      pgY.rect((larg / cols) * 0, (alt / rows) * 2, larg / cols, alt / rows);
      pgY.rect((larg / cols) * 2, (alt / rows) * 2, larg / cols, alt / rows);
      pgY.rect((larg / cols) * 3, (alt / rows) * 2, larg / cols, alt / rows);
      pgY.rect((larg / cols) * 4, (alt / rows) * 2, larg / cols, alt / rows);
      pgY.endShape();

      if (counter < 2) {
        image(pgY, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaY = false;
    }
    //====================================================================================================Z
    if (ativaZ == true) {
      pgZ.beginShape();
      pgZ.rectMode(CORNER);
      pgZ.noStroke();

      //Cantos
      pgZ.fill(200);
      //superior esquerdo
      pgZ.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgZ.rect((larg / cols) * 0, (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //superior direito
      pgZ.rect(larg - (larg / (cols * 3)), (alt / rows) * 0, larg / (cols * 3), alt / (rows * 8));
      pgZ.rect(larg - (larg / (cols * 8)), (alt / rows) * 0, larg / (cols * 8), alt / (rows * 3));
      //inferior esquerdo
      pgZ.rect((larg / cols) * 0, alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgZ.rect((larg / cols) * 0, alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //inferior direito
      pgZ.rect(larg - (larg / (cols * 3)), alt - (alt / (rows * 8)), larg / (cols * 3), alt / (rows * 8));
      pgZ.rect(larg - (larg / (cols * 8)), alt - (alt / (rows * 3)), larg / (cols * 8), alt / (rows * 3));
      //
      pgZ.fill(0);
      pgZ.rect((larg / cols) * 0, (alt / rows) * 0, larg / cols, alt / rows);
      pgZ.rect(larg / cols, (alt / rows) * 0, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 2, (alt / rows) * 0, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 3, (alt / rows) * 0, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 4, (alt / rows) * 0, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 5, (alt / rows) * 0, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 0, (alt / rows) * 5, larg / cols, alt / rows);
      pgZ.rect(larg / cols, (alt / rows) * 5, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 2, (alt / rows) * 5, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 3, (alt / rows) * 5, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 4, (alt / rows) * 5, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 5, (alt / rows) * 5, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 3, (alt / rows) * 2, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 2, (alt / rows) * 2, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 3, (alt / rows) * 3, larg / cols, alt / rows);
      pgZ.rect((larg / cols) * 2, (alt / rows) * 3, larg / cols, alt / rows);
      pgZ.endShape();

      if (counter < 2) {
        image(pgZ, counter * (larg + larg / cols), linha);
        counter++;
      }

      if (counter == 2) {
        counter = 0;
        linha += alt + alt / rows;
      }
      ativaZ = false;
    }
  }
}