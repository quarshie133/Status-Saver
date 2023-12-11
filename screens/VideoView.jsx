import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function ImageView({ navigation }) {
    return (
        <View>
            <Text>Video View</Text>
            <Button
        title="Go to Video"
        onPress={() => navigation.navigate("ImageView")}
      />
        </View>
    );
}

export default ImageView;