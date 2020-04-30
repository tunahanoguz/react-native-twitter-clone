import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import Button from '../Button';

function Switch({ isActive, setIsActive }) {
  const [animValue, setAnimValue] = useState(
    new Animated.Value(isActive ? 1 : 0),
  );

  const positionAnim = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
  });

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: isActive ? 0 : 1,
      duration: 50,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  function setActivation() {
    setIsActive((value) => !value);
  }

  return (
    <Button
      flexDirection="row"
      width={32}
      height={14}
      bg={isActive ? 'switchDarkBlue' : 'switchDarkGrey'}
      borderRadius={100}
      activeOpacity={1}
      onPress={setActivation}>
      <Button
        as={Animated.TouchableOpacity}
        alignSelf="center"
        width={22}
        height={22}
        bg={isActive ? 'switchLightBlue' : 'switchLightGrey'}
        borderRadius={100}
        activeOpacity={1}
        style={{
          transform: [{ translateX: positionAnim }],
        }}
        onPress={setActivation}
      />
    </Button>
  );
}

export default Switch;
