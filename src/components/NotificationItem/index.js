import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Icon, Image, Text } from 'components';

function NotificationItem({ user, type }) {
  function notificationClause() {
    if (type === 'like') {
      return ' liked your tweet.';
    } else if (type === 'follow') {
      return ' followed you.';
    } else {
      return ' retweeted your tweet.';
    }
  }

  function icon() {
    if (type === 'like') {
      return 'heart';
    } else if (type === 'follow') {
      return 'user';
    } else {
      return 'repeat';
    }
  }

  function iconColor() {
    if (type === 'like') {
      return 'pink';
    } else if (type === 'follow') {
      return 'blue';
    } else {
      return 'green';
    }
  }

  return (
    <Button
      flexDirection="row"
      py={4}
      px={16}
      borderBottomWidth={0.4}
      borderBottomColor="divSBBorderGrey"
      activeOpacity={0.6}>
      <Icon name={icon()} type="Entypo" size={22} color={iconColor()} mr={5} />

      <Box>
        <Box flexDirection="row">
          <Image
            source={user.profilePicture}
            width={34}
            height={34}
            mb={2}
            mr={1}
            borderRadius={100}
          />
        </Box>

        <Box flexDirection="row">
          <Text fontWeight="bold">{user.fullName}</Text>
          <Text>{notificationClause()}</Text>
        </Box>
      </Box>
    </Button>
  );
}

NotificationItem.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profilePicture: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default NotificationItem;
