import styled from 'styled-components';
import { withTheme } from '../../../contexts/theme';

export const Ball = styled.div`
  height: 0px;
  width: 0px;
  border-radius: 100%;
  position: absolute;

  &.primary {
    background-color: ${props => props.theme.primary};
  }

  &.accent {
    background-color: ${props => props.theme.accent};
  }
`;

Ball.defaultProps = {
  theme: {
    primary: 'white',
    accent: 'black'
  }
};

export default withTheme(Ball);
// export default Ball;
