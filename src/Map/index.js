import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
    render(){
    	console.log(this.props.quakes);
    	const quakeMarkers = this.props.quakes.map((quake, i) => {
    		return(
    			<Marker key={quake.id} name={quake.properties.place} position={{lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0]}} icon={{url: 'http://i65.tinypic.com/wtx1kw.png'}} />
    		)
    	})
    	console.log(quakeMarkers);
        return(
        	<div>
		    	<Map style={{width: '40%', height: '37.2%', position: 'relative'}} google={this.props.google} zoom={1} initialCenter={{lat: 41.881832, lng: -87.623177}}>
		        	<Marker name={'GA'} position={{lat: 41.890612, lng: -87.626823}} />
		        	{quakeMarkers}
		        	<InfoWindow onClose={this.onInfoWindowClose} >
		        		<div>
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