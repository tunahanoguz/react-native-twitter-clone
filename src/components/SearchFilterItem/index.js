import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Button, Text } from '../shared';

function SearchFilterItem({ title, isSelected, setFilter }) {
  return (
    <Box
      as={TouchableOpacity}
      flexDirection="row"
      alignItems="center"
      py={7}
      px={5}
      bg="navyBlue"
      borderBottomWidth={0.4}
      borderBottomColor="divSBBorderGrey"
      onPress={setFilter}>
      <Button
        justifyContent="center"
        alignItems="center"
        width={14}
        height={14}
        mr={4}
        borderWidth={1}
        borderColor="white"
        borderRadius={100}
        onPress={setFilter}>
        {isSelected && (
          <Box bg="blue" width="65%" height="65%" borderRadius={100} />
        )}
      </Button>
      <Text fontSize={15} fontWeight={isSelected ? 'bold' : 'normal'}>
        {title}
      </Text>
    </Box>
  );
}

export default SearchFilterItem;
