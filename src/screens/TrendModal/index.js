import React from 'react';
import { Box, Button, Modal, Text } from 'components';

function TrendModal() {
  return (
    <Modal>
      <Box alignSelf="center" mx={18} bg="navyBlue">
        <Box px={12}>
          <Button onPress={() => console.log('asdasdasd')}>
            <Text mt={13} mb={15}>
              This trend is spam
            </Text>
          </Button>

          <Button onPress={() => console.log('asdasdasd')}>
            <Text mb={15}>This trend is abusive or harmful</Text>
          </Button>

          <Button onPress={() => console.log('asdasdasd')}>
            <Text mb={15}>This trends is a duplicate</Text>
          </Button>

          <Button onPress={() => console.log('asdasdasd')}>
            <Text mb={13}>This trend is low quality</Text>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default TrendModal;
