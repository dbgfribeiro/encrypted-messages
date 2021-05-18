import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { ProcessingView } from "expo-processing";

export default class ProcessingGrid extends React.Component {
  render() {
    return (
      <ProcessingView style={styles.processingView} sketch={this._sketch} />
    );
  }

  _sketch = (p) => {
    //variaveis grid
    let cols = 6;
    let rows = 6;
    let conta1 = 0;

    //let font = p.loadFont('assets/spacemono-regular-webfont.woff2');

    //create grid

    let grid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    ];

    p.setup = () => {
      p.size(320, 320, p.P3D);
      p.background(237, 237, 237);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let a = Math.floor(Math.random() * (0, 2));
          let del = Math.floor(Math.random() * alfabeto.length);
          if ((a === 0 && conta1 <= 9) || alfabeto.length === 0) {
            grid[i][j] = new Cell(
              i * (p.width / 6),
              j * (p.height / 6),
              p.width / 6,
              p.height / 6,
              null
            );

            if (conta1 <= 9) {
              conta1++;
            }
          } else {
            grid[i][j] = new Cell(
              i * (p.width / 6),
              j * (p.height / 6),
              p.width / 6,
              p.height / 6,
              alfabeto[del]
            );

            alfabeto.splice(del, 1);
          }
        }
      }
    };

    p.draw = () => {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          p.noFill();
          grid[i][j].display();

          //p.textSize(32);
          //p.textFont(font);
          p.fill(0, 102, 153);
          //p.text(grid[i][j].getletra(), grid[i][j].getx(), grid[i][j].gety());

          p.ellipse(grid[i][j].getx(), grid[i][j].gety(), 20, 20);
        }
      }
    };

    let Cell = class Cell {
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
        p.stroke(0);
        p.rect(this.x, this.y, this.w, this.h);
      }
    };
  };
}

const styles = StyleSheet.create({
  processingView: {
    width: 320,
    height: 320,
    borderWidth: 1,
    alignSelf: "center",
  },
});
