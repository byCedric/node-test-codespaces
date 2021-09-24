import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Icon = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Icon} style={{ width: 100, height: 100 }} />
      <Text>Hello from Codespaces!</Text>
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
