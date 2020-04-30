import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Tweet, NewTweetButton } from 'components';
import { users } from '../../constants';

function Home() {
  const data = [
    {
      _id: 'asdasdasd',
      text:
        'In hospitals across the Gulf foreigners are on the front the fighting covid-19. Nevertheless, the pandemic has revealed more bigotry than benevolence',
      images: [
        require('../../assets/images/image1.jpg'),
        // require('../../assets/images/image2.jpg'),
        // require('../../assets/images/image3.jpg'),
        // require('../../assets/images/image4.jpg'),
      ],
    },
    {
      _id: 'asd',
      text:
        'In hospitals across the Gulf foreigners are on the front the fighting covid-19. Nevertheless, the pandemic has revealed more bigotry than benevolence',
      images: [],
    },
    {
      _id: 'asda',
      text:
        'In hospitals across the Gulf foreigners are on the front the fighting covid-19. Nevertheless, the pandemic has revealed more bigotry than benevolence',
      images: [],
    },
    {
      _id: 'asdaa',
      text:
        'In hospitals across the Gulf foreigners are on the front the fighting covid-19. Nevertheless, the pandemic has revealed more bigotry than benevolence',
      images: [],
    },
    {
      _id: 'asdaaa',
      text:
        'In hospitals across the Gulf foreigners are on the front the fighting covid-19. Nevertheless, the pandemic has revealed more bigotry than benevolence',
      images: [],
    },
  ];

  return (
    <Box flex={1}>
      <SafeAreaView>
        <FlatList
          data={data}
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
