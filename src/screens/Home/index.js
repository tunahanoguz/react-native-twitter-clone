import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Tweet, NewTweetButton } from 'components';
import { tweets, users } from '../../constants';

function Home() {
  return (
    <Box flex={1}>
      <SafeAreaView>
        <FlatList
          data={tweets}
          renderItem={({ item, index }) => (
            <Tweet user={users[index]} tweet={item} />
          )}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => (
            <Box height={0.4} bg="divSBBorderGrey" />
          )}
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
      </SafeAreaView>

      <NewTweetButton />
    </Box>
  );
}

export default Home;
