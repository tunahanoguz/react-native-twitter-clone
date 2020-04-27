import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TweetModal } from 'screens';
import TabNavigation from '../TabNavigation';

function RootNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Modal"
        component={TweetModal}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          cardOverlayEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
