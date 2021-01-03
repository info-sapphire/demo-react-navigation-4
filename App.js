import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'

import { bootstrap } from './src/bootstrap';

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

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
