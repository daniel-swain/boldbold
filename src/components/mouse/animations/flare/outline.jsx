import styled from 'styled-components';
import { withTheme } from '../../../contexts/theme';

export const Outline = styled.div`
  background-color: transparent;
  border: solid 1px ${props => props.theme.primary};
  border-radius: 100%;
  height: 0px;
  position: absolute;
  width: 0px;
  z-index: 99;
`;

Outline.defaultProps = {
  theme: {
    primary: 'white'
  }
};

export default withTheme(Outline);
