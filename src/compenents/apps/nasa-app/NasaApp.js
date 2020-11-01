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
        latitude: position.coords.latitude.toFixed(2),
        longitude: position.coords.longitude.toFixed(2)
      })
      this.reverseGeocodeCoordinates();
  };

  reverseGeocodeCoordinates(){
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${this.state.latitude}${this.state.longitude}/nearbyCities?minPopulation=3000&radius=100`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "e709eaa768msha339c8dd2905ef3p10f902jsne18543303916"
      }
    })
    .then(response => response.json())
    .then(data => this.setState({userCity: data.data[0].city}))
     .catch(error => alert(error))
  }



  handleLocationError(error){
  
    switch(error.code) {
        case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
        case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
        case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
        case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
    }
      
  }

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

            <p>
              Nearest City: {this.state.userCity}
            </p>

            {    
            this.state.latitude && this.state.longitude ? <img id="geoImage" alt="sat imagery" defer src={`https://api.nasa.gov/planetary/earth/imagery?lon=${this.state.longitude}&lat=${this.state.latitude}&date=2020-02-01&api_key=${key}`} />
            : null };


          </div>
      )
  }
  
}

export default NasaApp;



