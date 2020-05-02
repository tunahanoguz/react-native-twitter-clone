import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Box, Image, Text } from '../shared';

function ConversationItem({ user, message }) {
  const { fullName, username, profilePicture } = user;
  const { body, date } = message;

  return (
    <Box flexDirection="row" px={4} py={6} bg="navyBlue">
      <Box flex={0.2}>
        <Image
          source={profilePicture}
          width={56}
          height={56}
          mr={4}
          borderRadius={100}
        />
      </Box>

      <Box flex={0.8}>
        <Box flexDirection="row" justifyContent="space-between">
          <Box flexDirection="row">
            <Text fontWeight="bold">{fullName}</Text>
            <Text color="light">
              {' '}
              @{username.length > 10 ? username.slice(0, 6) + '...' : username}
            </Text>
          </Box>
          <Text color="light">{moment(date).format('LL')}</Text>
        </Box>
        <Text color="light">{body}</Text>
      </Box>
    </Box>
  );
}

ConversationItem.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profilePicture: PropTypes.number.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

ConversationItem.defaultTypes = {};

export default ConversationItem;
