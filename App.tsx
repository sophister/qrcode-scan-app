import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ScannerScreen from './src/screens/ScannerScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScannerScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
