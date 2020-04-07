import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry }) => {
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