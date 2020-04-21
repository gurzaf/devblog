import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';
import TitleContainer from './TitleContainer';

function Header({ config, post }) {
  const { author, description, social } = config;
  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage post={post}/>
        )}
        <TitleContainer post={post}>
          <H1 post={post}>
            <Link to="/">{author}</Link>
          </H1>
          <P post={post}>{description}</P>
          {social &&
            <Social
              post={post}
              website={social.website}
              github={social.github}
              twitter={social.twitter}
              linkedin={social.linkedin}
            />
          }
        </TitleContainer>
      </Wrapper>
    </Container> 
  );
}

export default Header;