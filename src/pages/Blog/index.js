import React, { useEffect } from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import { BlogFooter } from '../../components/Footer/index';
import BLOG_QUERY from "../../queries/blog/blog";
import { FormatUrlSrc } from '../../utils/index.js';
// Component
const Blog = () => {
  let { id } = useParams();
  useEffect(() => {
    // Setting extra space to background.
    document.body.classList.add('bg-color-primary');
  });
  return (
    <Query query={BLOG_QUERY} id={id}>
      {({ data: { blog } }) => {
        const style = {
          background: `url(${FormatUrlSrc(blog.header.url)}) no-repeat center`,
          backgroundSize: 'cover'
        }
        return (
          <React.Fragment>
            <BlogWrapper blog={blog} style={style} transformImageUri={FormatUrlSrc} />
            <BlogFooter />
          </React.Fragment>
        );
      }}
    </Query>
  );
};
// Wrapper
const BlogWrapper = ({ blog, style, transformImageUri }) => (
  <div>
    <div className="header" > 
      <div className="blur-image" style={style}></div>
      <div className="title">
        <h1>{blog.title}<br/>{blog.subTitle}</h1>
      </div>
    </div>
    <div className="single">
      <div className="content" >
        <ReactMarkdown source={blog.blog} transformImageUri={transformImageUri} />
      </div>
      <div className="anchor">
        <a href="/blogs" >Check out my other blogs</a>
      </div>
    </div>
  </div>
);

export default Blog;