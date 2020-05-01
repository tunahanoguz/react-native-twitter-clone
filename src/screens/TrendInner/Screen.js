import React from 'react';
import { FlatList } from 'react-native';
import { Box, Tweet } from 'components';
import { users } from '../../constants';

function Screen({ tweets }) {
  return (
    <FlatList
      data={tweets}
      renderItem={({ item, index }) => (
        <Tweet user={users[index]} tweet={item} />
      )}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <Box height={0.4} bg="divSBBorderGrey" />}
      ListFooterComponent={() => (
        <>
          <Box height={0.4} bg="messageVBGrey" mb={7} />
          <Box
            alignSelf="center"
            width={3}
            height={3}
            bg="light"
            borderRadius={3}
          />
        </>
      )}
    />
  );
}

export default Screen;
