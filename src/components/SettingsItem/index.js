import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Box, Button, Switch, SquareCheckBox, Text } from '../shared';

function SettingsItem({ title, description, type, isActive, setIsActive }) {
  function setActiveState() {
    setIsActive((value) => !value);
  }
  return (
    <Button
      as={TouchableOpacity}
      px={7}
      py={6}
      bg="navyBlue"
      activeOpacity={1}
      onPress={(type === 'switch' || type === 'check') && setActiveState}>
      <Box flexDirection="row" alignItems="center">
        <Box flex={0.84}>
          <Text fontSize={16} mb={0}>
            {title}
          </Text>

          <Text fontSize={14} color="light" lineHeight="18px">
            {description}
          </Text>
        </Box>
        {type === 'switch' && (
          <Box flex={0.16} alignItems="flex-end">
            <Switch isActive={isActive} setIsActive={setActiveState} />
          </Box>
        )}
        {type === 'check' && (
          <Box flex={0.2} alignItems="flex-end">
            <SquareCheckBox isActive={isActive} setIsActive={setActiveState} />
          </Box>
        )}
      </Box>
    </Button>
  );
}

SettingsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};

SettingsItem.defaultProps = {
  type: 'normal',
};

export default SettingsItem;
