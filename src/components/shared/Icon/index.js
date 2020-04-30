import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import { compose, position, typography, space, color } from 'styled-system';

const Icon = styled(FeatherIcon)(compose(position, typography, space, color));

export default Icon;
