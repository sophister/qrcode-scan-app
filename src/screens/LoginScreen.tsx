import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const [isSmsLogin, setIsSmsLogin] = useState(true);

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', phoneNumber, isSmsLogin ? smsCode : password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>登录 / 注册</Text>
      <TextInput
        style={styles.input}
        placeholder="手机号"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      {isSmsLogin ? (
        <TextInput
          style={styles.input}
          placeholder="短信验证码"
          keyboardType="number-pad"
          value={smsCode}
          onChangeText={setSmsCode}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder="密码"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      )}
      <View style={styles.toggleButton}>
        <LinearGradient colors={['#007bff', '#ffbf0f']} style={styles.gradient}>
          <TouchableOpacity onPress={() => setIsSmsLogin(!isSmsLogin)} style={styles.button}>
            <Text style={styles.buttonText}>{isSmsLogin ? "使用密码登录" : "使用短信验证码登录"}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={{ marginVertical: 10 }} />
      <Button title="登录" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  toggleButton: {
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    color: 'white',
    backgroundColor: 'transparent',
  },
  gradient: {
    borderRadius: 20,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
}); 