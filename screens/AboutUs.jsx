import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text>AboutUs</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
      justifyContent: "center",
    },
  });
  