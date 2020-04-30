import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Box, Text, Trend } from 'components';

function Search({ navigation }) {
  const searchTitles = [
    { title: 'İsveç', tweetCount: 5705 },
    { title: 'Barış Özcan', tweetCount: 1027 },
    { title: 'Kadir Şeker', tweetCount: 3350 },
    { title: '#PENTAGON', tweetCount: 63300 },
    { title: 'AliyiÖldürenlerNerede', tweetCount: 41700 },
  ];

  return (
    <Box flex={1} bg="darkNavyBlue">
      <Box bg="navyBlue">
        <Box
          px={4}
          py={3}
          borderBottomWidth="0.4px"
          borderBottomColor="divSBBorderGrey">
          <Text fontSize={18} fontWeight="bold">
            Trends for you
          </Text>
        </Box>

        <Box>
          <FlatList
            data={searchTitles}
            renderItem={({ item }) => (
              <Trend title={item.title} tweetCount={item.tweetCount} />
            )}
            ItemSeparatorComponent={() => (
              <Box height={0.4} bg="divSBBorderGrey" />
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <Box
            as={TouchableOpacity}
            px={4}
            py={6}
            borderTopWidth="0.4px"
            borderTopColor="bottomTabBorderGrey"
            borderBottomWidth="0.4px"
            borderBottomColor="divSBBorderGrey"
            onPress={() => navigation.navigate('TopTrends')}>
            <Text color="blue">Show more</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Search;
