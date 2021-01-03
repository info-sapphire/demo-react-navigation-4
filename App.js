import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'

import { bootstrap } from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={() => console.error('onError')}
        onFinish={() => setIsReady(true)}
        autoHideSplash
      />
    )
  }

  return <AppNavigation />
}
