// Libraries 
import React, { useEffect } from 'react';
import Gallery from 'react-grid-gallery';
// Components
import Query from "../../components/Query";
// Queries
import GALLERY_QUERY from "../../queries/event/eventImages";
// Component
class Collection extends React.Component {
  GetImageUrl = (url) => {
		const imageUrl = process.env.NODE_ENV !== "development"
						? `https://api.adanconstanzo.com${url}`
						: process.env.REACT_APP_BACKEND_URL + url;
		return imageUrl;
	}
  render(){
    return (
      <div>
				<Query query={GALLERY_QUERY} id={4}>
					{({ data: { mapEvent } }) => {
						const images = mapEvent.Gallery.map(image => {
							const thumbnail = `/uploads/thumbnail_${image.hash}${image.ext}`;
							return {
								src: this.GetImageUrl(image.url),
								thumbnail: this.GetImageUrl(thumbnail),
							}
						});
						console.log(images);
						return (
							<React.Fragment>
								<Gallery enableImageSelection={false} images={images}/>
							</React.Fragment>
						);
					}}
				</Query>
      </div>
    )
    
  }
}

export default Collection;