import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Box, Image, SearchInput, Button, Text, Icon } from 'components';
import {
  Search,
  TopTrends,
  ExploreSettings,
  ExploreLocations,
  TrendInner,
  Notifications,
} from 'screens';
import theme from 'theme';

function SearchNavigation() {
  const navigation = useNavigation();
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
        headerTitle: () => (
          <SearchInput
            flex={1}
            alignSelf="center"
            my={4}
            px={4}
            py={1}
            width="200%"
            height={38}
            bg="darkNavyBlue"
            color="white"
            placeholder="Search Twitter"
            placeholderTextColor="#8799A3"
            borderWidth={0.4}
            borderColor="divSBBorderGrey"
            borderRadius={100}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ExploreSettings')}>
            <FeatherIcon name="settings" color={theme.colors.blue} size={20} />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="TopTrends" component={TopTrends} />
      <Stack.Screen
        name="TrendInner"
        component={TrendInner}
        options={({ route }) => ({
          headerTitle: () => (
            <SearchInput
              flex={1}
              alignSelf="center"
              ml={17}
              mr={4}
              my={4}
              px={4}
              py={1}
              width="120%"
              height={38}
              bg="darkNavyBlue"
              color="white"
              value={`"${route.params.title}"`}
              placeholder="Search Twitter"
              placeholderTextColor="#8799A3"
              borderWidth={0.4}
              borderColor="divSBBorderGrey"
              borderRadius={100}
            />
          ),
          headerRight: () => (
            <Box flexDirection="row" alignItems="center">
              <Button
                onPress={() => navigation.navigate('TrendInnerPrefModal')}
                mr={8}>
                <FeatherIcon
                  name="sliders"
                  color={theme.colors.blue}
                  size={20}
                />
              </Button>

              <Button onPress={() => navigation.navigate('TrendInnerSetModal')}>
                <FeatherIcon
                  name="more-vertical"
                  color={theme.colors.blue}
                  size={24}
                />
              </Button>
            </Box>
          ),
          headerTitleAlign: 'left',
        })}
      />
      <Stack.Screen
        name="ExploreSettings"
        component={ExploreSettings}
        options={{
          headerLeft: () => (
            <Button onPress={() => navigation.pop()}>
              <Icon name="arrow-left" size={24} color="blue" />
            </Button>
          ),
          headerTitle: () => (
            <>
              <Text fontSize={20} fontWeight="bold">
                Explore Settings
              </Text>
              <Text color="light">@tunahanog</Text>
            </>
          ),
          headerTitleAlign: 'left',
          headerRight: null,
        }}
      />
      <Stack.Screen
        name="ExploreLocations"
        component={ExploreLocations}
        options={{
          headerTitle: () => (
            <Text fontSize={19} fontWeight="bold">
              Explore Locations
            </Text>
          ),
          headerTitleAlign: 'left',
          headerRight: null,
        }}
      />
    </Stack.Navigator>
  );
}

export default SearchNavigation;
