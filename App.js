import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
