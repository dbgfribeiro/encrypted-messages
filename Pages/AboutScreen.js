import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import TopBar from "../Components/TopBar";

const AboutScreen = (props) => {
  const [menuSelection, setMenuSelection] = useState(0);
  const onPressHeader = (index) => {
    setMenuSelection(index);
  };

  const [infoSelection, setInfoSelection] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.baseText}>
          <Text style={styles.baseTitle}>info.</Text>
          <TopBar
            labels={["Guide", "About"]}
            onPressHeader={onPressHeader}
            menuSelection={menuSelection}
          />
        </View>

        {menuSelection == 0 && infoSelection == true && (
          <ScrollView style={{ marginBottom: 175 }}>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Step 1</Text>

              <Text style={styles.infoContent}>
                First, it is important to know that each letter of the alphabet
                is represented by a shape. The first letter of a word is
                represented by the corresponding shape.
              </Text>

              <Text style={[styles.infoContent, { opacity: 0.5 }]}>
                Take a look at the image below!
              </Text>

              <View style={{ padding: 0, height: 325, padding: 10 }}>
                <Image
                  source={require("../assets/rules/alph.png")}
                  style={{ width: "100%", resizeMode: "contain", flex: 1 }}
                />
              </View>

              <Text style={styles.infoContent}>
                These corners will help you position the selected key with your
                camera.
              </Text>

              <View
                style={{
                  padding: 0,
                  height: 325,
                  padding: 40,
                  marginVertical: 15,
                }}
              >
                <Image
                  source={require("../assets/rules/corners.png")}
                  style={{ width: "100%", resizeMode: "contain", flex: 1 }}
                />
              </View>
            </View>

            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Step 2</Text>

              <Text style={styles.infoContent}>
                All encrypted messages have a key associated with them.
              </Text>
              <Text
                style={[
                  styles.infoContent,
                  { textDecorationLine: "underline" },
                ]}
              >
                The remaining letters of a word are represented with the help of
                a key*,
              </Text>
              <Text style={styles.infoContent}>
                but when you decode a message you have to know what key to use,
                otherwise you will be misinterpreting the message.{" "}
              </Text>

              <Text style={[styles.infoContent, { opacity: 0.5 }]}>
                This is an example of a key!
              </Text>

              <View
                style={{
                  padding: 0,
                  height: 325,
                  padding: 40,
                  marginVertical: 15,
                }}
              >
                <Image
                  source={require("../assets/rules/frame.png")}
                  style={{ width: "100%", resizeMode: "contain", flex: 1 }}
                />
              </View>

              <Text style={styles.infoContent}>*</Text>
              <Text style={[styles.infoContent, { opacity: 0.5 }]}>
                The order of the letters is defined by the number of circles
                present in the key,
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                setInfoSelection(!infoSelection);
              }}
            >
              <Text
                style={[
                  styles.infoContent,
                  {
                    fontFamily: "SpaceMono_700Bold",
                    textAlign: "center",
                    marginTop: 10,
                    paddingBottom: 50,
                    fontSize: 20,
                  },
                ]}
              >
                let's see
              </Text>
            </TouchableOpacity>
          </ScrollView>
        )}

        {menuSelection == 0 && infoSelection == false && (
          <View>
            <View>
              <TouchableOpacity
                style={styles.backCont}
                onPress={() => {
                  setInfoSelection(!infoSelection);
                }}
              >
                <Image
                  source={require("../assets/arrow.png")}
                  style={styles.back}
                />
              </TouchableOpacity>
            </View>

            <ScrollView style={{ marginBottom: 380 }}>
              <View style={styles.infoText}>
                <Text style={styles.infoTitle}>How it works</Text>

                <Text style={styles.infoContent}>
                  {"\n"}
                  Now let’s understand how this encryption process works, so we
                  can decrypted. Imagine that we need to encrypt the word{" "}
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>
                    BANANA
                  </Text>
                  .{"\n"}
                  {"\n"}
                  {"\n"}
                  First, this word starts with the letter{" "}
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>B</Text>,
                  right?
                </Text>
                <Text style={[styles.infoContent, { opacity: 0.5 }]}>
                  Yes, the shape we will use to code this word is the one
                  corresponding to the letter B.
                </Text>
                <View
                  style={{
                    padding: 0,
                    height: 325,
                    padding: 40,
                    marginVertical: 15,
                  }}
                >
                  <Image
                    source={require("../assets/rules/b.png")}
                    style={{ width: "100%", resizeMode: "contain", flex: 1 }}
                  />
                </View>
                <Text style={styles.infoContent}>
                  We choose this key to encrypted the message.{" "}
                </Text>
                <View
                  style={{
                    height: 325,
                    padding: 40,
                    marginVertical: 15,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/rules/key.png")}
                    style={{
                      height: "100%",
                      width: "90%",
                      borderRightWidth: 1,
                      borderBottomWidth: 1,
                    }}
                  />
                </View>
                <Text style={styles.infoContent}>
                  The remaining letters are 3x
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>A</Text> and
                  2x<Text style={{ fontFamily: "SpaceMono_700Bold" }}>N</Text>,
                  and the order is:
                </Text>

                <View style={styles.banana}>
                  <Text
                    style={[
                      styles.infoContent,
                      {
                        fontFamily: "SpaceMono_700Bold",
                        fontSize: 24,
                        marginHorizontal: 5,
                      },
                    ]}
                  >
                    A
                  </Text>
                  <Text
                    style={[
                      styles.infoContent,
                      {
                        fontFamily: "SpaceMono_700Bold",
                        fontSize: 24,
                        marginHorizontal: 5,
                      },
                    ]}
                  >
                    N
                  </Text>
                  <Text
                    style={[
                      styles.infoContent,
                      {
                        fontFamily: "SpaceMono_700Bold",
                        fontSize: 24,
                        marginHorizontal: 5,
                      },
                    ]}
                  >
                    A
                  </Text>
                  <Text
                    style={[
                      styles.infoContent,
                      {
                        fontFamily: "SpaceMono_700Bold",
                        fontSize: 24,
                        marginHorizontal: 5,
                      },
                    ]}
                  >
                    N
                  </Text>
                  <Text
                    style={[
                      styles.infoContent,
                      {
                        fontFamily: "SpaceMono_700Bold",
                        fontSize: 24,
                        marginHorizontal: 5,
                      },
                    ]}
                  >
                    A
                  </Text>
                </View>

                <Text style={styles.infoContent}>
                  In the key we can see that each letter is defined by a block,
                  and this block is divided into 4. This is in case the letter
                  is repeated in the same word. We start by using the{" "}
                  <Text style={{ color: "#F1C40F" }}>top left</Text>, then the{" "}
                  <Text style={{ color: "#2ECC71" }}>top right</Text>,{" "}
                  <Text style={{ color: "#3498DB" }}>bottom right</Text> and{" "}
                  <Text style={{ color: "#9B59B6" }}>bottom left</Text>.
                </Text>
                <View
                  style={{
                    padding: 0,
                    height: 325,
                    padding: 40,
                    marginVertical: 15,
                  }}
                >
                  <Image
                    source={require("../assets/rules/letter.png")}
                    style={{ width: "100%", resizeMode: "contain", flex: 1 }}
                  />
                </View>

                <Text style={styles.infoContent}>
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>A -</Text> 1
                  circle (1st letter after{" "}
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>B</Text>)
                </Text>
                <Text style={styles.infoContent}>
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>N -</Text> 2
                  circle (2nd letter after{" "}
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>B</Text>)
                </Text>
                <Text style={styles.infoContent}>
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>A -</Text> 3
                  circle (3rd letter after{" "}
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>B</Text>)
                </Text>
                <Text style={styles.infoContent}>
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>N -</Text> 4
                  circle (4th letter after{" "}
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>B</Text>)
                </Text>
                <Text style={styles.infoContent}>
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>A -</Text> 5
                  circle (5th letter after{" "}
                  <Text style={{ fontFamily: "SpaceMono_700Bold" }}>B</Text>)
                </Text>

                <View
                  style={{
                    padding: 0,
                    height: 325,
                    padding: 40,
                    marginVertical: 15,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/rules/keydots.png")}
                    style={{
                      height: "100%",
                      width: "90%",
                      borderRightWidth: 1,
                      borderBottomWidth: 1,
                    }}
                  />
                </View>

                <Text style={styles.infoContent}>
                  If a word has more than 10 letters how do we do it? The cycle
                  starts all over again, however, the circles have an outline
                  instead of fill.
                </Text>

                <View
                  style={{
                    height: 150,
                    padding: 40,
                    marginVertical: 15,
                  }}
                >
                  <Image
                    source={require("../assets/rules/dots.png")}
                    style={{ width: "100%", resizeMode: "contain", flex: 1 }}
                  />
                </View>

                <Text style={styles.infoContent}>
                  There is so much more to learn and know about this language,
                  but for now this guide will help you!
                </Text>

                <Text style={[styles.infoContent, styles.saudation]}>
                  Thanks! ;)
                </Text>
              </View>
            </ScrollView>
          </View>
        )}

        {menuSelection == 1 && (
          <ScrollView>
            <Text style={styles.infoText}>
              <Text style={styles.infoTitle}>The Project</Text>
              {"\n"}
              <Text style={styles.infoContent}>
                The project focuses on creating a language that enables
                interaction between at least two individuals, using cryptology
                as a tool to translate words into forms.
              </Text>

              {"\n"}
              {"\n"}
              {"\n"}

              <Text style={styles.infoTitle}>The Authors</Text>
              {"\n"}
              <Text style={styles.infoContent}>
                Alexandre pinho
                {"\n"}
                Carlota Silva
                {"\n"}
                Diogo Ribeiro
              </Text>
            </Text>
          </ScrollView>
        )}
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
    paddingTop: 60,
    paddingBottom: 4,
  },
  baseTitle: {
    fontSize: 32,
    fontFamily: "SpaceMono_700Bold",
    color: "#1f1f1f",
  },
  infoText: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 4,
  },
  infoTitle: {
    fontFamily: "SpaceMono_700Bold",
    fontSize: 18,
    color: "#1f1f1f",
  },
  infoContent: {
    fontFamily: "SpaceMono_400Regular",
    fontSize: 16,
    color: "#1f1f1f",
  },
  backCont: {
    transform: [{ scaleX: -1 }],
    flexDirection: "row-reverse",
    marginHorizontal: 30,
    width: 30,
    marginTop: 5,
    paddingBottom: 10,
  },
  back: {
    width: 25,
    height: 25,
  },
  banana: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 50,
  },
  saudation: {
    fontFamily: "SpaceMono_700Bold",
    paddingTop: 40,
    paddingBottom: 80,
  },
});

export default AboutScreen;
