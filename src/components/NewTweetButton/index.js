import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from '../shared';

function NewTweetButton() {
  const navigation = useNavigation();
  return (
    <Button
      position="absolute"
      bottom={66}
      right={7}
      padding={6}
      bg="blue"
      borderRadius={100}
      onPress={() => navigation.navigate('NewTweet')}>
      <Icon name="feather" size={22} color="white" />
    </Button>
  );
}

export default NewTweetButton;
