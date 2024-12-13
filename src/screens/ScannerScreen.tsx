import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import { CameraView, Camera } from 'expo-camera';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [cameraRef, setCameraRef] = useState<CameraView | null>(null);

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
        await Linking.openURL(data);
      } else {
        alert(`二维码内容：${data}`);
      }
    } catch (error) {
      alert('无法打开链接：' + data);
    }
  };

  if (hasPermission === null) {
    return <Text>请求相机权限中...</Text>;
  }
  if (hasPermission === false) {
    return <Text>没有相机权限</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={ref => setCameraRef(ref)}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />
      {scanned && (
        <Button title="点击继续扫描" onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scanner: {
    flex: 1,
    width: '100%',
  },
}); 