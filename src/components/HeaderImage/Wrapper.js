import styled from 'styled-components';

const Wrapper = styled.div`
  border: 3px solid #3598db;
  border-radius: 50%;
  height: ${props => props.post ? 100 : 150}px;
  margin: 0 auto 15px auto;
  overflow: hidden;
  width: ${props => props.post ? 100 : 150}px;
  display: ${props => props.post ? 'inline-block' : 'block'};
  vertical-align: middle;
  img {
    padding: 5px;
    border-radius: 50%;
  }
  @media only screen and (max-width: 870px) {
    width: ${props => props.post ? 90 : 100}px;
    height: ${props => props.post ? 90 : 100}px;
  }
`;

export default Wrapper;