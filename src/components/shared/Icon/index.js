import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import { compose, typography, space, color } from 'styled-system';

const Icon = styled(FeatherIcon)(compose(typography, space, color));

export default Icon;
