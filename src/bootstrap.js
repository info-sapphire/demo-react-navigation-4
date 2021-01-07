import * as Font from 'expo-font'
import { DB } from './db'

export async function bootstrap() {
  try {
    await Promise.all([
      Font.loadAsync({
        'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
        'open-bold': require('../assets/fonts/OpenSans-Bold.ttf')
      }),
      DB.init()
    ])
  } catch (error) {
    console.error(error)
  }
}
