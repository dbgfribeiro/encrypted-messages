import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  SpaceMono_400Regular,
  SpaceMono_700Bold,
} from "@expo-google-fonts/space-mono";

import BottomBar from "./Components/BottomBar";
import HomeScreen from "./Pages/HomeScreen.js";
import AboutScreen from "./Pages/AboutScreen.js";
import GalleryScreen from "./Pages/GalleryScreen";
import KeysScreen from "./Pages/KeysScreen";
import WriteScreen from "./Pages/WriteScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <BottomBar {...props} />}
      >
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Keys" component={KeysScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Write" component={WriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
