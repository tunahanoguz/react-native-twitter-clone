import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Box, Icon, Modal, Button, Text } from 'components';
import SearchFilterItem from '../../components/SearchFilterItem';

function TrendInnerPrefModal() {
  const navigation = useNavigation();
  const [peopleFilter, setPeopleFilter] = useState(0);
  const [locationFilter, setLocationFilter] = useState(0);

  const peopleFilters = ['From anyone', 'People you follow'];
  const locationFilters = ['Anywhere', 'Near you'];

  return (
    <Modal as={View}>
      <Box bottom={0} width="100%" height="100%" bg="darkNavyBlue">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          pt={6}
          pb={4}
          px={4}
          bg="navyBlue"
          borderBottomWidth={0.4}
          borderBottomColor="divSBBorderGrey">
          <Box flexDirection="row" alignItems="center">
            <Button onPress={() => navigation.pop()} mr={10}>
              <Icon name="x" size={24} color="blue" />
            </Button>

            <Text fontSize={18} fontWeight="bold">
              Search filters
            </Text>
          </Box>

          <Button bg="blue" py={1} px={6} borderRadius={100}>
            <Text fontWeight="bold">Apply</Text>
          </Button>
        </Box>

        <Box
          py={4}
          px={5}
          bg="navyBlue"
          borderBottomWidth={0.4}
          borderBottomColor="divSBBorderGrey">
          <Text fontSize={18} fontWeight="bold">
            People
          </Text>
        </Box>

        {peopleFilters.map((pf, index) => (
          <SearchFilterItem
            key={index}
            title={pf}
            isSelected={peopleFilter === index}
            setFilter={() => setPeopleFilter(index)}
          />
        ))}

        <Box
          mt={2}
          py={4}
          px={5}
          bg="navyBlue"
          borderBottomWidth={0.4}
          borderBottomColor="divSBBorderGrey">
          <Text fontSize={18} fontWeight="bold">
            Location
          </Text>
        </Box>

        {locationFilters.map((lf, index) => (
          <SearchFilterItem
            key={index + 2}
            title={lf}
            isSelected={locationFilter === index}
            setFilter={() => setLocationFilter(index)}
          />
        ))}
      </Box>
    </Modal>
  );
}

export default TrendInnerPrefModal;
