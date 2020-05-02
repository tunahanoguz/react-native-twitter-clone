import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Box, Text, SettingsItem } from 'components';

function MessagesSettings({ navigation }) {
  const [isReceiveRequest, setIsReceiveRequest] = useState(true);
  const [isShowRead, setIsShowRead] = useState(true);
  const [isQualityFilter, setIsQualityFilter] = useState(true);

  const directMessageSettings = [
    {
      id: 1,
      title: 'Receive message requests',
      description:
        "You will be able to receive Direct Message requests from anyone on Twitter, even if you don't follow them.",
      type: 'switch',
      isActive: isReceiveRequest,
      setIsActive: setIsReceiveRequest,
    },
    {
      id: 2,
      title: 'Show read receipts',
      description:
        "When someone sends you a message, people in the conversation will know when you've seen it. If you turn off this setting, you won't be able to see read receipts from others.",
      type: 'switch',
      isActive: isShowRead,
      setIsActive: setIsShowRead,
    },
    {
      id: 3,
      title: 'Receive message requests',
      description:
        "You will be able to receive Direct Message requests from anyone on Twitter, even if you don't follow them.",
      type: 'switch',
      isActive: isQualityFilter,
      setIsActive: setIsQualityFilter,
    },
  ];

  const notificationSetting = {
    id: 'not1',
    title: 'Push notifications',
    description: '',
  };

  return (
    <Box bg="darkNavyBlue">
      <Text color="light" fontSize={16} fontWeight="bold" mt={16} mb={5} ml={7}>
        Direct Messages
      </Text>

      <FlatList
        data={directMessageSettings}
        renderItem={({ item }) => (
          <SettingsItem
            title={item.title}
            description={item.description}
            type={item.type}
            isActive={item.isActive}
            setIsActive={item.setIsActive}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text color="light" fontSize={16} fontWeight="bold" mt={12} mb={7} ml={7}>
        Personalization
      </Text>

      <SettingsItem
        title={notificationSetting.title}
        description={notificationSetting.description}
      />
    </Box>
  );
}

export default MessagesSettings;
