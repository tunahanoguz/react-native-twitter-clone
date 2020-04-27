import React from 'react';
import { Box, Icon, Modal, Text } from 'components';

function TweetModal({ route }) {
  const { user, tweet } = route.params;
  const { username } = user;

  return (
    <Modal>
      <Box
        position="absolute"
        bottom={0}
        width="100%"
        borderTopStartRadius={15}
        borderTopEndRadius={15}
        bg="navyBlue">
        <Box
          alignSelf="center"
          width={36}
          height={6}
          mt={0}
          bg="messageVBGrey"
          borderRadius={100}
        />

        <Box px={12}>
          <Box flexDirection="row" alignItems="center" mt={13} mb={15}>
            <Icon name="frown" size={24} color="light" mr={8} />
            <Text fontSize={18}>Not interested in this</Text>
          </Box>

          <Box flexDirection="row" alignItems="center" mb={15}>
            <Icon name="user-plus" size={24} color="light" mr={8} />
            <Text fontSize={18}>Follow @{username}</Text>
          </Box>

          <Box flexDirection="row" alignItems="center" mb={15}>
            <Icon name="volume-x" size={24} color="light" mr={8} />
            <Text fontSize={18}>Mute @{username}</Text>
          </Box>

          <Box flexDirection="row" alignItems="center" mb={15}>
            <Icon name="slash" size={24} color="light" mr={8} />
            <Text fontSize={18}>Block @{username}</Text>
          </Box>

          <Box flexDirection="row" alignItems="center" mb={8}>
            <Icon name="flag" size={24} color="light" mr={8} />
            <Text fontSize={18}>Report Tweet</Text>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default TweetModal;
