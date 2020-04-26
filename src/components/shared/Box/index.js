import styled from 'styled-components';
import { compose, flexbox, layout, space, color, border } from 'styled-system';

const Box = styled.View(compose(flexbox, layout, space, color, border));

export default Box;
