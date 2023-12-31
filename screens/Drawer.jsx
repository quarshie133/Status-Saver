
import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUs from './AboutUs';
import Share from './Share';


const Drawer = createDrawerNavigator();

export default function Draw() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="AboutUs" component={AboutUs}/>
        <Drawer.Screen name="Share" component={Share}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}