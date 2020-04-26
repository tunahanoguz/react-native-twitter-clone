import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigation } from './src/navigations';

function App() {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
}

export default App;
