import styled from 'styled-components';

const Wrapper = styled.header`
  margin: 0 auto;
  max-width: 650px;
  padding: 0 50px 50px;
  text-align: center;
  @media only screen and (max-width: 870px) {
    padding: 0 5px 20px;
  }
`;

export default Wrapper;