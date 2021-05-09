import React from 'react';
import { StyleSheet,
        View,
        Text} from 'react-native';


import { ProcessingView } from "expo-processing";

export default class ProcessingGrid extends React.Component {
    render() {
      return <ProcessingView style={styles.processingView} sketch={this._sketch} />;
    }
  
    _sketch = p => {
      p.background(237,237,237);
        
      for (var x = 0; x < p.width; x += p.width / 7) {
          for (var y = 0; y < p.height; y += p.height / 7) {
              p.stroke(0);
              p.strokeWeight(3);
              p.line(x, 0, x, p.height);
              p.line(0, y, p.width, y);
          }
      }
    };
  }

  const styles = StyleSheet.create({
      processingView:{
          width: 320,
          height: 320,
          borderTopWidth: 1,
          borderRightWidth: 2,
          borderBottomWidth: 2,
          borderLeftWidth: 1,
          alignSelf: 'center',
      }
  })