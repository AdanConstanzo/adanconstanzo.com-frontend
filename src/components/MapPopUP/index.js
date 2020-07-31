// Libraries
import React, { createRef } from 'react';
import { IsMobile } from '../../utils/index';
// Components
import TypeToggle from './typeToggle';
import EventView from './eventView';
import FeatureToggle from './FeatureToggle';
// Component
class MapPopUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mapEventMap: {},
			currentEvent: {},
			latlng: {},
			open: false,
			openFilter: false,
			openFeature: false,
			icons : {},
			HasFeatures: false,
			isMobile: false,
		};
		this.myRef = createRef();
		this.filterRef = createRef();
		this.currentContent = createRef();
		this.featureRef = createRef();
	}
	MyMapClickFunction = () => {
		this.setState({ latlng: {} });
		this.myRef.current.classList.remove('animateHeight');
		this.currentContent.current.classList.remove('setOpacityTo1');
		this.setState({ open: false, currentEvent: {}, latlng: {}  });	
	}
	componentDidMount() {
		const { mapEvents, mapIcon } = this.props;
		const L = window.L;
    const mymap = window.mymap;
		const icons = this.generateIcons(mapIcon);
		const isMobile = IsMobile();
		const mapEventMap = {
			"hike": {},
			"cruise": {},
			"food": {},
			"pointOfInterest": {},
			"trip": {}
		}
		// resetting state for latlong
		mymap.on('click', (e) => {
			this.MyMapClickFunction()
		})
    mapEvents.forEach(event => {
      const { latitude, longitude, type } = event;
      // Setting default icons to pointOfInterest else custom icon. 
      const icon = (type === "pointOfInterest") ? null : { icon: icons[type] }
      const marker = L.marker([latitude, longitude], icon).addTo(mymap).on('click', (e) => {
				const { mapEventMap } = this.state;
				const { lat, lng } = e.latlng;
				this.myRef.current.classList.add('animateHeight');
				this.currentContent.current.classList.add('setOpacityTo1');
				this.setState({ open: true, currentEvent: mapEventMap[type][`${lat}-${lng}`], latlng: e.latlng });
				const D = 0.01140599716802626;
				if (!isMobile) {
					mymap.flyTo([latitude, longitude + D], 14);
				}
			});
      const tempEvent = {...event};
      tempEvent.marker = marker;
			mapEventMap[type][`${event.latitude}-${event.longitude}`] = tempEvent;
		});
		this.setState({ mapEventMap, icons, HasFeatures: JSON.parse(localStorage.getItem("HasFeatures")), isMobile });
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
		});
	}

	openSideNav = () => {
		const { open } = this.state;
		if (open) {
			this.myRef.current.classList.remove('animateHeight');
			this.currentContent.current.classList.remove('setOpacityTo1');
			this.setState({ open: !open, currentEvent: {} })
		} else {
			this.myRef.current.classList.add('animateHeight');
			this.setState({ open: !open })
		}
	};

	openFilter = (filterRef, featureRef) => () => {
		const { openFilter } = this.state;
		if (openFilter) {
			filterRef.current.classList.remove('animateFilter');
			filterRef.current.classList.add('icon-hide');
			featureRef.current.classList.remove('DisplayNone');
		} else {
			filterRef.current.classList.add('animateFilter');
			featureRef.current.classList.add('DisplayNone');
			setTimeout(() => {
				filterRef.current.classList.remove('icon-hide');
			}, 400);
		}
		this.setState({ openFilter: !openFilter });
	}

	openFeature = (filterRef, featureRef) => () => {
		const { openFeature } = this.state;
		if (openFeature) {
			filterRef.current.classList.remove('animateFilter');
			filterRef.current.classList.add('icon-hide');
		} else {
			filterRef.current.classList.add('animateFilter');
			setTimeout(() => {
				filterRef.current.classList.remove('icon-hide');
			}, 400);
		}
		this.setState({ openFeature: !openFeature });
	}

	render() {
		const { currentEvent, icons, HasFeatures, isMobile } = this.state;
		return (
			<div id="mapNavBar" style={{ zIndex: 1000 }} ref={this.myRef} >
				<div onClick={this.openSideNav} className="arrow-click" >
					<i className="fa my-caret" aria-hidden="true"></i>
				</div>
				<div className="Settings">
					<TypeToggle 
						icons={icons}
						openFilter={this.openFilter}
						hideType={this.hideType}
						showType={this.showType}
						filterRef={this.filterRef}
						featureRef={this.featureRef}
					/>
					{(HasFeatures && !isMobile) &&
						<FeatureToggle
							filterRef={this.filterRef} 
							featureRef={this.featureRef}
							openFeature={this.openFeature}
							MyMapClickFunction={this.MyMapClickFunction}
						/>
					}	
				</div>
				<div ref={this.currentContent} className="eventContent">
					{Object.keys(currentEvent).length > 0 && <EventView event={currentEvent} isMobile={isMobile} />}	
				</div>
			</div>
		)
	}
}

export default MapPopUp;