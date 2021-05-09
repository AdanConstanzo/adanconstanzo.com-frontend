import React from 'react';
import { FormatUrlSrc } from '../../utils/index';

const BlogCard = ({ blog }) => (
	<figure className="effect-sadie blogs-hidden-div" data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>
		<img src={FormatUrlSrc(blog.coverImage.url)} alt={blog.title} />
		<figcaption>
			<h2>{blog.title}<br/><span>{blog.subTitle}</span></h2>
			<p>{blog.description}</p>
			<a href={`/blog/${blog.id}`} target="_blank" rel="noopener noreferrer" >View more</a>
		</figcaption>
	</figure>
);

export default BlogCard;