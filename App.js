import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ImageView from "./screens/ImageView";
import VideoView from "./screens/VideoView";

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 16, color: "#fff", top: hp("5%") },
          tabBarItemStyle: { height: hp("20%") },
          tabBarStyle: { backgroundColor: "#00693e" },
        }}
      >
        <Tab.Screen name="IMAGES" component={ImageView} />
        <Tab.Screen name="VIDEOS" component={VideoView} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
