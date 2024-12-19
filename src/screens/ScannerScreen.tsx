import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    try {
      if (data.startsWith('http://') || data.startsWith('https://')) {
        navigation.navigate('WebViewScreen', { url: data });
      } else {
        alert(`二维码内容：${data}`);
      }
    } catch (error) {
      alert('无法打开链接：' + data);
    }
    setCameraActive(false);
  };

  if (hasPermission === null) {
    return <Text>请求相机权限中...</Text>;
  }
  if (hasPermission === false) {
    return <Text>没有相机权限</Text>;
  }

  return (
    <View style={styles.container}>
      {!cameraActive ? (
        <Button title="打开相机" onPress={() => setCameraActive(true)} />
      ) : (
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
      )}
      {scanned && (
        <Button title="点击继续扫描" onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanner: {
    flex: 1,
    width: '100%',
  },
}); 