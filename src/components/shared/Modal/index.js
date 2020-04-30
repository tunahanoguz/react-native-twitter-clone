import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { Box } from 'components';

function Modal({ isOpen, setIsOpen, children, ...props }) {
  const navigation = useNavigation();

  return (
    <Box
      as={TouchableOpacity}
      flex={1}
      justifyContent="center"
      alignItems="center"
      mb={-1}
      onPress={() => navigation.pop()}
      {...props}>
      {children}
    </Box>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Modal;
