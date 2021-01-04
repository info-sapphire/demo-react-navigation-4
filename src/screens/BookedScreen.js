import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      booked: post.booked,
      date: post.date
    })
  }

  const bookedPosts = useSelector(state => state.post.bookedPosts)

  return <PostList data={bookedPosts} onOpen={openPostHandler} />
}

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Избранное',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})
