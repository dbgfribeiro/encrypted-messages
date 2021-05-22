import React, {useState , useRef, useEffect } from 'react';
import { StyleSheet,
        View,
        ScrollView,
        Text,
        Image,
        Button,TouchableOpacity,
        Animated} from 'react-native';
import { WebView } from 'react-native-webview';
import {keysData} from '../Data/KeysData';
import TopBar from "../Components/TopBar"
import { Avatar } from 'react-native-paper';
import { abs } from 'react-native-reanimated';
//import Grid from '../Components/Grid' 



//const myHtmlFile = require("../p5js/grid.html");


const KeysContainer = (props) => {
  const {keysData} = props;
  return keysData.map((item) => (
    <View style={styles.myKeys} key={item.id}>
      <Image style={styles.keyImage} source={item.ref}/>
      <Text style={styles.keyTitle}>{item.title}</Text>
    </View>
  ))
}

const KeysScreen = (props) => {
    const [keys, setKeys] = useState(keysData);
    const [menuSelection, setMenuSelection] = useState(0);

    const onPressHeader = (index) => {
      setMenuSelection(index);
    }

    return (
      <View style={styles.container}>
        <View style={styles.baseText}>
          <Text style={styles.baseTitle}>keys.</Text>
          <TopBar labels={["My keys","New"]} onPressHeader={onPressHeader} menuSelection={menuSelection}/>
        </View>

        {menuSelection == 0 && 
        <ScrollView>
          <KeysContainer keysData={keys} />
        </ScrollView>
        }

        {menuSelection == 1 && 
        <View style={{flex:1}}>
        <WebView source={{ uri: 'https://student.dei.uc.pt/~dbribeiro/p5js/grid.html' }} style={styles.grid}/>


          <TouchableOpacity
            style={styles.submitGrid}
            //onPress={() => {}}
            >
            <Image style={{width:30,height:30}} source={require('../assets/arrow.png')}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.costumGrid}
            //onPress={() => {}}
            >
          </TouchableOpacity>

        </View>
        }
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#EDEDED',
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 5,
  },
  baseText:{
    paddingBottom: 30
  },
  baseTitle: {
     fontSize: 32,
     fontFamily: 'SpaceMono_700Bold',
     color: '#1f1f1f'
  },

  myKeys:{
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyImage:{
    width:200,
    height: 200,
  },
  keyTitle:{
    marginTop: 10,
    fontFamily: 'SpaceMono_700Bold',
  },

  newKey:{
    top: 30,
  },

  grid:{
    backgroundColor:'#EDEDED',
    flex:1
  },
  submitGrid:{
    position: 'absolute',
    bottom:10,
    right:0
  },

  costumGrid:{
    position:'absolute',
    bottom:12,
    left:0
  },
});

export default KeysScreen;