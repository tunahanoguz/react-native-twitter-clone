import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Button, Image, Text } from 'components';
import { Notifications, NotificationSettings } from 'screens';
import theme from 'theme';

function NotificationNavigation() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.navyBlue,
          // borderBottomWidth: 0.4,
          // borderBottomColor: theme.colors.divSBBorderGrey,
          elevation: 0,
        },
        headerTitleStyle: { color: theme.colors.white },
        headerTitleAlign: 'center',
        headerLeftContainerStyle: { marginLeft: 16 },
        headerRightContainerStyle: { marginRight: 16 },
        cardStyle: { backgroundColor: theme.colors.navyBlue },
        headerLeft: () => (
          <Image
            source={require('../../assets/images/avatar1.jpg')}
            width={34}
            height={34}
            borderRadius={100}
          />
        ),
        headerRight: () => (
          <Button onPress={() => navigation.navigate('NotificationSettings')}>
            <FeatherIcon name="settings" color={theme.colors.blue} size={20} />
          </Button>
        ),
      }}>
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: <Text fontSize={20}>Notifications</Text>,
          headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
        options={{
          title: <Text fontSize={20}>Notifications</Text>,
          headerTitleAlign: 'left',
        }}
      />
    </Stack.Navigator>
  );
}

export default NotificationNavigation;
