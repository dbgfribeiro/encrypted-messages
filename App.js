import React, { useState, useEffect } from 'react';
import { StyleSheet,
        Text,
        View,
        TouchableOpacity,
        Pressable,
        Image,
        Modal } from 'react-native';

import { Camera } from 'expo-camera';

export default function App() {
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
    <View style={styles.container}>

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
              <View style={styles.modalView}>
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
              </View>
            </View>
      </Modal>


    
      <Camera style={styles.camera} type={type}>
        <View style={styles.overlay}>
        <Image
        style={styles.overlayCode}
        source={require('./assets/codew.png')}
        />
        </View>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View> */}
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setModalVisible(true)}>
          <Image
            style={styles.icon}
            source={require('./assets/menu.png')}
          />
        </TouchableOpacity>
      </Camera>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row"
  },
  iconContainer:{
    position: 'absolute',
    width: 60, height: 60,
    top: 55, left: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  icon:{
    width: 60, height: 60,
  },

  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  overlay: {
    borderRadius: 1000,
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(36,38,39,0.4)",
  },
  overlayCode: {
    resizeMode: 'contain',
    width:315,
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
    backgroundColor: "rgba(36,38,39,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#242627",
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
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: 35,
  },
  textStyle: {
    color: "#000",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    color: "#fff"
  }
}); 