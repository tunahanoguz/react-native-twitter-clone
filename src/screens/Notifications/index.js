import React, { useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Box, Text, Tweet } from 'components';
import NotificationItem from '../../components/NotificationItem';
import { tweets, users } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

function Notifications() {
  const [selectedItem, setSelectedItem] = useState(0);
  const menuItems = ['All', 'Mentions'];

  const notifications = [
    { id: 'not1', user: users[0], type: 'like' },
    { id: 'not2', user: users[1], type: 'follow' },
    { id: 'not3', user: users[2], type: 'retweet' },
    { id: 'not4', user: users[3], type: 'like' },
    { id: 'not5', user: users[4], type: 'follow' },
    { id: 'not6', user: users[5], type: 'retweet' },
    { id: 'not7', user: users[0], type: 'like' },
    { id: 'not8', user: users[1], type: 'follow' },
    { id: 'not9', user: users[2], type: 'retweet' },
  ];

  function renderNotificationList() {
    if (selectedItem === 0) {
      return (
        <FlatList
          data={notifications}
          renderItem={({ item, index }) => (
            <NotificationItem key={index} user={item.user} type={item.type} />
          )}
        />
      );
    } else {
      return (
        <FlatList
          data={tweets}
          renderItem={({ item, index }) => (
            <Tweet user={users[index]} tweet={item} />
          )}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => (
            <Box height={0.4} bg="divSBBorderGrey" />
          )}
          ListFooterComponent={() => (
            <>
              <Box height={0.4} bg="messageVBGrey" mb={7} />
              <Box
                alignSelf="center"
                width={3}
                height={3}
                bg="light"
                borderRadius={3}
              />
            </>
          )}
        />
      );
    }
  }

  return (
    <Box flex={1}>
      <Box
        flexDirection="row"
        borderBottomWidth={0.4}
        borderBottomColor="divSBBorderGrey">
        {menuItems.map((item, index) => {
          return (
            <Box
              as={TouchableOpacity}
              key={index}
              flex={0.5}
              py={4}
              borderBottomWidth={selectedItem === index ? 3 : 0}
              borderBottomColor="blue"
              activeOpacty={1}
              onPress={() => setSelectedItem(index)}>
              <Text
                color={selectedItem === index ? 'blue' : 'light'}
                fontSize={15}
                fontWeight="bold"
                textAlign="center">
                {item}
              </Text>
            </Box>
          );
        })}
      </Box>

      <SafeAreaView>{renderNotificationList()}</SafeAreaView>
    </Box>
  );
}

export default Notifications;
