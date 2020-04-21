import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: ${props => props.post ? 0 : 15}px;
  text-align: center;
  @media only screen and (max-width: 870px) {
    transform: ${props => props.post ? 'scale(.9)' : 'none'};
  }
`;

export default Wrapper;