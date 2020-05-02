import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NewTweet,
  TweetModal,
  TrendModal,
  TweetDisplaySettingsModal,
  TrendInnerPrefModal,
  TrendInnerSetModal,
} from 'screens';
import TabNavigation from '../TabNavigation';
import SearchNavigation from '../SearchNavigation';

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
        name="Search"
        component={SearchNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewTweet"
        component={NewTweet}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          cardOverlayEnabled: true,
        }}
      />
      <Stack.Screen
        name="TweetDisplaySettingsModal"
        component={TweetDisplaySettingsModal}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          cardOverlayEnabled: true,
        }}
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
      <Stack.Screen
        name="TrendModal"
        component={TrendModal}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          cardOverlayEnabled: true,
        }}
      />
      <Stack.Screen
        name="TrendInnerPrefModal"
        component={TrendInnerPrefModal}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          cardOverlayEnabled: true,
        }}
      />
      <Stack.Screen
        name="TrendInnerSetModal"
        component={TrendInnerSetModal}
        options={{
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
