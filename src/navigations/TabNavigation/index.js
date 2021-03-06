import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HomeNavigation from '../HomeNavigation';
import SearchNavigation from '../SearchNavigation';
import NotificationNavigation from '../NotificationNavigation';
import MessageNavigation from '../MessageNavigation';
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
      <Tab.Screen
        name="Search"
        component={SearchNavigation}
        options={({ route }) => {
          let routeIndex;
          let isBarVisible;

          if (route.state) {
            routeIndex = route.state.index;
            isBarVisible = route.state.routeNames[routeIndex] !== 'TopTrends';
          }

          return {
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
            tabBarVisible: isBarVisible,
          };
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationNavigation}
        options={({ route }) => {
          let routeIndex;
          let isBarVisible;

          if (route.state) {
            routeIndex = route.state.index;
            isBarVisible = route.state.routeNames[routeIndex] !== 'TopTrends';
          }

          return {
            tabBarIcon: ({ color, size }) => (
              <Icon name="bell" color={color} size={size} />
            ),
            tabBarVisible: isBarVisible,
          };
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageNavigation}
        options={({ route }) => {
          let routeIndex;
          let isBarVisible;

          if (route.state) {
            routeIndex = route.state.index;
            isBarVisible = route.state.routeNames[routeIndex] !== 'TopTrends';
          }

          return {
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="envelope-o" color={color} size={size} />
            ),
            tabBarVisible: isBarVisible,
          };
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
