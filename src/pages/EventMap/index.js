// Libraries 
import React, { useEffect } from 'react';
import Script from 'react-load-script'
// Components
import LoadingScreen from '../../components/LoadingScreen';
import Query from '../../components/Query';
import MapPopUp from '../../components/MapPopUP';
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




export default HikingMap;