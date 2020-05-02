import React from 'react';
import { Box, Button, Modal, Text } from 'components';

function TrendInnerSetModal() {
  return (
    <Modal>
      <Box
        position="absolute"
        top={10}
        right={10}
        width={200}
        bg="navyBlue"
        px={7}
        style={{ elevation: 20 }}>
        <Button onPress={() => console.log('asdasdasd')}>
          <Text mt={7} mb={15}>
            Search Settings
          </Text>
        </Button>

        <Button onPress={() => console.log('asdasdasd')}>
          <Text mb={15}>Save this search</Text>
        </Button>

        <Button onPress={() => console.log('asdasdasd')}>
          <Text mb={7}>Share</Text>
        </Button>
      </Box>
    </Modal>
  );
}

export default TrendInnerSetModal;
