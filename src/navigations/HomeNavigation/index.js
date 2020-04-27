import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Modal, Image } from 'components';
import { Home } from '../../screens';
import theme from 'theme';

function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.navyBlue,
          borderBottomWidth: 0.4,
          borderBottomColor: theme.colors.divSBBorderGrey,
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
          <FeatherIcon name="zap" color={theme.colors.blue} size={20} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: (
            <EntypoIcon name="twitter" color={theme.colors.blue} size={24} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
