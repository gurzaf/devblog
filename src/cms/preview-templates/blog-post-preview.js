import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry }) => {
  console.warn('===?');
  console.warn(entry.getIn(["data", "html"]));
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