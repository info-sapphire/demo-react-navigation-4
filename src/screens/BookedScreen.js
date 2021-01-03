import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { Post } from '../components/Post'
import { DATA } from '../data'

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      booked: post.booked,
      date: post.date
    })
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA.filter(post => post.booked)}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  )
}

BookedScreen.navigationOptions = {
  headerTitle: 'Избранное',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="menu"
        onPress={() => console.log('Toggle drawer')}
      />
    </HeaderButtons>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
