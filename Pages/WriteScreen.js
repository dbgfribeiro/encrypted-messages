import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { WebView } from "react-native-webview";

//const myHtmlFile = require("../p5js/write.html");

const WriteScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.baseTitle}>write.</Text>
      </View>

      <View style={styles.write}>
        <WebView
          source={{
            uri: "https://student.dei.uc.pt/~dbribeiro/p5js/write.html",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDEDED",
    flex: 1,
  },
  baseText: {
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 4,
  },
  baseTitle: {
    fontSize: 32,
    fontFamily: "SpaceMono_700Bold",
    color: "#1f1f1f",
  },

  write: {
    flex: 1,
    paddingHorizontal: 30,
  },

  newMessage: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
});

export default WriteScreen;
