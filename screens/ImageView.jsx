import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Platform,
  Alert,
} from "react-native";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system"
import * as ImagePicker from "expo-image-picker";

function ImageView({ navigation }) {
  const [ storagePermission, setStoragePermission ] = useState(false);
  const [ storageDirectory, setStorageDirectory ] = useState(null);

  const checkStoragePermission = async () => {
    const { status } = await  Permissions.getAsync(Permissions.MEDIA_LIBRARY);

    if (status !== "granted") {
      // console.log("Permission denied");
      Alert.alert("Permission denied");
    } else {
      const directory = await FileSystem.getInfoAsync(FileSystem.documentDirectory)
      setStorageDirectory(directory.uri)
      // Alert.alert("Permission granted");
      console.log('Permission granted. Storage Directory:', directory.uri);
    }
  };
  useEffect(() => {
    checkStoragePermission();
  }, []);

  // Permissions.getAsync(Permissions.MEDIA_LIBRARY);
// MediaLibrary.requestPermissionsAsync();
  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: false,
  //   });
  //   if (!result.canceled) {
  //     setImage(result.uri);
  //   }
  // };

  const [fontsLoaded] = useFonts({
    KumbhSans: require("../assets/fonts/KumbhSans-SemiBold.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    Monts_Black: require("../assets/fonts/Montserrat-Bold.ttf"),
    // KumbhSans: require("../assets/fonts/KumbhSans-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
       {storagePermission ? (
        <View>
          <Text>Storage Permission Granted</Text>
          {/* <Text>Storage Directory: {storageDirectory}</Text> */}
          {/* Your application UI */}
        </View>
      ) : (
        // <Text>Waiting for Storage Permission...</Text>
    <Button title="request permissions" onPress={storageDirectory
    } />

      )}
    </View>
  );
}

export default ImageView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
