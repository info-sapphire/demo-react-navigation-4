import React, { useState } from 'react'
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

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const img =
    'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

  const saveHandler = () => {
    dispatch(
      addPost({
        text,
        img,
        date: new Date().toJSON()
      })
    )
    setText('')
    navigation.navigate('Main')
  }

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
          <Image style={styles.image} source={{ uri: img }} />
          <Button
            title="Создать заметку"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
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
