// Libraries 
import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';
// Components
import Query from "../Query";
// Queries
import GALLERY_QUERY from "../../queries/event/eventImages";
import LoadingScreen from '../LoadingScreen';
// Component
const Collection = ({ id, name, setVisible }) => (
	<div>
		<Query query={GALLERY_QUERY} id={id}>
			{({ data: { mapEvent }}) => <GalleryContent setVisible={setVisible} name={name} mapEvent={mapEvent} />} 
		</Query>
	</div>
)
const GalleryContent = ({ mapEvent, name, setVisible }) => {
	const [images, setImages ] = useState([]);
	const [load, setLoad] = useState(false);
	useEffect(() => {
		const GetImageUrl = (url) => {
			const imageUrl = process.env.NODE_ENV !== "development"
			? `https://api.adanconstanzo.com${url}`
			: process.env.REACT_APP_BACKEND_URL + url;
			return imageUrl;
		}
		const loadImage = async (imageUrl) => {
			const img = new Image();
			img.src= imageUrl;
			return new Promise((resolve, reject) => {
				img.onload = async () => {
					resolve (img);
				}
			});
		}
		const getImages = async (mapEvent) => {
			return await Promise.all(mapEvent.Gallery.map(async image => {
				const thumbnail = `/uploads/thumbnail_${image.hash}${image.ext}`;
				const thumbnailUrl = GetImageUrl(thumbnail);
				const thumbnailImage = await loadImage(thumbnailUrl);
				return {
					src: GetImageUrl(image.url),
					thumbnail: thumbnailUrl,
					thumbnailWidth: thumbnailImage.width,
					thumbnailHeight: thumbnailImage.height,
				}
			}));
		}
		getImages(mapEvent).then(res => {
			setImages(res);
			setLoad(true);
		});
	}, [mapEvent]);
	return (
		<div className="Gallery">
			<i className="fa fa-times" aria-hidden="true" onClick={() => setVisible()} ></i>
			<p>{name}</p>
			<div>
			{images.length > 0 && <Gallery enableImageSelection={false} images={images}/> }
			{!load && <LoadingScreen inline={true} />}
			</div>
		</div>
	);
}

export default Collection;