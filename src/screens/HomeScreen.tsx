import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleTakePhoto = () => {
    // 跳转到 ScannerScreen 页面
    navigation.navigate('ScannerScreen');
  };

  return (
    <View style={styles.container}>
      <Button title="立即拍照" onPress={handleTakePhoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 