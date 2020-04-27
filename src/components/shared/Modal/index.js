import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import {
  compose,
  flexbox,
  position,
  layout,
  space,
  color,
  border,
} from 'styled-system';
import { Box, Text, Icon } from 'components';
import theme from 'theme';

function Modal({ isOpen, setIsOpen, children, ...props }) {
  const navigation = useNavigation();

  return (
    <Box
      as={TouchableOpacity}
      flex={1}
      justifyContent="center"
      alignItems="center"
      mb={-1}
      onPress={() => navigation.pop()}>
      {children}
    </Box>
  );
}

const StyledModal = styled(Animated.View)(
  compose(flexbox, position, layout, space, color, border),
);

Modal.defaultProps = {
  width: '100%',
  bg: theme.colors.navyBlue,
  borderTopStartRadius: 15,
  borderTopEndRadius: 15,
};

export default Modal;
