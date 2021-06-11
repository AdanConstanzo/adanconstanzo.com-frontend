import React, { createRef } from "react";
import { IsMobile, FormatUrlSrc } from "../../utils/index";
import TypeToggle from "./typeToggle";
import CategoryToggle from "./CategoryToggle";
import EventView from "./eventView";
import FeatureToggle from "./FeatureToggle";

const LAT_HIKE_OFFSET = 0.01140599716802626;
const LAT_FOOD_OFFSET = 0.00080599716802626;
const VIEW_HIKE = 14;
const VIEW_FOOD = 18;

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
      icons: {},
      HasFeatures: false,
      isMobile: false,
    };
    this.mapNavBarRef = createRef();
    this.filterRef = createRef();
    this.eventContentRef = createRef();
    this.featureRef = createRef();
    this.categoryRef = createRef();
  }
  componentDidMount() {
    this.SetMapEventAndMarkers();
  }

  // resetting state for latlong and currentEvent
  MyMapClickFunction = () => {
    this.setState({ latlng: {} });
    this.mapNavBarRef.current.classList.remove("animateHeight");
    this.eventContentRef.current.classList.remove("setOpacityTo1");
    this.setState({ open: false, currentEvent: {}, latlng: {} });
  };

  SetMapEventAndMarkers = () => {
    const { mapEvents, mapIcon } = this.props;
    const Leaflet = window.L;
    const myMap = window.mymap;
    const icons = this.generateIcons(mapIcon);
    const isMobile = IsMobile();
    const mapEventMap = {
      hike: {},
      cruise: {},
      food: {},
      pointOfInterest: {},
      trip: {},
    };

    // binding click event to map
    myMap.on("click", this.MyMapClickFunction);
    // Looping through map events and creating a marker and binding a click event.
    mapEvents.forEach((event) => {
      const { latitude, longitude, type } = event;
      // Setting default icons to pointOfInterest else custom icon.
      const icon = type === "pointOfInterest" ? null : { icon: icons[type] };
      // Create a marker and bind a click event
      const marker = Leaflet.marker([latitude, longitude], icon)
        .addTo(myMap)
        .on("click", (event, Lat, Lng) => {
          const { mapEventMap } = this.state;
          let lat = null;
          let lng = null;
          let latlng = null;
          // sets values for lat,lng,latlng from event or parameters passed.
          if (event === null) {
            lat = Lat;
            lng = Lng;
            latlng = { lat, lng };
          } else {
            lat = event.latlng.lat;
            lng = event.latlng.lng;
            latlng = event.latlng;
          }
          // Animations
          this.mapNavBarRef.current.classList.add("animateHeight");
          this.eventContentRef.current.classList.add("setOpacityTo1");
          // setting state.
          this.setState({
            open: true,
            currentEvent: mapEventMap[type][`${lat}-${lng}`],
            latlng,
          });
          // TODO: Find some good constants for mobile fly.
          if (!isMobile) {
            if (type === "food") {
              myMap.flyTo([latitude, longitude + LAT_FOOD_OFFSET], VIEW_FOOD);
            } else {
              myMap.flyTo([latitude, longitude + LAT_HIKE_OFFSET], VIEW_HIKE);
            }
          }
        });
      // Add marker to object
      const tempEvent = { ...event };
      tempEvent.marker = marker;
      // Set Lat Lng value to event.
      mapEventMap[type][`${event.latitude}-${event.longitude}`] = tempEvent;
    });
    this.setState({
      mapEventMap,
      icons,
      HasFeatures: JSON.parse(localStorage.getItem("HasFeatures")),
      isMobile,
    });
  };

  // Function to generate icons for map.
  generateIcons = (mapIcons) => {
    // Referencing Leafletjs map object.
    const L = window.L;
    // Filtering out __typename from objects.
    const iconsKeys = Object.keys(mapIcons).filter(
      (ele) => ele !== "__typename"
    );
    // Where we are storing our icons.
    const icons = {};
    // Looping through our icons
    iconsKeys.forEach((key) => {
      // collecting information about icon
      const { width, height, url } = mapIcons[key];
      // Generating our Icons with Leafletjs
      const icon = L.icon({
        iconUrl: FormatUrlSrc(url),
        iconSize: [width, height],
        // this anchor works for all images so far.
        popupAnchor: [5, -25],
      });
      icons[key] = icon;
    });
    return icons;
  };

  hideType = (type) => () => {
    const { mapEventMap } = this.state;
    Object.keys(mapEventMap[type]).forEach((ele) => {
      mapEventMap[type][ele].marker.remove();
    });
  };

  showType = (type) => () => {
    const { mapEventMap } = this.state;
    const mymap = window.mymap;
    Object.keys(mapEventMap[type]).forEach((ele) => {
      const { latitude, longitude } = mapEventMap[type][ele];
      mapEventMap[type][ele].marker.setLatLng({
        lat: latitude,
        lng: longitude,
      });
      mapEventMap[type][ele].marker.addTo(mymap);
    });
  };

  openSideNav = () => {
    const { open } = this.state;
    if (open) {
      this.mapNavBarRef.current.classList.remove("animateHeight");
      this.eventContentRef.current.classList.remove("setOpacityTo1");
      this.setState({ open: !open, currentEvent: {} });
    } else {
      this.mapNavBarRef.current.classList.add("animateHeight");
      this.setState({ open: !open });
    }
  };

  openFilter = (filterRef, featureRef, categoryRef) => () => {
    const { openFilter } = this.state;
    if (openFilter) {
      if (filterRef.current != null) {
        filterRef.current.classList.remove("animateFilter");
        filterRef.current.classList.add("icon-hide");
      }
      if (featureRef.current != null) {
        featureRef.current.classList.remove("DisplayNone");
      }
      if (categoryRef.current != null) {
        categoryRef.current.classList.remove("DisplayNone");
      }
    } else {
      if (filterRef.current != null) {
        filterRef.current.classList.add("animateFilter");
      }
      if (featureRef.current != null) {
        featureRef.current.classList.add("DisplayNone");
      }
      if (categoryRef.current != null) {
        categoryRef.current.classList.add("DisplayNone");
      }
      setTimeout(() => {
        filterRef.current.classList.remove("icon-hide");
      }, 400);
    }
    this.setState({ openFilter: !openFilter });
  };

  openFeature = (filterRef, featureRef) => () => {
    const { openFeature } = this.state;
    if (openFeature) {
      filterRef.current.classList.remove("animateFilter");
      filterRef.current.classList.add("icon-hide");
    } else {
      filterRef.current.classList.add("animateFilter");
      setTimeout(() => {
        filterRef.current.classList.remove("icon-hide");
      }, 400);
    }
    this.setState({ openFeature: !openFeature });
  };

  render() {
    const { currentEvent, icons, HasFeatures, isMobile, mapEventMap } =
      this.state;
    const { mapIcon } = this.props;
    return (
      <div id="mapNavBar" style={{ zIndex: 1000 }} ref={this.mapNavBarRef}>
        <div onClick={this.openSideNav} className="arrow-click">
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
            categoryRef={this.categoryRef}
          />
          {Object.keys(mapEventMap).length > 0 && (
            <CategoryToggle
              categoryRef={this.categoryRef}
              mapEventMap={mapEventMap}
              mapIcon={mapIcon}
            />
          )}
          {HasFeatures && !isMobile && (
            <FeatureToggle
              filterRef={this.filterRef}
              featureRef={this.featureRef}
              openFeature={this.openFeature}
              MyMapClickFunction={this.MyMapClickFunction}
            />
          )}
        </div>
        <div ref={this.eventContentRef} className="eventContent">
          {Object.keys(currentEvent).length > 0 && (
            <EventView event={currentEvent} isMobile={isMobile} />
          )}
        </div>
      </div>
    );
  }
}

export default MapPopUp;
