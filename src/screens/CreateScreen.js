import React, { useState, useRef } from 'react'
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  Button,
  ScrollView,
  Keyboard,
  View
} from 'react-native'
import { useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import { addPost } from '../store/actions/post'
import { PhotoPicker } from '../components/PhotoPicker'

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState('')
  const imgRef = useRef()
  const dispatch = useDispatch()

  const saveHandler = () => {
    dispatch(
      addPost({
        text: text,
        image: imgRef.current,
        date: new Date().toJSON()
      })
    )
    setText('')
    navigation.navigate('Main')
  }

  const photoPickHandler = uri => (imgRef.current = uri)

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создать новый пост</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Введите текст заметки"
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title="Создать заметку"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Создать пост',
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

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10
  },

  textarea: {
    padding: 10,
    marginBottom: 10
  },

  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  }
})
