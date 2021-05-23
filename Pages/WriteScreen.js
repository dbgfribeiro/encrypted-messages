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

import { keysData } from "../Data/KeysData";

const WriteScreen = (props) => {
  const [keys, setKeys] = useState(keysData);

  const [text, setText] = useState("");

  const [keySelector, setKeySelector] = useState(false);

  const [generatedMessage, setGeneratedMessage] = useState(false);

  const KeysContainer = (props) => {
    const { keysData } = props;
    return keysData.map((item) => (
      <View style={styles.myKeys} key={item.id}>
        <TouchableOpacity
          onPress={() => {
            setGeneratedMessage(true);
            setKeySelector(false);
          }}
        >
          <Image style={styles.keyImage} source={item.ref} />
          <Text style={styles.keyTitle}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.baseTitle}>write.</Text>
      </View>

      {keySelector == false && generatedMessage == false && (
        <View style={styles.newMessage}>
          <Text style={styles.saudation}>hi, Diogo</Text>
          <Text style={styles.saudationNext}>What's up?</Text>

          <TextInput
            style={styles.messageInput}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
            placeholder="your message"
          />

          <TouchableOpacity
            style={styles.submitMessageCont}
            onPress={() => {
              setKeySelector(true);
            }}
          >
            <Image
              style={styles.submitMessage}
              source={require("../assets/arrow.png")}
            />
          </TouchableOpacity>
        </View>
      )}

      {keySelector == true && (
        <View style={styles.chooseContainer}>
          <View style={styles.chooseHeader}>
            <Text style={styles.chooseTitle}>Choose key</Text>
            <TouchableOpacity
              style={styles.backCont}
              onPress={() => {
                setKeySelector(false);
              }}
            >
              <Image
                style={styles.back}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <KeysContainer keysData={keys} />
          </ScrollView>
        </View>
      )}

      {generatedMessage == true && (
        <View style={styles.chooseContainer}>
          <View style={styles.chooseHeader}></View>

          <View style={styles.messageDisplay}>
            {/* <Text>
              {text.split(' ').map((word) => word).join(' ')}
            </Text> */}
            <Image
              source={require("../assets/hello.png")}
              style={{ width: "100%", resizeMode: "contain", flex: 1 }}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.backCont,
              { bottom: -250, left: 30, position: "absolute" },
            ]}
            onPress={() => {
              setKeySelector(true);
              setGeneratedMessage(false);
            }}
          >
            <Image
              style={styles.back}
              source={require("../assets/arrow.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.share,
              { bottom: -250, right: 30, position: "absolute" },
            ]}
            // onPress={() => {}}
          >
            <Image
              style={styles.back}
              source={require("../assets/share.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.share,
              { bottom: -250, right: 70, position: "absolute" },
            ]}
            // onPress={() => {}}
          >
            <Image style={styles.back} source={require("../assets/save.png")} />
          </TouchableOpacity>
        </View>
      )}
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

  writeText: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 4,
    fontFamily: "SpaceMono_700Bold",
    fontSize: 16,
    color: "#1f1f1f",
  },

  newMessage: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    marginTop: -150,
  },
  saudation: {
    fontFamily: "SpaceMono_700Bold",
    fontSize: 24,
    color: "#1f1f1f",
  },
  saudationNext: {
    fontFamily: "SpaceMono_400Regular",
    fontSize: 18,
    color: "#1f1f1f",
  },
  messageInput: {
    height: 40,
    fontFamily: "SpaceMono_400Regular",
    borderBottomWidth: 2,
  },
  submitMessageCont: {
    width: "100%",
  },
  submitMessage: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 5,
    marginTop: 20,
  },

  //CHOOSE KEYS
  chooseContainer: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  chooseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chooseTitle: {
    fontSize: 18,
    paddingBottom: 10,
    fontFamily: "SpaceMono_700Bold",
  },
  backCont: {
    transform: [{ scaleX: -1 }],
    flexDirection: "row-reverse",
    width: 25,
    height: 25,
  },
  share: {
    width: 25,
    height: 25,
  },
  back: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  myKeys: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  keyImage: {
    width: 200,
    height: 200,
  },
  keyTitle: {
    marginTop: 10,
    fontFamily: "SpaceMono_700Bold",
    textAlign: "center",
  },

  messageDisplay: {
    borderWidth: 1,
    width: 350,
    height: 350,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WriteScreen;
