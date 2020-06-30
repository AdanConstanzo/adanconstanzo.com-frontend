// Libraries
import React from 'react';
// Component
const BlogCard = ({ blog }) => {
	const coverImage = process.env.NODE_ENV !== "development"
		? `https://api.adanconstanzo.com/${blog.coverImage.url}`
		: process.env.REACT_APP_BACKEND_URL + blog.coverImage.url;
	return (
		<figure className="effect-sadie blogs-hidden-div" data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>
			<img src={coverImage} alt={blog.title} />
			<figcaption>
				<h2>{blog.title}<br/><span>{blog.subTitle}</span></h2>
				<p>{blog.description}</p>
				<a href={`/blog/${blog.id}`} target="_blank" rel="noopener noreferrer" >View more</a>
			</figcaption>
		</figure>
	)
}

export default BlogCard;