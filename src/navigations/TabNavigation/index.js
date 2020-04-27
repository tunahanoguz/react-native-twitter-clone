import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import HomeNavigation from '../HomeNavigation';
import theme from '../../theme';

function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: theme.colors.navyBlue,
          elevation: 0,
          borderTopWidth: 0.4,
          borderTopColor: theme.colors.bottomTabBorderGrey,
          position: 'absolute',
          bottom: 0,
          left: 0,
        },
        showLabel: false,
      }}
      activeTintColor={theme.colors.blue}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
