import React from 'react';
import {Routes} from './src/routes';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar hidden={true} />
        <Routes />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
