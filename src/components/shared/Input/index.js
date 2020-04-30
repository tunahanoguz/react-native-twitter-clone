import styled from 'styled-components';
import {
  compose,
  flexbox,
  position,
  layout,
  space,
  color,
  typography,
  border,
} from 'styled-system';

const Input = styled.TextInput(
  compose(flexbox, position, layout, space, color, typography, border),
);

export default Input;
