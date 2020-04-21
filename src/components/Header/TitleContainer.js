import styled from 'styled-components';

const TitleContainer = styled.div`
  display: ${props => props.post ? 'inline-block' : 'block'};
  vertical-align: middle;
`;

export default TitleContainer;
