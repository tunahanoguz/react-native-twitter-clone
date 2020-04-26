import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigation } from './src/navigations';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
