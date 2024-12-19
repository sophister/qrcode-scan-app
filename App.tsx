import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import WebViewScreen from './src/screens/WebViewScreen';

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

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <RootStack.Screen 
          name="ScannerScreen" 
          component={ScannerScreen} 
          options={{ title: '扫描器' }}
        />
        <RootStack.Screen 
          name="WebViewScreen" 
          component={WebViewScreen} 
          options={{ headerShown: true }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
