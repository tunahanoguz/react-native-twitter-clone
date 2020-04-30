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

const SearchInput = styled.TextInput(
  compose(flexbox, position, layout, space, color, typography, border),
);

export default SearchInput;
