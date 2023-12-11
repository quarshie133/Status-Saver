import { StyleSheet, Text, View, Button } from "react-native";

function ImageView({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Image View</Text>
      <Button
        title="Go to Video"
        onPress={() => navigation.navigate("VideoView")}
      />
    </View>
  );
}

export default ImageView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
