import React, { Component } from 'react';
import MapContainer from './Map';
import Quakes from './Quakes';

class App extends Component {
  constructor(){
    super();
    this.state = {
      earthquakes: []
    }
  }


  getEarthQuakes = async () => {
    try{

      const earthquakes     = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
      const earthquakesJson = await earthquakes.json();
      return earthquakesJson;

    } catch(err){
      console.error(`Error: `, err);
      return err;
    }
  }

  componentDidMount(){

    this.getEarthQuakes().then(data=>{

      this.setState({earthquakes: data.features})

    }).catch(err=> console.error(`Error: `, err))

  }


  render() {
    console.log(`this.state.earthquakes: `, this.state.earthquakes);
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer quakes={this.state.earthquakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes quakes={this.state.earthquakes}/>
        </div>
      </div>
    );
  }
}

export default App;
