import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Box from '../shared/Box';
import Icon from '../shared/Icon';
import Text from '../shared/Typography';
import Button from '../shared/Button';

function Trend({ title, tweetCount, onPress }) {
  const navigation = useNavigation();

  return (
    <Box
      as={TouchableOpacity}
      flexDirection="row"
      justifyContent="space-between"
      px={4}
      py={9}
      onPress={() => navigation.navigate('TrendInner', { title })}>
      <Box>
        <Text fontSize={15} fontWeight={700}>
          {title}
        </Text>
        <Text fontSize={13} color="light">
          {tweetCount} Tweets
        </Text>
      </Box>

      <Button onPress={() => navigation.navigate('TrendModal')}>
        <Icon name="chevron-down" size={18} color="light" />
      </Button>
    </Box>
  );
}

Trend.propTypes = {
  title: PropTypes.string.isRequired,
  tweetCount: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

Trend.defaultProps = {
  onPress: () => {},
};

export default Trend;
