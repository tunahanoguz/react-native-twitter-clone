import React, { useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Box, Button, Text, ConversationItem } from 'components';
import { messages } from '../../constants';

function Messages({ navigation }) {
  return (
    <Box flex={1} bg="darkNavyBlue">
      <Box
        as={TouchableOpacity}
        flexDirection="row"
        alignItems="center"
        px={5}
        py={6}
        borderBottomWidth={0.4}
        borderBottomColor="divSBBorderGrey">
        <Icon name="envelope-o" size={18} color="#8799A3" />
        <Text color="white" fontSize={16} ml={3}>
          Message Requests
        </Text>
      </Box>

      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ConversationItem user={item.user} message={item.messages[0]} />
        )}
        ItemSeparatorComponent={() => <Box height={0.4} bg="divSBBorderGrey" />}
        ListFooterComponent={() => (
          <>
            <Box height={0.4} bg="divSBBorderGrey" mb={7} />
            <Box
              alignSelf="center"
              width={3}
              height={3}
              bg="light"
              borderRadius={3}
            />
          </>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Button
        position="absolute"
        bottom={66}
        right={7}
        padding={6}
        bg="blue"
        borderRadius={100}
        onPress={() => navigation.navigate('NewTweet')}>
        <Icon name="envelope" size={22} color="white" />
      </Button>
    </Box>
  );
}

export default Messages;
