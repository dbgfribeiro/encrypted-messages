import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image} from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
      <Camera style={styles.camera} type={type}>
        <View style={styles.overlay}>
        <Image
        style={styles.overlayCode}
        source={require('./assets/code.png')}
        />
        </View>
        <View style={styles.buttonContainer}>
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
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row"
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
    backgroundColor: "rgba(150,150,150,0.4)",
  },
  overlayCode: {
    resizeMode: 'contain',
    width:315,
  },


  buttonContainer: {
    backgroundColor: "steelblue",
    borderRadius: 10,
    color:  "#000",
    width: 60,
    position: 'absolute',
    padding: 15,
    bottom: 45,
    left: 40,
  },
}); 