import React from 'react';
import {Routes} from './src/routes';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  );
};
