import React from 'react';

const EventView = ({ event }) => {
	const popImageUrl = process.env.NODE_ENV !== "development"
	? `https://api.adanconstanzo.com${event.popUpImage.url}`
	: process.env.REACT_APP_BACKEND_URL + event.popUpImage.url;
	return (
		<div class="eventView">
			<img src={popImageUrl} ></img>
			<div class="general-info">
				<p class="name">{event.name}</p>
				<p class="location">{event.city}, {event.state}</p>
				<div>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star" aria-hidden="true"></i>
					<i class="fa fa-star-o" aria-hidden="true"></i>
				</div>
			</div>
			<div class="user-info">
				<p class="description">{event.description}</p>
				<a href="/more" >More Information</a>
			</div>
		</div>
	);
}

export default EventView;