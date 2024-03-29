import React, { useEffect } from "react";
import Query from "../../components/Query";
import BLOGS_QUERY from "../../queries/blogs/blogs";
import { BlogFooter } from '../../components/Footer';
import { FormatUrlSrc, IsMobile } from '../../utils/index';

const Blogs = () => {
	useEffect(() => {
		if (!IsMobile()) {
			document.body.classList.add('non-mobile');
		}
    document.body.classList.add('bg-color-primary');
	})
  return (
		<div className="archive no-padding" >
			<div className="header" >
				<h1>Here are MORE of my blogs :)</h1>
			</div>
			<div className="grid">
				<Query query={BLOGS_QUERY}>
					{({ data: { blogs } }) => <BlogsWrapper key={blogs.id} blogs={blogs} />}
				</Query>
			</div>
			<BlogFooter />
		</div>
  );
};

const BlogsWrapper = ({ blogs }) => (
	<React.Fragment>
		{blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
	</React.Fragment>
);

const Blog = ({ blog }) => (
	<figure className="effect-sadie">
		<img src={FormatUrlSrc(blog.coverImage.url)} alt={blog.title} />
		<figcaption>
			<h2>{blog.title}<br/><span>{blog.subTitle}</span></h2>
			<p>{blog.description}</p>
			<a href={`/blog/${blog.id}`} target="_blank" rel="noopener noreferrer" >View more</a>
		</figcaption>
	</figure>
)

export default Blogs;