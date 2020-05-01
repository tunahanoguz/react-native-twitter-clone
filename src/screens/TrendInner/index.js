import React, { useState } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Box, NewTweetButton, Text } from 'components';
import { trendMenuItems, tweets } from '../../constants';
import Screen from './Screen';

function TrendInner() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Box flex={1}>
      <Box
        flexDirection="row"
        borderBottomWidth={0.4}
        borderBottomColor="divSBBorderGrey">
        {trendMenuItems.map((item, index) => {
          return (
            <Box
              as={TouchableOpacity}
              key={index}
              flex={0.2}
              py={4}
              borderBottomWidth={selectedItem === index ? 3 : 0}
              borderBottomColor="blue"
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

      <Carousel
        data={tweets}
        renderItem={() => <Screen tweets={tweets} />}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={(index) => setSelectedItem(index)}
      />

      <NewTweetButton />
    </Box>
  );
}

export default TrendInner;
