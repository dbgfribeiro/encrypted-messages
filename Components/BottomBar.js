import React from 'react';
import { StyleSheet,
        TouchableOpacity,
        View, 
        Image,
        Text } from 'react-native';

const icons = [
    require("../assets/bottombar/about.png"),
    require("../assets/bottombar/keys.png"),
    require("../assets/bottombar/home.png"),
    require("../assets/bottombar/gallery.png"),
    require("../assets/bottombar/write.png"),
]

const BottomBar = ({ state, descriptors, navigation }) => {

    return (
        <View
      style={styles.mainContainer}
    >
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
              style={isFocused ? {opacity:1} : {opacity:0.5}}
              source={icons[index]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1, 
        alignItems: "center" 
    },
    mainContainer:{
        flexDirection: "row",
        height: 88,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#EDEDED"
      }
})

export default BottomBar;