import React from 'react';
import { Box, Icon, Modal, Text } from 'components';

function TweetDisplaySettingsModal() {
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
          mt={1}
          bg="messageVBGrey"
          borderRadius={100}
        />

        <Box alignItems="center" mt={14}>
          <Icon name="zap" size={40} color="blue" />
        </Box>

        <Text fontSize={18} fontWeight="bold" textAlign="center" mt={8} mb={5}>
          Home shows you top Tweets first
        </Text>

        <Box height={0.4} mb={8} bg="divSBBorderGrey" />

        <Box px={12}>
          <Box flexDirection="row" mb={15}>
            <Box flex={0.14} justifyContent="flex-start">
              <Icon name="trending-up" size={24} color="light" />
            </Box>
            <Box flex={0.86}>
              <Text fontSize={18} fontWeight="600">
                See latest Tweets instead
              </Text>
              <Text fontSize={13} color="light">
                You'll be switched back Home after you've been away for a while.
              </Text>
            </Box>
          </Box>

          <Box flexDirection="row" mb={15}>
            <Box flex={0.14} justifyContent="flex-start">
              <Icon name="settings" size={24} color="light" />
            </Box>
            <Box flex={0.86}>
              <Text fontSize={18} fontWeight="600">
                View content preferences
              </Text>
            </Box>
          </Box>

          {/*<Box flexDirection="row" alignItems="center" mb={15}>*/}
          {/*  <Icon name="volume-x" size={24} color="light" mr={8} />*/}
          {/*  <Text fontSize={18}>Mute @{username}</Text>*/}
          {/*</Box>*/}

          {/*<Box flexDirection="row" alignItems="center" mb={15}>*/}
          {/*  <Icon name="slash" size={24} color="light" mr={8} />*/}
          {/*  <Text fontSize={18}>Block @{username}</Text>*/}
          {/*</Box>*/}

          {/*<Box flexDirection="row" alignItems="center" mb={8}>*/}
          {/*  <Icon name="flag" size={24} color="light" mr={8} />*/}
          {/*  <Text fontSize={18}>Report Tweet</Text>*/}
          {/*</Box>*/}
        </Box>
      </Box>
    </Modal>
  );
}

export default TweetDisplaySettingsModal;
