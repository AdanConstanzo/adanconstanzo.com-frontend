// Libraries
import React from 'react';
// Component
const StarRating = ({ stars }) => {
	const blankStars = 5 - stars;
	const starsArray = [...Array(stars)];
	const blankStarsArray = [...Array(blankStars)];
	return (
		<div>
			{starsArray.map((_, i) => <i key={i} className="fa fa-star" aria-hidden="true"></i>)}
			{blankStarsArray.map((_, i) => <i key={i} className="fa fa-star-o" aria-hidden="true"></i>)}
		</div>
	)
}

export default StarRating;