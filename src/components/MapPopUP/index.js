// Libraries
import React from 'react';
// Component
class MapPopUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mapEventMap: {},
			latlng: {}
		};
	}
	componentDidMount() {
		const { mapEvents, mapIcon } = this.props;
		const L = window.L;
    const mymap = window.mymap;
		const icons = this.generateIcons(mapIcon);
		const mapEventMap = {
			"hike": {},
			"cruise": {},
			"food": {},
			"pointOfInterest": {},
			"trip": {}
		}
		// resetting state for latlong
		mymap.on('click', (e) => {
			this.setState({ latlng: {} });
		})
    mapEvents.forEach(event => {
      const { latitude, longitude, name, description, city, id, type, state } = event;
      const popImageUrl = process.env.NODE_ENV !== "development"
      ? `https://api.adanconstanzo.com${event.popUpImage.url}`
      : process.env.REACT_APP_BACKEND_URL + event.popUpImage.url;
      const hikeUrl = `/hike/${id}`;
      // Setting default icons to pointOfInterest else custom icon. 
      const icon = (type === "pointOfInterest") ? {attribution: 'true'} : { icon: icons[type], attribution: 'true' }
      const marker = L.marker([latitude, longitude], icon).addTo(mymap).on('click', (e) => {
				console.log(e.latlng);
				this.setState({ latlng: e.latlng });
				console.log(type);
			});
      const tempEvent = {...event};
      tempEvent.marker = marker;
      mapEventMap[type][`${event.latitude}-${event.longitude}`] = tempEvent;
		});
		this.setState({ mapEventMap });
	}

	// Function to generate icons for map.
	generateIcons = (mapIcons) => {
		// Referencing Leafletjs map object.
		const L = window.L;
		// Filtering out __typename from objects. 
		const iconsKeys = Object.keys(mapIcons).filter(ele => ele !== '__typename');
		// Where we are storing our icons.
		const icons = {}
		// Looping through our icons 
		iconsKeys.forEach(key => {
			// collecting information about icon
			const { width, height, url } = mapIcons[key];
			// Getting our url.
			const iconUrl = process.env.NODE_ENV !== "development"
				? `https://api.adanconstanzo.com${url}`
				: process.env.REACT_APP_BACKEND_URL + url;
			// Generating our Icons with Leafletjs
			const icon = L.icon({
				iconUrl,
				iconSize: [width, height],
				// this anchor works for all images so far. 
				popupAnchor: [5, -25]
			});
			icons[key] = icon;
		});
		return icons;
	}

	hideType = (type) => () => {
		const { mapEventMap } = this.state;
		Object.keys(mapEventMap[type]).forEach(ele => {
			mapEventMap[type][ele].marker.remove();
		});
	}

	showType = (type) => () => {
		const { mapEventMap } = this.state;
		const mymap = window.mymap;
		Object.keys(mapEventMap[type]).forEach(ele => {
			const { latitude, longitude } = mapEventMap[type][ele];
			mapEventMap[type][ele].marker.setLatLng({
				lat: latitude, lng: longitude 
			});
			mapEventMap[type][ele].marker.addTo(mymap);
			// marker.setLatLng(geo);
      //   marker.addTo(mymap);
		});
	}

	render() {
		const { latlng } = this.state;
		return (
			<div id="mapNavBar" style={{ zIndex: 1000 }} >
				{/* <p onClick={this.hideType('hike')}>Hide Hike</p>
				<p onClick={this.showType('hike')}>Show Hike</p> */}
				{/* <p>{latlng.lat}</p> */}
				{(typeof latlng.lat === "number") && <p>Good morning</p>}
      	{/* {mapEvents.map((event, i) => <p key={i} onClick={goToAPlace(event.latitude, event.longitude)}>{event.name}</p>)} */}
			</div>
		)
	}
}

// const MapPopUp = ({ mapEvents, mapIcon }) => {
//   const mapEventMap = {}
//   const goToAPlace = (lat,lon) => () => {
//     window.mymap.flyTo([lat, lon], 12)
//     mapEventMap[`${lat}-${lon}`].marker.openPopup();
//   }
//   useEffect(() => {
//     const L = window.L;
//     const mymap = window.mymap;
//     const icons = generateIcons(mapIcon);
//     mapEvents.forEach(event => {
//       const { latitude, longitude, name, description, city, id, type, state } = event;
//       const popImageUrl = process.env.NODE_ENV !== "development"
//       ? `https://api.adanconstanzo.com${event.popUpImage.url}`
//       : process.env.REACT_APP_BACKEND_URL + event.popUpImage.url;
//       const hikeUrl = `/hike/${id}`;
//       // Setting default icons to pointOfInterest else custom icon. 
//       const icon = (type === "pointOfInterest") ? null : { icon: icons[type] }
//       const marker = L.marker([latitude, longitude], icon).addTo(mymap).on('click', function(e) {
// 				console.log(e.latlng);
// 			});;
//       // marker.bindPopup(makeMarkerPopUp(popImageUrl, hikeUrl, name, city, state, description));
//       const tempEvent = {...event};
//       tempEvent.marker = marker;
//       mapEventMap[`${event.latitude}-${event.longitude}`] = tempEvent;
//     });
//   });
//   return (
//     <div id="mapNavBar" style={{ zIndex: 1000 }} >

//       {/* {mapEvents.map((event, i) => <p key={i} onClick={goToAPlace(event.latitude, event.longitude)}>{event.name}</p>)} */}
//     </div>
//   );
// }

export default MapPopUp;