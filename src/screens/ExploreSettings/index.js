import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Box, Text, Switch, Button } from 'components';

function ExploreSettings({ navigation }) {
  const [isLocationActive, setIsLocationActive] = useState(true);
  const [isPersonalizationActive, setIsPersonalizationActive] = useState(true);
  const [animValue, setAnimValue] = useState(new Animated.Value(0));
  const [panelHeight, setPanelHeight] = useState(0);
  const [exploreLocationHeight, setExploreLocationHeight] = useState(0);

  useEffect(() => {
    Animated.spring(animValue, {
      toValue: isLocationActive ? 0 : 1,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  }, [isLocationActive]);

  const heightAnim = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [panelHeight - exploreLocationHeight - 38, panelHeight],
  });

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  return (
    <Box flex={1} bg="darkNavyBlue">
      <Text color="light" fontSize={16} fontWeight="bold" mt={18} mb={7} ml={7}>
        Location
      </Text>

      <Button
        as={TouchableOpacity}
        px={7}
        py={9}
        bg="navyBlue"
        activeOpacity={1}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setPanelHeight(height);
          console.log(event.nativeEvent.layout);
        }}
        onPress={() => setIsLocationActive((value) => !value)}>
        <Box flexDirection="row" alignItems="center">
          <Box flex={0.8}>
            <Text fontSize={16} fontWeight={700} mb={3}>
              Show content in this location
            </Text>
            <Text fontSize={14} color="light" lineHeight="20px">
              When this is on, you'll see what's happening around you right now.
            </Text>
          </Box>
          <Box flex={0.2} alignItems="flex-end">
            <Switch
              isActive={isLocationActive}
              setIsActive={setIsLocationActive}
            />
          </Box>
        </Box>

        {!isLocationActive && (
          <Button
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setExploreLocationHeight(height);
            }}
            mt={16}
            onPress={() => navigation.navigate('ExploreLocations')}>
            <Text fontWeight={700}>Explore Locations</Text>
          </Button>
        )}
      </Button>

      <Text color="light" fontSize={16} fontWeight="bold" mt={18} mb={7} ml={7}>
        Personalization
      </Text>

      <Box
        as={TouchableOpacity}
        flexDirection="row"
        alignItems="center"
        px={7}
        py={9}
        bg="navyBlue"
        activeOpacity={1}
        onPress={() => setIsPersonalizationActive((value) => !value)}>
        <Box flex={0.8}>
          <Text fontSize={16} fontWeight={700} mb={3}>
            Trends for you
          </Text>
          <Text fontSize={14} color="light" lineHeight="20px">
            You can personalize the trends for you based on your location and
            who you follow.
          </Text>
        </Box>
        <Box flex={0.2} alignItems="flex-end">
          <Switch
            isActive={isPersonalizationActive}
            setIsActive={setIsPersonalizationActive}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ExploreSettings;
