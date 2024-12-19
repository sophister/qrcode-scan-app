import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const isLoggedIn = false; // This should be replaced with actual login state
  const userName = "未登录"; // Replace with actual user name if logged in

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isLoggedIn ? `昵称: ${userName}` : "未登录"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
}); 