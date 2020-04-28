import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { Box, Text, Image, Icon, Modal } from 'components';

function Tweet({ user, tweet }) {
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fullName, username, profilePicture } = user;
  const { text, images } = tweet;

  function renderImages() {
    const imagesLength = images.length;
    if (imagesLength === 1) {
      return (
        <Image source={images[0]} width="100%" height={148} borderRadius={15} />
      );
    } else if (imagesLength === 2) {
      return (
        <Box flex={1} flexDirection="row">
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              flex={0.5}
              width="50%"
              height={148}
              mr={index === 0 && 0}
              borderTopLeftRadius={index === 0 ? 15 : 0}
              borderTopRightRadius={index === 0 ? 0 : 15}
              borderBottomLeftRadius={index === 0 ? 15 : 0}
              borderBottomRightRadius={index === 0 ? 0 : 15}
            />
          ))}
        </Box>
      );
    } else if (imagesLength === 3) {
      return (
        <Box flex={1} flexDirection="row">
          <Image
            source={images[0]}
            flex={0.5}
            width="50%"
            height={148}
            mr={0}
            borderTopLeftRadius={15}
            borderTopRightRadius={0}
            borderBottomLeftRadius={15}
            borderBottomRightRadius={0}
          />

          <Box flex={0.5}>
            {images.map(
              (image, index) =>
                index !== 0 && (
                  <Image
                    key={index}
                    source={image}
                    flex={0.5}
                    width="100%"
                    height="50%"
                    mb={index === 1 && 0}
                    borderTopRightRadius={index === 1 ? 15 : 0}
                    borderBottomRightRadius={index === 1 ? 0 : 15}
                  />
                ),
            )}
          </Box>
        </Box>
      );
    } else {
      const oneThirdImages = [images[0], images[2]];
      const secondFourthImages = [images[1], images[3]];

      return (
        <Box flex={1} flexDirection="row">
          <Box flex={0.5} mr={0}>
            {oneThirdImages.map((image, index) => (
              <Image
                key={index}
                source={image}
                flex={0.5}
                width="100%"
                height={74}
                mb={index === 0 && 0}
                borderTopLeftRadius={index === 0 ? 15 : 0}
                borderTopRightRadius={0}
                borderBottomLeftRadius={index === 0 ? 0 : 15}
                borderBottomRightRadius={0}
              />
            ))}
          </Box>

          <Box flex={0.5}>
            {secondFourthImages.map((image, index) => (
              <Image
                key={index}
                source={image}
                flex={0.5}
                width="100%"
                height="50%"
                mb={index === 0 && 0}
                borderTopLeftRadius={0}
                borderTopRightRadius={index === 0 ? 15 : 0}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={index === 0 ? 0 : 15}
              />
            ))}
          </Box>
        </Box>
      );
    }
  }

  return (
    <Box flexDirection="row" padding={4}>
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
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box flexDirection="row">
            <Text fontWeight="bold" mr={1}>
              {fullName}
            </Text>

            <Text color="light">
              @{username.length > 11 ? username.slice(0, 8) + '...' : username}{' '}
              &middot; 1m
            </Text>
          </Box>

          <TouchableOpacity
            onPress={() => navigation.navigate('Modal', { user, tweet })}>
            <Icon name="chevron-down" color="light" size={16} />
          </TouchableOpacity>
        </Box>

        <Box mb={5}>
          <Text lineHeight="20px">{text}</Text>
        </Box>

        {images.length !== 0 && <Box mb={5}>{renderImages()}</Box>}

        <Box flexDirection="row">
          <Box flexDirection="row" alignItems="center" mr={14}>
            <Icon name="message-circle" color="light" size={18} mr={1} />
            <Text fontSize={13} color="light">
              3
            </Text>
          </Box>

          <Box flexDirection="row" alignItems="center" mr={14}>
            <Icon name="repeat" color="light" size={16} mr={1} />
            <Text fontSize={13} color="light">
              12
            </Text>
          </Box>

          <Box flexDirection="row" alignItems="center" mr={14}>
            <Icon name="heart" color="light" size={16} mr={1} />
            <Text fontSize={13} color="light">
              1296
            </Text>
          </Box>

          <Box flexDirection="row" alignItems="center">
            <Icon name="share-2" color="light" size={16} mr={1} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Tweet.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profilePicture: PropTypes.number.isRequired,
  }).isRequired,
  tweet: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string,
    images: PropTypes.array,
  }).isRequired,
};

export default Tweet;
