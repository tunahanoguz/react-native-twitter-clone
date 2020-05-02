import React, { useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Box, Text, Switch, Button } from 'components';
import { SafeAreaView } from 'react-native-safe-area-context';

function NotificationSettings({ navigation }) {
  const [isLocationActive, setIsLocationActive] = useState(true);
  const [isPersonalizationActive, setIsPersonalizationActive] = useState(true);

  const filters = [
    {
      id: 'filter1',
      title: 'Quality Filter',
      description:
        "Filter lower-quality content from your notifications. This won't filter out notifications from people you follow or accounts you've interacted with recently.",
    },
    {
      id: 'filter2',
      title: 'Advanced filters',
    },
    {
      id: 'filter3',
      title: 'Muted words',
    },
  ];

  const preferences = [
    {
      id: 'preference1',
      title: 'Unread notification count badge',
      description:
        'Displays a badge with the number of notifications waiting for you inside the Twitter app.',
    },
    {
      id: 'preference2',
      title: 'Push notifications',
    },
    {
      id: 'preference3',
      title: 'SMS notifications',
    },
    {
      id: 'preference4',
      title: 'Email notifications',
      description: 'Control when and how often Twitter sends emails to you.',
    },
  ];

  return (
    <Box flex={1} bg="darkNavyBlue">
      <SafeAreaView>
        <Text color="light" fontSize={16} fontWeight="bold" my={5} ml={7}>
          Filters
        </Text>

        <FlatList
          data={filters}
          renderItem={({ item }) => (
            <Button
              key={item.id}
              as={TouchableOpacity}
              px={7}
              py={5}
              bg="navyBlue"
              activeOpacity={1}
              borderBottomWidth={0.4}
              borderBottomColor="divSBBorderGrey"
              onPress={() => setIsLocationActive((value) => !value)}>
              <Box>
                <Text fontSize={16}>{item.title}</Text>
                {item.description && (
                  <Text fontSize={14} color="light" lineHeight="20px">
                    {item.description}
                  </Text>
                )}
              </Box>
            </Button>
          )}
        />

        <Text
          color="light"
          fontSize={16}
          fontWeight="bold"
          mt={14}
          mb={5}
          ml={7}>
          Preferences
        </Text>

        <FlatList
          data={preferences}
          renderItem={({ item }) => (
            <Button
              key={item.id}
              as={TouchableOpacity}
              flexDirection="row"
              alignItems="center"
              px={7}
              py={5}
              bg="navyBlue"
              activeOpacity={1}
              borderBottomWidth={0.4}
              borderBottomColor="divSBBorderGrey"
              onPress={() => setIsPersonalizationActive((value) => !value)}>
              <Box>
                <Text fontSize={16}>{item.title}</Text>
                {item.description && (
                  <Text fontSize={14} color="light" lineHeight="20px">
                    {item.description}
                  </Text>
                )}
              </Box>
            </Button>
          )}
        />
      </SafeAreaView>
    </Box>
  );
}

export default NotificationSettings;
