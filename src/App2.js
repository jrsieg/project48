
// import React,  { useState } from 'react';
// import './App.css';
// import ShowZomato from './Zomato/Zomato';
// import Weather from './Weather/Weather';
// import NasaApp from './Nasa/Nasa'; // from Adolfo's version



// function App() {

//   // ************************** NASA API HERE *************************** //

//   getLocation();

//   const [lat, setLat] = useState([]);
//   const [lon, setLon] = useState([]);
//   const [city, setCity] = useState([]);

//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//       alert("Geolocation is not supported by this browser.");
//     }
//   }
  
//   function showPosition(position) {
//     setLat(position.coords.latitude)
//     setLon(position.coords.longitude) 
//     console.log(lat) 
//     console.log(lon) 
//   }

//   function reverseGeocodeCoordinates(){
//   //***** calling reverse coordinates here ****
//     fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${lat}${lon}/nearbyCities?minPopulation=3000&radius=100`, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
//         "x-rapidapi-key": "e709eaa768msha339c8dd2905ef3p10f902jsne18543303916"
//       }
//     })
//     .then( async response3 => response3.json())
//     .then((jsonNasaData) => {
//       // jsonData is parsed json object received from url
//       const city = await jsonNasaData; //grab all resulting data on const
//       setCity(city);
//     })
//     .catch((error) => {
//       // handle your errors here
//       console.error(error)
//     })

//   }

//     // ******* ZOMATO API *******

//     // const [search, setSearch] = useState('');
//     // const [query, setQuery] = useState('indianapolis');

//     const [restaurants, setRestaurants] = useState([]);
//     const [ratings, setRatings] = useState([]);
//     const [votes, setVotes] = useState([]);
//     const [error, setError] = useState([]);

//     const [temp, setTemp] = useState([]);


//     // useEffect(() => { //call this functions on click


//     // ********************** ZOMATO API ************************** //
//     fetch(`https://developers.zomato.com/api/v2.1/search?q=${city}&count=5&sort=rating&order=desc`, {
//       headers: {
//           Accept: "application/json",
//           "User-Key": "ce392038dd28b0230c9b810853759c8b"
//       }
//       }).then( async response => {
//           const data = await response.json();

//           // console.log(data.restaurants[0].restaurant.name);
//           setError("");

//           //store data returned into variable "restaurants"
//           setRatings(data.restaurants[0].restaurant.user_rating.aggregate_rating);
          
//           setRestaurants(data.restaurants[0].restaurant.name);

//           setVotes(data.restaurants[0].restaurant.user_rating.votes,"votes");
//       }
//       )
//       .catch( async response => {
//         console.log("error")
//         setVotes(<ion-icon name="sad-outline"></ion-icon> );
//         setError("No reviews for this city. Try another one");
//         setRatings("");
//         setRestaurants("");
//         return;

//       })

//       // ************************ WEATHER API ************************** //

//       //****** Weather API FUNCTION ****/
//       const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01c905cbdcf2eb6417b6745dc9318f11`

//         fetch(url)
//           .then(response => response.json())
//           .then((jsonData) => {
//             // jsonData is parsed json object received from url
//             const weatherData = jsonData; //grab all resulting data on const
//             console.log(weatherData.main.temp);
//             setTemp(weatherData.main.temp); //grab temp from const and store on 'temp'
//           })
//           .catch((error) => {
//             // handle your errors here
//             console.error(error)
//           })


        
 
//     // }, [query]);//user input stored in "query" (city)
  
    
//     // const updateSearch = e => {
//     //     setSearch(e.target.value)
//     // }

//     // const getSearch = e => {
//     //   e.preventDefault();
      
//     //   console.log(search)
//     //   setQuery(search);
      
//     // }

    
//   return (
//     <div className="wrapper" >
      
//       <div className="center">
//         <span className="logoIcon"><ion-icon name="glasses-outline"></ion-icon></span>
//         <h1 className="logo">foodNerd</h1>
//         <p>Find the best local restaurant in town</p><br></br>
//         <form onSubmit={getSearch} className="searchBox">
//           <input className="searchInput" type="text" placeholder="Enter a city" value={search} onChange={updateSearch}/>
//           <button className="searchButton" type="submit">Find now!</button>
//         </form>

//         <div className="app">
          
//             <Weather weather={temp} />
//             <ShowZomato name={restaurants} rating={ratings} votes={votes} error={error}/>

//             <NasaApp imageLat={lat} imageLon={lon} />  {/* I'm juswt calling the component here and manipulating the image with #geoImage in App.css */}
          
//         </div>

     
//       </div>
//     </div>
//   )}
  


// export default App;