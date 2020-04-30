import React from 'react';
import { FlatList } from 'react-native';
import { Box, Button, Trend, Icon } from '../../components';
import { trends } from 'constants';

function TopTrends() {
  return (
    <Box flex={1}>
      <FlatList
        data={trends}
        renderItem={({ item }) => (
          <Trend title={item.title} tweetCount={item.tweetCount} />
        )}
        ItemSeparatorComponent={() => <Box height={0.4} bg="divSBBorderGrey" />}
        keyExtractor={(item, index) => index.toString()}
      />

      <Button
        position="absolute"
        bottom={6}
        right={7}
        padding={6}
        bg="blue"
        borderRadius={100}>
        <Icon name="feather" size={22} color="white" />
      </Button>
    </Box>
  );
}

export default TopTrends;
