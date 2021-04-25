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

const HomeScreen = (props) => {
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

    
    const modalIcons = [
      require("../assets/a.png"),
      require("../assets/x.png"),
    ]
    


    return (
        <View style={styles.container} >
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
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
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </BlurView>
            </View>
           </Modal>


    
      <Camera style={styles.camera} type={type}>
        <View style={styles.overlay}>
        
        <Image
        style={styles.overlayCode}
        source={require('../assets/code.png')}
        />
        </View>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setModalVisible(true)}
          >
          <Image
            style={styles.icon}
            source={modalIcons[0]}
          />
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
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
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
    button: {
      borderRadius: 5,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#1F1F1F",
      position: "absolute",
      bottom: 35,
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