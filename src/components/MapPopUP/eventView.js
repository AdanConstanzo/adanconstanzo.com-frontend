// Libraries
import React, { useState, Fragment, useEffect, useRef } from 'react';
import { Portal } from 'react-portal';
import StarRating from './starRating';
import Gallery from '../Gallery'

// Component
const EventView = ({ event }) => {
	const popImageUrl = process.env.NODE_ENV !== "development"
	? `https://api.adanconstanzo.com${event.popUpImage.url}`
	: process.env.REACT_APP_BACKEND_URL + event.popUpImage.url;
	const [visible, setVisible] = useState(false);
	return (
		<Fragment>
			<div className="eventView">
				<img src={popImageUrl} alt={event.name} ></img>
				<div className="general-info">
					<p className="name">{event.name}</p>
					<p className="location">{event.city}, {event.state}</p>
					<StarRating stars={event.starRating} />
				</div>
				<div className="user-info">
					<p className="description center">{event.description}</p>
					<div>
						<span onClick={()=>setVisible(true)} className="galleryIcon">Images<i className="fa fa-picture-o" aria-hidden="true"></i></span>
						<a href={`/event/${event.id}`} target="_blank" rel="noopener noreferrer" >
							Blog Post
							<i className="fa fa-external-link" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
			{ visible && <ImageModal id={event.id} setVisible={setVisible} name={event.name} />}
			
		</Fragment>
	);
}

const ImageModal = ({ id, name, setVisible }) => {
	const ModalRef = useRef(null);
	useEffect(() => {
		const modal = ModalRef.current;
		modal.classList.remove('hidden');
	})
	const closeModal = () => {
		const modal = ModalRef.current;
		modal.classList.add('hidden');
		return setTimeout(() => {
			setVisible(false);
		}, 200);
	}
	return (
		<Portal>
			<div ref={ModalRef} className="ImageModal hidden">
				<div className="Content" >
					<Gallery id={id} name={name} setVisible={closeModal} />
				</div>
			</div>
		</Portal>
	)
}

export default EventView;