import React, { useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { loadPosts } from '../store/actions/post'

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      booked: post.booked,
      date: post.date
    })
  }

  const allPosts = useSelector(state => state.post.allPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  return <PostList data={allPosts} onOpen={openPostHandler} />
}

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Мой блог',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => navigation.navigate('Create')}
      />
    </HeaderButtons>
  )
})
