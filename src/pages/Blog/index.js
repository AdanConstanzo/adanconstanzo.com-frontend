// Libraries
import React, { useEffect } from "react";
import { useParams } from "react-router";
// Components
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
// Queries
import BLOG_QUERY from "../../queries/blog/blog";
// Component
const Blog = () => {
  let { id } = useParams();
  const transformImageUri = (input) => process.env.NODE_ENV !== "development" ? input : process.env.REACT_APP_BACKEND_URL + input
  useEffect(() => {
    // Setting extra space to background.
    document.body.classList.add('bg-color-primary');
  });
  return (
    <Query query={BLOG_QUERY} id={id}>
      {({ data: { blog } }) => {
        const HeaderUrl = process.env.NODE_ENV !== "development"
        ? blog.header.url
        : process.env.REACT_APP_BACKEND_URL + blog.header.url;
        const style = {
          background: `url(${HeaderUrl}) no-repeat center`,
          backgroundSize: 'cover'
        }
        return (
          <BlogWrapper blog={blog} style={style} transformImageUri={transformImageUri} />
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
        <h1>{blog.title}</h1>
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