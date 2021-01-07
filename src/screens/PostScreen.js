import React, { useEffect, useCallback } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'

import { THEME } from '../theme'
import { removePost, toggleBooked } from '../store/actions/post'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  const post = useSelector(state =>
    state.post.allPosts.find(post => post.id === postId)
  )

  const dispatch = useDispatch()

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post))
  }, [dispatch, post])

  useEffect(() => {
    navigation.setParams({ toggleHandler })
  }, [toggleHandler])

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  )

  useEffect(() => {
    navigation.setParams({ booked })
  }, [booked])

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        { text: 'Отмена', style: 'cancel' },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress() {
            navigation.navigate('Main')
            dispatch(removePost(postId))
          }
        }
      ],
      { cancelable: false }
    )
  }

  if (!post) {
    return null
  }

  return (
    <ScrollView style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: post.image }} />
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
  const toggleHandler = navigation.getParam('toggleHandler')
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
          onPress={toggleHandler}
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
