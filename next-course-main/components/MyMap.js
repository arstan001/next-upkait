import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function GoMap(props){
    const mapStyles = {
        width: '100%',
        height: '200px',
        borderRadius: "10px"
      };
    return (
      <>
        <Map
          google={props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={props.coord}
        >
        <Marker lat = {props.coord.lat} lng = {props.coord.lng}/>
        </Map>
      </>
    );
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCrsbEjySpYLDafcIN7G1uyj2ti7osrK-E'
  })(GoMap);