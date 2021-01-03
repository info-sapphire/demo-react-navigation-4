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
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  const post = DATA.find(post => post.id === postId)

  // useEffect(() => {
  //   navigation.setParams({ booked: post.booked })
  // }, [])

  const removeHandler = () => {
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
  }

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
  const booked = navigation.getParam('booked')
  const IconName = booked ? 'ios-star' : 'ios-star-outline'

  return {
    headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
    headerStyle: {
      backgroundColor: THEME.DANGER_COLOR
    },
    headerTintColor: '#fff',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo"
          color="#fff"
          iconName={IconName}
          onPress={() => console.log('Press photo')}
        />
      </HeaderButtons>
    )
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
