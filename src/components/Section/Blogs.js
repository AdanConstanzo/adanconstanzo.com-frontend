import React from 'react';
import BlogCard from '../BlogCard';

const Blogs = ({ blogs, blogContent }) => (
	<section id="blogs" className="content bg-color-primary blogs">
		<h2 className="blogs__h2 color-primary-light blogs-hidden"
			data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayTime": 250 }'>
			<a className="color-primary-light" target="_blank" rel="noopener noreferrer" href="/blogs">{blogContent.blogTitle}</a>
		</h2>
		<div className="grid blogs-hidden">
			{blogs.map((blog, i) => <BlogCard key={i} blog={blog} />)}
		</div>
	</section>
);

export default Blogs;