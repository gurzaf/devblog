import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';

function FeaturedImage({ source }) {
  const props = {};
  if (source.fluid) {
    props.fluid = source.fluid;
  } else {
    props.fixed = source.fixed;
  }
  return (
    <Wrapper>
      <Img alt="" {...props} />
    </Wrapper>
  );
}

export default FeaturedImage;
