// Libraries
import React, { useEffect } from "react";
// Components
import Query from "../../components/Query";
// Scripts 
import SetBlogs from '../../scripts/blogs';
// Queries 
import BLOGS_QUERY from "../../queries/blogs/blogs";
// Component
const Blogs = () => {
	useEffect(() => {
		SetBlogs();
    document.body.classList.add('bg-color-primary');
	})
  return (
		<div className="archive" >
			<div className="header" >
				<h1>Here are MORE of my blogs :)</h1>
			</div>
			<div className="grid">
				<Query query={BLOGS_QUERY}>
					{({ data: { blogs } }) => <BlogsWrapper key={blogs.id} blogs={blogs} />}
				</Query>
			</div>
		</div>
  );
};

const BlogsWrapper = ({ blogs }) => (
	<React.Fragment>
		{blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
	</React.Fragment>
);

const Blog = ({ blog }) => {
	const CoverImageUrl = process.env.NODE_ENV !== "development"
	? `https://api.adanconstanzo.com${blog.coverImage.url}`
	: process.env.REACT_APP_BACKEND_URL + blog.coverImage.url;
	return(
		<figure className="effect-sadie">
			<img src={CoverImageUrl} alt={blog.title} />
			<figcaption>
				<h2>{blog.title}<br/><span>{blog.subTitle}</span></h2>
				<p>{blog.description}</p>
				<a href={`/blog/${blog.id}`} target="_blank" rel="noopener noreferrer" >View more</a>
			</figcaption>
		</figure>
	);
}

export default Blogs;