import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomBar from "./Components/BottomBar"
import HomeScreen from "./Pages/Homescreen.js"
import AboutScreen from "./Pages/AboutScreen.js"
import GalleryScreen from "./Pages/GalleryScreen"
import KeysScreen from "./Pages/KeysScreen"
import WriteScreen from "./Pages/WriteScreen"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
       <Tab.Navigator initialRouteName="Home" tabBar={(props) => <BottomBar {...props} />}>
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Keys" component={KeysScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Write" component={WriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

 