// Libraries
import React, { useEffect } from 'react';
// Scripts
import SetBlogs from '../../scripts/blogs';
import SetNav from '../../scripts/nav';
// Utilities
import { checkProjectScroll } from '../../scripts/utils';
import BlogCard from '../BlogCard';
// Component
const Blogs = ({ blogs }) => {

	useEffect(() => {
		SetBlogs();
    const blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
    blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);
    checkProjectScroll(blogsScrollEvent)();
		window.addEventListener('scroll', blogsScrollEvent.func);
		SetNav('blogs');
	})

	return (
		<section id="blogs" className="content bg-color-primary blogs">
			<h2 className="blogs__h2 color-primary-light blogs-hidden" data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayTime": 250 }'>Check Out Some Of My Blogs</h2>
			<div className="grid blogs-hidden">
				{blogs.map((blog, i) => <BlogCard key={i} blog={blog}  />)}
			</div>
		</section>
	)
}

export default Blogs;