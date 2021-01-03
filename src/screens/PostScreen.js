import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Alert
} from 'react-native'

import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  const post = DATA.find(post => post.id === postId)

  Alert.alert(
    'Удаление поста',
    'Вы точно хотите удалить пост?',
    [
      { text: 'Отмена', style: 'cancel' },
      {
        text: 'Удалить',
        style: 'destructive',
        onPress: () => {}
      }
    ],
    { cancelable: false }
  )

  return (
    <ScrollView style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date')

  return {
    headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
    headerStyle: {
      backgroundColor: THEME.DANGER_COLOR
    },
    headerTintColor: '#fff'
  }
}

const styles = StyleSheet.create({
  wrapper: {},

  image: {
    width: '100%',
    height: 200
  },

  textWrap: {
    padding: 10
  },

  title: {
    fontFamily: 'open-regular'
  }
})
