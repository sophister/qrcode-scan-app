import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
import { Button } from 'react-native';

export default function WebViewScreen({ navigation }) {
  const route = useRoute();
  const { url } = route.params as { url: string };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="返回" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
}); 