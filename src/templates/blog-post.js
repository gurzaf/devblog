import {graphql} from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import React from 'react';

import userConfig from '../../config';

import Layout from './layout';

import Article from '../components/Article';
import ArticleHeader from '../components/ArticleHeader';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import FeaturedImage from '../components/FeaturedImage';
import PageNav from '../components/PageNav';
import Share from '../components/Share';

export const BlogPostTemplate = ({ post, url }) => (
  <Card>
    <ArticleHeader>
      {post.frontmatter.featuredImage && (
        <FeaturedImage
          source={post.frontmatter.featuredImage.childImageSharp}
        />
      )}
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <span />
    </ArticleHeader>
    <Article>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Article>
    {userConfig.showShareButtons && url && (
      <Share url={url} title={post.frontmatter.title} />
    )}
  </Card>
);

const BlogPostPage = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const author = get(data, 'site.siteMetadata.author');
  const { previous, next } = pageContext;
  let url = '';
  if (typeof window !== `undefined`) {
    url = get(window, 'location.href');
  }
  return (
    <Layout post>
      <Container>
        <Helmet
          title={`${post.frontmatter.title} | ${author}`}
          htmlAttributes={{ lang: 'es' }}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
        
        <BlogPostTemplate post={post} url={url} />

        <PageNav>
          {previous && (
            <Button to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Button>
          )}

          {next && (
            <Button to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Button>
          )}
        </PageNav>
      </Container>
    </Layout>
  );
};

export default BlogPostPage;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY", locale: "es")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 850, maxHeight: 250, cropFocus: ENTROPY) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
