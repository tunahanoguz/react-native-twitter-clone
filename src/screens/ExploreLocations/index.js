import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Box, Button, Text, Input } from 'components';
import { countries } from 'constants';

function ExploreLocations() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const filteredValue = countries.filter((country) =>
      country.includes(searchValue),
    );
    setFilteredCountries(filteredValue);
  }, [searchValue]);

  return (
    <Box flex={1}>
      <Input
        autoFocus={true}
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
        placeholder="Search locations"
        fontSize={18}
        color="light"
        placeholderTextColor="#39434D"
        ml={1}
        py={1}
        borderBottomWidth={0.4}
        borderBottomColor="divSBBorderGrey"
      />

      <FlatList
        data={filteredCountries}
        renderItem={({ item }) => (
          <Button my={4}>
            <Text fontWeight="bold" ml={4}>
              {item}
            </Text>
          </Button>
        )}
        ItemSeparatorComponent={() => <Box height={0.4} bg="divSBBorderGrey" />}
        keyExtractor={(item, index) => index.toString()}
      />
    </Box>
  );
}

export default ExploreLocations;
