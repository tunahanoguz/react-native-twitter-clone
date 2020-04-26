import styled from 'styled-components';
import { compose, position, layout, space, border } from 'styled-system';

const Image = styled.Image(compose(position, layout, space, border));

export default Image;
