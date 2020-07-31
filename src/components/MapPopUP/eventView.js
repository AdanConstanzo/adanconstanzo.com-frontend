// Libraries
import React, { useState, Fragment, useEffect, useRef } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { Portal } from 'react-portal';
// Components
import StarRating from './starRating';
import Gallery from '../Gallery'
// Query
import MAP_HIKE_ROUTE from '../../queries/mapEvent/HikeRoute';
let line = null;
// Component
const EventView = ({ event, isMobile }) => {
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
					{event.showRating &&<StarRating stars={event.starRating} />}
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
			{/* IF hike then grab routeCoordinates, else plot nothing. */}
			{(event.type === "hike" && !isMobile) ? <GetHikeRoute id={event.id}/> : <PaintRoute RouteCoordinaates={null} />}
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

// Paints polyline to map based on routeCoordinates from hike.
// Doesn't return anything, just runs some javascript from component. 
// Required to pass in a component for Apollo useQuery hook.
const PaintRoute = ({ RouteCoordinaates }) => {
	useEffect(() => {
		const latlngs = JSON.parse(RouteCoordinaates);
		const L = window.L;
		const mymap = window.mymap;
		if (line !== null) {
			if (line.remove) {
				line.remove(mymap);
			}
		}
		if (latlngs !== null) {
			line = new L.polyline(latlngs, {
				color: 'red',
				weight: 3,
				opacity: 0.5,
				smoothFactor: 1
			});
			line.addTo(mymap);
		}
	}, [RouteCoordinaates]);
	return (
		null
	)
}
// Retrieves data from MAP_HIKE_ROUTE query and returns PaintRoute to plot route.
const GetHikeRoute = ({ id }) => {
	const { data, loading } = useQuery(MAP_HIKE_ROUTE, { variables: { id } });
	if (loading) return null;
	return <PaintRoute RouteCoordinaates={data.mapEvent.routeCoordinates} />
}

export default EventView;