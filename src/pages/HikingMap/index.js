// Libraries 
import React, { useEffect } from 'react';
import Script from 'react-load-script'
// Components
import LoadingScreen from '../../components/LoadingScreen';
import Query from '../../components/Query';
// Queries 
import MAP_EVENT_QUERY from "../../queries/mapEvent";
// Component
class HikingMap extends React.Component {
  state ={
    loaded: false
  };
  setIt = () => this.setState({ loaded: true })
  render(){
    const { loaded } = this.state;
    if (loaded === true) {
      return(
        <React.Fragment>
          <Map style={{zIndex: 1}}>
          <Query query={MAP_EVENT_QUERY}>
            {({ data: { mapEvents, mapIcon } }) => 
              <MapPopUp mapEvents={mapEvents} mapIcon={mapIcon} />
            }
          </Query>
          </Map>
        </React.Fragment>
      )
    } 
    return (
      <div>
          <Script
            url="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
            integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
            onLoad={this.setIt}
          />
          <LoadingScreen />
        </div>
    )
    
  }
}

const makeMarkerPopUp = (imgUrl, hikeUrl, hikeName, hikeCity) => {
  return  `<div class="popup">`+
            `<a href='${hikeUrl}'/>` + 
              `<img width='200' src='${imgUrl}' />` +
            `</a>` + 
            `<br/>` +
            `<b>${hikeName}, ${hikeCity}</b>`+
          `</div>`;
}

const Map = (props) => {
  const L = window.L;
  useEffect(() => {
    // Set to Los Angeles
    window.mymap = L.map('mapid').setView([34.0522, -118.2437], 10);
    const mymap = window.mymap;
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZGFuY29uYWJsZSIsImEiOiJja2M5enNvNWYwcWljMnJwZmVucjVlM2ZwIn0.klTqB0XKz6MMwx-cqUcnOg'
    }).addTo(mymap);
  });
  return (
    <React.Fragment>
      <div id="mapid"></div>
      {props.children}
    </React.Fragment>
  )
}

const MapPopUp = ({ mapEvents, mapIcon }) => {
  const mapEventMap = {}
  const goToAPlace = (lat,lon) => () => {
    window.mymap.flyTo([lat, lon], 12)
    mapEventMap[`${lat}-${lon}`].marker.openPopup();
  }
  useEffect(() => {
    const L = window.L;
    const mymap = window.mymap;
    const icons = generateIcons(mapIcon);
    mapEvents.forEach(event => {
      const { latitude, longitude, name, description, city, id, type } = event;
      const popImageUrl = process.env.NODE_ENV !== "development"
      ? `https://api.adanconstanzo.com${event.popUpImage.url}`
      : process.env.REACT_APP_BACKEND_URL + event.popUpImage.url;
      const hikeUrl = `/hike/${id}`;
      // Setting default icons to pointOfInterest else custom icon. 
      const icon = (type === "pointOfInterest") ? null : { icon: icons[type] }
      const marker = L.marker([latitude, longitude], icon).addTo(mymap);
      marker.bindPopup(makeMarkerPopUp(popImageUrl, hikeUrl, name, city));
      const tempEvent = {...event};
      tempEvent.marker = marker;
      mapEventMap[`${event.latitude}-${event.longitude}`] = tempEvent;
    });
  });
  return (
    <div id="popUp" style={{ zIndex: 1000 }} >
      {mapEvents.map((event, i) => <p key={i} onClick={goToAPlace(event.latitude, event.longitude)}>{event.name}</p>)}
    </div>
  );
}

// Function to generate icons for map.
const generateIcons = (mapIcons) => {
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


export default HikingMap;