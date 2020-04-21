import styled from 'styled-components';

const H1 = styled.h1`
  color: #3e465b;
  font-size: 35px;
  line-height: ${props => props.post ? 1.3 : 1.5};
  margin: 0;
  padding: 0 30px;
  text-align: center;
  @media only screen and (max-width: 870px) {
    // font-size: ${props => props.post ? 30 : 35}px;
    padding: ${props => props.post ? '0 10px' : '0 30px'};
  }
`;

export default H1;