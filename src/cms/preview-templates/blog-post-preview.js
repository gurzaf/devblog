import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry }) => {
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);
  console.warn('===?');
  console.warn(title);
  console.warn(date);
  console.warn('===');
  return (
    <BlogPostTemplate
      post={entry.getIn(["data", "markdownRemark"])}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  // widgetFor: PropTypes.func,
};

export default BlogPostPreview;