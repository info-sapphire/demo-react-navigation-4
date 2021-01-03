import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Text>MainScreen</Text>
      <Button
        title="Go to post"
        onPress={() => {
          navigation.navigate('Post')
        }}
      />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'Мой блог'
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
