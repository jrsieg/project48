import React from 'react';


const key = 'uH5WI33JEtMHHksjosSpzqqocBAHAJioxaTjVmFb'



class NasaApp extends React.Component {



  constructor(props) {
      super(props);
      this.state = {
          latitude: null,
          longitude: null
      };
      this.getLocation = this.getLocation.bind(this);
      this.getCoordinates = this.getCoordinates.bind(this);

  }

  getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCoordinates);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
  }

  getCoordinates(position) {

      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
  };



  render() {
      return(
          <div>
            <button onClick = {this.getLocation}>Get Coordinates</button>

            <p>
                Latitude: {this.state.latitude}
            </p>

            <p>
                Longitude: {this.state.longitude}
            </p>

            {    
            this.state.latitude && this.state.longitude ? <img alt="sat imagery" defer src={`https://api.nasa.gov/planetary/earth/imagery?lon=${this.state.longitude}&lat=${this.state.latitude}&date=2014-02-01&api_key=${key}`} />
            : null };


          </div>
      )
  }
  
}

export default NasaApp;



