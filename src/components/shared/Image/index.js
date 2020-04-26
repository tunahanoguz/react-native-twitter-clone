import styled from 'styled-components';
import { compose, layout, space, border } from 'styled-system';

const Image = styled.Image(compose(layout, space, border));

export default Image;
