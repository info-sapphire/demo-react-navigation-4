import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AboutScreen = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text>AboutScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
