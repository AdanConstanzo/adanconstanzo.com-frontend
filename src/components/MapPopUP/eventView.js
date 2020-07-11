// Libraries
import React from 'react';
import StarRating from './starRating';
// Component
const EventView = ({ event }) => {
	const popImageUrl = process.env.NODE_ENV !== "development"
	? `https://api.adanconstanzo.com${event.popUpImage.url}`
	: process.env.REACT_APP_BACKEND_URL + event.popUpImage.url;
	return (
		<div class="eventView">
			<img src={popImageUrl} alt={event.name} ></img>
			<div class="general-info">
				<p class="name">{event.name}</p>
				<p class="location">{event.city}, {event.state}</p>
				<StarRating stars={event.starRating} />
			</div>
			<div class="user-info">
				<p class="description center">{event.description}</p>
				{/* <a href="/more" >Blog Post</a> */}
				<div>
					<a href="/page">
						Blog Post
						<i class="fa fa-external-link" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default EventView;