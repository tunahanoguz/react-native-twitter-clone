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

const Button = styled.TouchableOpacity(
  compose(position, flexbox, layout, space, color, border),
);

export default Button;
