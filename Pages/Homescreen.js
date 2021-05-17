import React, { useState, useEffect } from 'react';
import { StyleSheet,
        Text,
        View,
        TouchableOpacity,
        Pressable,
        Dimensions,
        ScrollView,
        FlatList,
        SafeAreaView,
        Platform,
        Button,
        Image,
        Modal } from 'react-native';

import { Camera } from 'expo-camera';
import { BlurView } from 'expo-blur';
//import { render } from 'react-dom';

import Carousel from '../Components/Carousel';
import {keysData} from '../Data/KeysData';

import * as ImagePicker from 'expo-image-picker';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { color } from 'react-native-reanimated';


import {alphabet} from '../Data/Alphabet';

const {width, height} = Dimensions.get("window");
const numCols = 3;

const HomeScreen = (props) => {

    /*---TOGGLE ALPHABET BUTTONS---*/
    const alphabetIcons = [
      require("../assets/a.png"),
      require("../assets/x.png"),
    ];

    
    const renderAlphabet = ({item, index}) => {
      let {alphabetItem,alphabetImage,alphabetText} = styles
      return(
        <View style={alphabetItem}>
          <Image style={alphabetImage} source={item.ref}/>
          <Text style={alphabetText}>{item.key}</Text>
        </View>
      )
    }

    var iconDisplay = 0;
    const [alphabetDisplay, setAlphabetDisplay] = useState(false);
    if(alphabetDisplay == true){
      iconDisplay = 1;
    }
    else{
      iconDisplay = 0;
    }

    const [letters, setLetters] = useState(alphabet);
    const [modalVisible, setModalVisible] = useState(false);


    
    /*---LOAD MOBILE CAMERA---*/
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

  
    /*---LOAD CAMERA ROLL IMAGE---*/
    const [image, setImage] = useState(null);
    const [imageVisible, setImageVisible] = useState(true);


    //camera permission
    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    //camera roll image pick
    const PickImage = async() => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect:[16,9],
        quality:1
      })
      if(!result.cancelled){
        setImageVisible(!imageVisible);
        setImage(result.uri);
      }
    }

    
    return (
      
        <View style={styles.container} >

           <Modal
            animationType="fade"
            transparent={true}
            useNativeDriver={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
            
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={
              () => {
              setModalVisible(!modalVisible);
              setAlphabetDisplay(!alphabetDisplay);
              }
            }
            >
              <Image style={styles.icon} source={alphabetIcons[iconDisplay]}/>
            </TouchableOpacity>
            <BlurView
              intensity={90}
              style={styles.modalView}>

              <Text style={styles.baseTitle}>alphabet.</Text>

            <ScrollView>
              <FlatList
                data={alphabet}
                renderItem={renderAlphabet}
                keyExtractor={(item,index) => index.toString()}
                numColumns={numCols}
              />
            </ScrollView>
        
              </BlurView>
            </View>
           </Modal>


    
      <Camera style={styles.camera} type={type}>
      {image &&
        <View style={[styles.imageContainer, {
              position:'absolute',
              backgroundColor: 'rgba(0,0,0,0.5)',
              top:0,
              left:0,
              height: height,
              width: width,
        }]}>
        <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.5}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={false}
        captureEvent={true}
        >
          <Image
            source={{uri:image}}
            style={{
              flex: 1, width: null, height: '100%',
              resizeMode:'contain'
              }}
          />
          
          </ReactNativeZoomableView>
          
          <TouchableOpacity
            style={styles.importImage}
            onPress = { () => {
              setImageVisible(!imageVisible);
              setImage(null);
            }}
          >
          <Text style={{color:'#1f1f1f',fontSize:'24', fontWeight:'bold'}}>x</Text>
          </TouchableOpacity>
        </View>
        }

      <Carousel  data = {keysData}/>
      </Camera>

      <TouchableOpacity
          style={styles.iconContainer}
          onPress={
            () => {
              setModalVisible(!modalVisible);
              setAlphabetDisplay(!alphabetDisplay);
              }
           }
        >
        <Image style={styles.icon} source={alphabetIcons[iconDisplay]}/>
      </TouchableOpacity>


      {imageVisible ? (
      <TouchableOpacity
        style={styles.importImage}
        onPress={PickImage}
      >
      <Text style={{color:'#1f1f1f',fontSize:'24', fontWeight:'bold',}}>+</Text>
      </TouchableOpacity>
      ) : null}
      

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: "row"
    },
    iconContainer:{
      position: 'absolute',
      top: 65, right: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
    },
    icon:{
      width: 55, height: 55,
    },
    camera: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    buttonContainer: {
      borderRadius: 10,
      color:  "#000",
      width: 60,
      position: 'absolute',
      padding: 15,
      bottom: 45,
      left: 40,
    },
    importImage:{
      backgroundColor:'#EDEDED',
      position: 'absolute',
      top: 65, left: 20,
      width:50,height:50,
      borderRadius:5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flex:1
    },

  
  /*MODAL STYLE*/ 
  
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
      backgroundColor:'rgba(0,0,0,0.75)'
    },
    modalView: {
      marginTop:15,
      paddingVertical:15,
      width:375,
      height: 625,
      backgroundColor: "#EDEDED",
      overflow: 'hidden',
      borderRadius: 15,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },

    baseTitle: {
      width: '100%',
      fontSize: 32,
      fontFamily: 'SpaceMono_700Bold',
      paddingHorizontal:30,
      paddingBottom:10
   },
    alphabetItem:{
      padding:10,
      margin:10,
      width: 90,
    },
    alphabetImage:{
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      borderWidth: 0.5,
    },
    alphabetText:{
      textAlign:'center',
      marginTop: 10,
      fontFamily: 'SpaceMono_400Regular',
    }
  });

export default HomeScreen;