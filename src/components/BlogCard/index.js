// Libraries
import React, { useEffect } from 'react';
// Scripts
import SetBlogs from '../../scripts/blogs';
// Utilities
import { checkProjectScroll } from '../../scripts/utils';
// Component
const BlogCard = ({ blog }) => {
	const coverImage = process.env.NODE_ENV !== "development"
		? blog.coverImage.url
		: process.env.REACT_APP_BACKEND_URL + blog.coverImage.url;
	useEffect(() => {
		SetBlogs();
    const blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
    blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);
    checkProjectScroll(blogsScrollEvent)();
    window.addEventListener('scroll', blogsScrollEvent.func);
	})
	return (
		<figure className="effect-sadie blogs-hidden-div" data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>
		<img src={coverImage} alt="the f.e.w.w." />
		<figcaption>
			<h2>{blog.title}<br/><span>{blog.subTitle}</span></h2>
			<p>{blog.description}</p>
			<a href={blog.url} target="_blank" rel="noopener noreferrer" >View more</a>
		</figcaption>
	</figure>
	)
}

export default BlogCard;