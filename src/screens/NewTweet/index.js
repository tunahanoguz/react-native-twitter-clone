import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Svg, Circle } from 'react-native-svg';
import { Box, Icon, Modal, Button, Text, Image, Input } from 'components';
import { users } from '../../constants';
import theme from '../../theme';

function NewTweet() {
  const navigation = useNavigation();
  const [tweet, setTweet] = useState('');
  const [buttonsContainerHeight, setButtonsContainerHeight] = useState(0);
  const [imagesContainerHeight, setImagesContainerHeight] = useState(0);
  const [animValue, setAnimValue] = useState(new Animated.Value(0));
  const [circleAnimValue, setCircleAnimValue] = useState(new Animated.Value(0));

  const tweetLength = tweet.length;
  const isTweet = tweet.length !== 0;

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: tweet.length === 0 ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isTweet]);

  useEffect(() => {
    console.log(tweet.length);
    Animated.timing(circleAnimValue, {
      toValue: (tweet.length / 280) * 70,
      duration: 10,
      useNativeDriver: true,
    }).start();
  }, [tweetLength]);

  const transformValue = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, buttonsContainerHeight + imagesContainerHeight],
  });

  // const a = animValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [(tweet.length / 280) * 70, 0],
  // });

  return (
    <Modal as={View}>
      <Box bottom={0} width="100%" height="100%" bg="navyBlue">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={6}
          mb={14}
          px={4}>
          <Button onPress={() => navigation.pop()}>
            <Icon name="x" size={24} color="blue" />
          </Button>

          <Button
            bg="blue"
            py={1}
            px={6}
            borderRadius={100}
            disabled={tweet.length === 0}
            style={
              tweet.length === 0 && {
                backgroundColor: '#1A6DA3',
              }
            }>
            <Text
              fontWeight="bold"
              color={tweet.length === 0 && 'disabledButtonGrey'}>
              Tweet
            </Text>
          </Button>
        </Box>

        <Box flexDirection="row" px={4}>
          <Box flex={0.14}>
            <Image
              source={users[0].profilePicture}
              width={38}
              height={38}
              mr={4}
              borderRadius={100}
            />
          </Box>
          <Box flex={0.86}>
            <Input
              placeholder="What's happening?"
              placeholderTextColor="#8799A3"
              value={tweet}
              onChangeText={(text) => setTweet(text)}
              autoFocus={true}
              color="white"
              pt={1}
              fontSize={18}
              multiline={true}
            />
          </Box>
        </Box>

        <Box position="absolute" bottom={-1} width="100%">
          <Box
            as={Animated.View}
            flexDirection="row"
            justifyContent="space-between"
            mb={3}
            px={3}
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setImagesContainerHeight(height);
            }}
            style={{ transform: [{ translateY: transformValue }] }}>
            <Button
              justifyContent="center"
              alignItems="center"
              width={82}
              height={82}
              borderWidth={1}
              borderColor="divSBBorderGrey"
              borderRadius={15}>
              <Icon name="camera" size={24} color="blue" />
            </Button>

            <Button>
              <Image
                source={require('../../assets/images/image1.jpg')}
                width={82}
                height={82}
                borderWidth={1}
                borderColor="divSBBorderGrey"
                borderRadius={15}
              />
            </Button>

            <Button>
              <Image
                source={require('../../assets/images/image2.jpg')}
                width={82}
                height={82}
                borderWidth={1}
                borderColor="divSBBorderGrey"
                borderRadius={15}
              />
            </Button>

            <Button>
              <Image
                source={require('../../assets/images/image3.jpg')}
                width={82}
                height={82}
                borderWidth={1}
                borderColor="divSBBorderGrey"
                borderRadius={15}
              />
            </Button>
          </Box>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={5}
            bg="navyBlue"
            borderTopWidth={0.4}
            borderTopColor="divSBBorderGrey"
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setButtonsContainerHeight(height);
            }}>
            <Box flexDirection="row" alignItems="center">
              <Button mr={13}>
                <Icon name="image" size={24} color="blue" />
              </Button>

              <Button mr={13}>
                <Icon name="align-left" size={28} color="blue" />
              </Button>

              <Button mr={13}>
                <Icon name="map-pin" size={20} color="blue" />
              </Button>
            </Box>

            <Box flexDirection="row">
              {/*<Box*/}
              {/*  width={24}*/}
              {/*  height={24}*/}
              {/*  borderWidth={2}*/}
              {/*  borderColor="messageVBGrey"*/}
              {/*  borderRadius={100}*/}
              {/*/>*/}

              <Svg
                width={24}
                height={24}
                style={{
                  transform: [{ rotateY: '180deg' }, { rotateZ: '-90deg' }],
                }}>
                <Circle
                  stroke={theme.colors.blue}
                  fill="none"
                  cx={12}
                  cy={12}
                  r={11}
                  strokeWidth={2}
                />
                <AnimatedCircle
                  stroke={theme.colors.messageVBGrey}
                  fill="none"
                  cx={12}
                  cy={12}
                  r={11}
                  strokeWidth={2}
                  strokeDashoffset={circleAnimValue}
                  strokeDasharray={70}
                />
              </Svg>

              <Box width="0.4px" height={24} bg="messageVBGrey" mx={7} />

              <Box
                justifyContent="center"
                alignItems="center"
                width={24}
                height={24}
                bg={tweetLength === 0 ? 'darkBlue' : 'blue'}
                // borderWidth={2}
                // borderColor="blue"
                borderRadius={100}>
                <Icon name="plus" size={14} color="navyBlue" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default NewTweet;
