import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
    render(){
        return(
        	<div>
		    	<Map style={{width: '40%', height: '42.8%', position: 'relative'}} google={this.props.google} zoom={14} initialCenter={{lat: 41.881832, lng: -87.623177}}>
		        	<Marker onClick={this.onMarkerClick}
		        		name={'Current Location'} />
		        	<InfoWindow onClose={this.onInfoWindowClose} >
		        		<div>
		        			<h1></h1>
		        		</div>
		        	</InfoWindow>
		        </Map>
		    </div>
        )
    }
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
})(MapContainer)