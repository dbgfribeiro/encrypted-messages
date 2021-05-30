import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

const icons = [
  require("../assets/bottombar/about.png"),
  require("../assets/bottombar/keys.png"),
  require("../assets/bottombar/home.png"),
  require("../assets/bottombar/gallery.png"),
  require("../assets/bottombar/write.png"),
];

const BottomBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.button}
          >
            <Image
              style={[
                isFocused ? { opacity: 1} : { opacity: 0.5 },
                styles.buttonImg,
              ]}
              source={icons[index]}
            />
            <View
            style={[
              isFocused ? { opacity: 1} : { opacity: 0},
              styles.buttonUnderline,
              ]}
/>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonImg: {
    width: 25,
    height: 25,
  },
  buttonUnderline:{
    backgroundColor:'#1f1f1f',
    width:35,
    height:3,
    marginTop:10,
    marginLeft:-35
  },

  mainContainer: {
    backgroundColor: "#EDEDED",
    flexDirection: "row",
    //height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 35,

    shadowColor: "#1F1F1F",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 50,
  },
});

export default BottomBar;
