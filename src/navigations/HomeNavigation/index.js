import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens';
import theme from 'theme';

function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.navyBlue,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.divSBBorderGrey,
          elevation: 0,
        },
        headerTitleStyle: { color: theme.colors.white },
        cardStyle: { backgroundColor: theme.colors.navyBlue },
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
