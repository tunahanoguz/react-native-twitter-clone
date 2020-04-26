import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens';

function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
