import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import Button from '../Button';
import Icon from '../Icon';

function SquareCheckBox({ isActive, setIsActive }) {
  const [animValue, setAnimValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(animValue, {
      toValue: isActive ? 1 : 0,
      friction: 1.5,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  function setActivation() {
    setIsActive((value) => !value);
  }

  return (
    <Button
      position="relative"
      justifyContent="center"
      alignItems="center"
      width={20}
      height={20}
      borderWidth={2}
      borderColor="blue"
      borderRadius={4}
      activeOpacity={1}
      onPress={setActivation}>
      <Button
        as={Animated.TouchableOpacity}
        position="absolute"
        justifyContent="center"
        alignItems="center"
        bg={isActive ? 'blue' : 'transparent'}
        // borderRadius={4}
        onPress={setActivation}
        style={{ transform: [{ scale: animValue }] }}>
        <Icon name="check" size={16} color="navyBlue" />
      </Button>
    </Button>
  );
}

export default SquareCheckBox;
