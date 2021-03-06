import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native'

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.wrapper}>
        <ImageBackground style={styles.image} source={{ uri: post.image }}>
          <View style={styles.text}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    overflow: 'hidden'
  },

  image: {
    width: '100%',
    height: 200
  },

  text: {
    width: '100%',
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  title: {
    color: '#fff',
    fontFamily: 'open-regular'
  }
})
