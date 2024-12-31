import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import ScannerScreen from '../screens/ScannerScreen';
import WebViewScreen from '../screens/WebViewScreen';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="首页" component={HomeScreen} />
      <Tab.Screen name="我的" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <RootStack.Screen name="Login" component={LoginScreen} options={{ title: '登录' }} />
      <RootStack.Screen name="ScannerScreen" component={ScannerScreen} options={{ title: '扫描器' }} />
      <RootStack.Screen name="WebViewScreen" component={WebViewScreen} options={{ headerShown: true }} />
    </RootStack.Navigator>
  );
} 