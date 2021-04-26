import React, { useState, useEffect } from 'react';
import { StyleSheet,
        Text,
        View,
        TouchableOpacity,
        Pressable,
        Image,
        Modal } from 'react-native';

import { Camera } from 'expo-camera';
import { BlurView } from 'expo-blur';
import { render } from 'react-dom';

import Carousel from '../Components/Carousel';
import {keysData} from '../Data/KeysData';

const HomeScreen = (props) => {

    /*---TOGGLE ALPHABET BUTTONS---*/
    const alphabetIcons = [
      require("../assets/a.png"),
      require("../assets/x.png"),
    ];

    var iconDisplay = 0;
    const [alphabetDisplay, setAlphabetDisplay] = useState(false);
    if(alphabetDisplay == true){
      iconDisplay = 1;
    }
    else{
      iconDisplay = 0;
    }


    /*---LOAD MOBILE CAMERA---*/
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const [modalVisible, setModalVisible] = useState(false);

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

    
    return (
      
        <View style={styles.container} >

           <Modal
            animationType="fade"
            transparent={true}
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
                <Text style={styles.modalText}>
                Este projeto foca-se na criação de uma língua que possibilite a interação entre pelo menos dois indivíduos, utilizando a criptologia como ferramenta para traduzir palavras em formas.
                O projeto evolui assim que os utilizadores se sintam confortáveis para explorar a língua.
                {"\n"}{"\n"}
                Acreditamos que ao possibilitar esta oportunidade de progressão provoquemos uma sensação de conquista no utilizador e que isso o impulsione a explorar mais.
                {"\n"}{"\n"}
                Todo o projeto também proporciona ao utilizador uma oportunidade de aprendizagem e desenvolvimento pessoal, neste caso um processo de aprendizagem rápido, possivelmente agilizado com a interação social.
                </Text>
              </BlurView>
            </View>
           </Modal>


    
      <Camera style={styles.camera} type={type}>
      <Carousel  data = {keysData}/>

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
      </Camera>


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
  
    overlay: {
      borderRadius: 1000,
      width: 375,
      height: 375,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgba(237,237,237,0.2)",
    },
    overlayCode: {
      resizeMode: 'contain',
      width:250,
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
  
  /*MODAL STYLE*/ 
  
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      flex:1
    },
    modalView: {
      margin: 20,
      height: 600,
      backgroundColor: "#EDEDED",
      overflow: 'hidden',
      borderRadius: 15,
      paddingVertical: 100,
      paddingHorizontal: 35,
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
    textStyle: {
      color: "#FFF",
      fontWeight: "bold",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "left",
      color: "#1F1F1F"
    }
  });

export default HomeScreen;