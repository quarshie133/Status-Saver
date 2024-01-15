import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// Responsiveness
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";

import Ionicons from "@expo/vector-icons/Ionicons";

// Components
import ImageView from "./screens/ImageView";
import VideoView from "./screens/VideoView";
import AboutUs from "./screens/AboutUs";
import Share from "./screens/Share";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

function Home() {
  const [fontsLoaded] = useFonts({
    KumbhSans: require("./assets/fonts/KumbhSans-SemiBold.ttf"),
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    Monts_Black: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: { height: hp("7%"), top: "18%" },
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: "Montserrat",
          color: "#fff",
        },
        tabBarStyle: { backgroundColor: "#00693e" },
      }}
    >
      <Tab.Screen
        name="IMAGES"
        component={ImageView}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Ionicons name="camera-sharp" color="#fff" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="VIDEOS"
        component={VideoView}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Ionicons name="videocam-sharp" color="#fff" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    KumbhSans: require("./assets/fonts/KumbhSans-SemiBold.ttf"),
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    Monts_Black: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: "",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#00693e" },
          drawerType: "slide",
          drawerLabelStyle: {
            color: "#000",
            fontSize: 16,
            fontFamily: "Montserrat",
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="About us"
          component={AboutUs}
          options={{
            drawerActiveBackgroundColor: { backgroundColor: "black" },
          }}
        />
        <Drawer.Screen name="Share" component={VideoView} />
      </Drawer.Navigator>
      <StatusBar style="dark" />
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

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarLabelStyle: { fontSize: 16, color: "#fff", top: hp("5%") },
//           tabBarItemStyle: { height: hp("20%") },
//           tabBarStyle: { backgroundColor: "#00693e" },

//         }}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen
//           name="IMAGES"
//           component={ImageView}
//           options={{ tabBarLabel: "IMAGES" }}
//         />
//         <Tab.Screen
//           name="VIDEOS"
//           component={VideoView}
//           options={{ tabBarLabel: "VIDEOS" }}
//         />
//       </Tab.Navigator>
//       <StatusBar style="light" />
//     </NavigationContainer>
//   );
// }
