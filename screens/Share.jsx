import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Share() {
  return (
    <View style={styles.container}>
      <Text>Share</Text>
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
  