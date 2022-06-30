import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {MainNavigator} from './src/navigation/main-navigator';
import {Provider} from './src/provider/provider-context';

export default function App() {
  return (
    <Provider>
      {Platform.OS === 'android' ? (
        <StatusBar backgroundColor="#fff" />
      ) : (
        <SafeAreaView style={{backgroundColor: '#fff'}} />
      )}
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
