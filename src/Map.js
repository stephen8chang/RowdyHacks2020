import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
import { withRouter } from 'react-router-dom';
import './App.css'
class Map extends React.Component {
  state = {
    directions: null
  };

  componentDidMount() {

    const google = window.google
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: 29.892213, lng: -95.551238 };
    const destination={lat: 29.920824, lng: -95.597204};
    directionsService.route(
      {
        origin: origin,
        
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints:[
          {
             location: new google.maps.LatLng(29.904,  -95.555 )
          },
        ]
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >
        <DirectionsRenderer
           origin={{ lat: 40.756795, lng: -73.954298 }} destination={{ lat: 41.756795, lng: -78.954298 }}
        />
      </GoogleMap>
    ));
    const GoogleMapExample2 = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ));

    return (
      <div class="w-50 mx-auto">
        
        <GoogleMapExample2
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default withRouter(Map);