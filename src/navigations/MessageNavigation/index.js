import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Button, Image, Text } from 'components';
import { Messages, MessagesSettings } from 'screens';
import theme from 'theme';

function MessageNavigation() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.navyBlue,
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
          <Button onPress={() => navigation.navigate('MessagesSettings')}>
            <FeatherIcon name="settings" color={theme.colors.blue} size={20} />
          </Button>
        ),
      }}>
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{
          title: <Text fontSize={20}>Messages</Text>,
          headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="MessagesSettings"
        component={MessagesSettings}
        options={{
          title: <Text fontSize={20}>Direct Messages</Text>,
          headerTitleAlign: 'left',
          headerRight: null,
        }}
      />
    </Stack.Navigator>
  );
}

export default MessageNavigation;
