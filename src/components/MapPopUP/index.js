// Libraries
import React from 'react';
// Components
import TypeToggle from './typeToggle';
// Component
class MapPopUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mapEventMap: {},
			latlng: {},
			open: false,
			icons : {},
			openFilter: false
		};
		this.myRef = React.createRef();
		this.filterRef = React.createRef();
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
			this.myRef.current.classList.remove('animateHeight');
			this.setState({ open: false });
		})
    mapEvents.forEach(event => {
      const { latitude, longitude, name, description, city, id, type, state } = event;
      const popImageUrl = process.env.NODE_ENV !== "development"
      ? `https://api.adanconstanzo.com${event.popUpImage.url}`
      : process.env.REACT_APP_BACKEND_URL + event.popUpImage.url;
      const hikeUrl = `/hike/${id}`;
      // Setting default icons to pointOfInterest else custom icon. 
      const icon = (type === "pointOfInterest") ? null : { icon: icons[type] }
      const marker = L.marker([latitude, longitude], icon).addTo(mymap).on('click', (e) => {
				console.log(e.latlng);
				this.setState({ latlng: e.latlng });
				console.log(type);
				this.myRef.current.classList.add('animateHeight');
				this.setState({ open: true });
			});
      const tempEvent = {...event};
      tempEvent.marker = marker;
      mapEventMap[type][`${event.latitude}-${event.longitude}`] = tempEvent;
		});
		this.setState({ mapEventMap, icons });
		console.log(icons);
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
		} else {
			this.myRef.current.classList.add('animateHeight');
		}
		this.setState({ open: !open });
	};

	openFilter = () => {
		const { openFilter } = this.state;
		if (openFilter) {
			this.filterRef.current.classList.remove('animateFilter');
			this.filterRef.current.classList.add('icon-hide');
		} else {
			this.filterRef.current.classList.add('animateFilter');
			setTimeout(() => {
				this.filterRef.current.classList.remove('icon-hide');
			}, 400);
		}
		this.setState({ openFilter: !openFilter })
	}

	render() {
		const { latlng, icons } = this.state;
		return (
			<div id="mapNavBar" style={{ zIndex: 1000 }} ref={this.myRef} >
				<div onClick={this.openSideNav} class="arrow-click" >
					<i class="fa my-caret" aria-hidden="true"></i>
				</div>
				<div class="icons icon-hide" ref={this.filterRef} >
					{Object.keys(icons).map(type => <TypeToggle type={type} hideType={this.hideType(type)} showType={this.showType(type)}  src={icons[type].options.iconUrl} />)}
					<i onClick={this.openFilter} class="fa fa-filter" aria-hidden="true"></i>
				</div>
				<p>{latlng.lat}</p>
				{(typeof latlng.lat === "number") && <p>Good morning</p>}
			</div>
		)
	}
}

export default MapPopUp;