import React from 'react';

function NasaApp(props){
// const key = 'uH5WI33JEtMHHksjosSpzqqocBAHAJioxaTjVmFb'

// class NasaApp extends React.Component {



//   constructor(props) {
//       super(props);
//       this.state = {
//           latitude: null,
//           longitude: null
//       };
//       this.getLocation = this.getLocation.bind(this);
//       this.getCoordinates = this.getCoordinates.bind(this);

//   }

//   getLocation() {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(this.getCoordinates);
//       } else {
//         alert("Geolocation is not supported by this browser.");
//       }
//   }

//   getCoordinates(position) {

//       this.setState({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//       })
//   };



      return(
        <div className="box">
            <div className="centerH">

            <img className="nasaPhoto" alt="sat imagery" defer src={`https://api.nasa.gov/planetary/earth/imagery?lon=86.1581&lat=39.7684&date=2014-02-01&api_key=uH5WI33JEtMHHksjosSpzqqocBAHAJioxaTjVmFb`} />
            <p>sky view</p>
            </div>
          </div>
      )

  
}

export default NasaApp;