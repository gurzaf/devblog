import styled from 'styled-components';

import BasicP from '../P';

const P = styled(BasicP)`
  margin: 0;
  @media only screen and (max-width: 870px) {
    font-size: ${props => props.post ? 1.5 : 1.6}em;
  }
`;

export default P;