import styled from 'styled-components';

const SocialLink = styled.a`
  border: 1px solid #6e849c;
  border-radius: 5px;
  color: #3e465b;
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 15px;
    margin-right: 5px;
    stroke: #6e849c;
    vertical-align: middle;
    width: 15px;
  }

  &:hover {
    border-color: #6e849c;
    background-color: #6e849c;
    color: white;
    svg {
      stroke: white;
    }
  }
`;

export default SocialLink;