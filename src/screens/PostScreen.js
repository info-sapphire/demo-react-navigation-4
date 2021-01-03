import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { THEME } from '../theme'

export const PostScreen = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text>PostScreen</Text>
    </View>
  )
}

PostScreen.navigationOptions = {
  headerTitle: 'Пост номер 42',
  headerStyle: {
    backgroundColor: THEME.DANGER_COLOR
  },
  headerTintColor: '#fff'
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
