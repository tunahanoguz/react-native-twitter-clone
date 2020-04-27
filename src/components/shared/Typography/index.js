import * as React from 'react';
import styled from 'styled-components';
import { compose, flexbox, typography, space, color } from 'styled-system';
import theme from 'theme';

function Text({ uppercase, children, ...props }) {
  return (
    <StyledText
      style={uppercase && { textTransform: 'uppercase' }}
      css={{ color: theme.colors.dark }}
      {...props}>
      {children}
    </StyledText>
  );
}

const StyledText = styled.Text(compose(flexbox, typography, space, color));

StyledText.defaultProps = {
  variant: 'normal',
  fontSize: 15,
};

export default Text;
