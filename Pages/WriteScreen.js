import React from 'react';
import { StyleSheet,
        View,
        Text,
      } from 'react-native';

const WriteScreen = (props) => {

    return (
      <View style={styles.container}>
        
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#EDEDED',
    flex: 1
  },
  baseText:{
    paddingHorizontal: 30,
    paddingVertical: 80,
  },
  baseTitle: {
     fontSize: 32,
     fontFamily: 'SpaceMono_700Bold',
     color: '#1f1f1f'
  },
});
export default WriteScreen;