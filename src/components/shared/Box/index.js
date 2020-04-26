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

const Box = styled.View(
  compose(flexbox, position, layout, space, color, border),
);

export default Box;
