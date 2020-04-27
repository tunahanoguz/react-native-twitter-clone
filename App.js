import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './src/navigations';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.barNavyBlue} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
