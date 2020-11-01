import React,  { useEffect, useState } from 'react';
import './App.css';
// import ShowZomato from './Zomato/Zomato';
// import Weather from './Weather/Weather';
// import NasaApp from './Nasa/Nasa';


function App() {


  // ******* ZOMATO API *******

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('indianapolis');

  const [restaurants, setRestaurants] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState([]);

  const [temp, setTemp] = useState([]);

    useEffect(() => {
      fetch(`https://developers.zomato.com/api/v2.1/search?q=${query}&count=5&sort=rating&order=desc`, {
        headers: {
            Accept: "application/json",
            "User-Key": "ce392038dd28b0230c9b810853759c8b"
        }
        }).then( async response => {
            const data = await response.json();

            // console.log(data.restaurants[0].restaurant.name);
            setError("");

            //store data returned into variable "restaurants"
            setRatings(data.restaurants[0].restaurant.user_rating.aggregate_rating);
            
            setRestaurants(data.restaurants[0].restaurant.name);

            setVotes(data.restaurants[0].restaurant.user_rating.votes,"votes");
        }
        )
        .catch( async response => {
          console.log("error")
          setVotes(<ion-icon name="sad-outline"></ion-icon> );
          setError("No data for this city. Try another one");
          setRatings("");
          setRestaurants("");
          return;

        })

        // ******* WEATHER API *******

        //****** Weather API FUNCTION ****/
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=01c905cbdcf2eb6417b6745dc9318f11`

          fetch(url)
            .then(response => response.json())
            .then((jsonData) => {
              // jsonData is parsed json object received from url
              const weatherData = jsonData;
              console.log(weatherData.main.temp);
              setTemp(weatherData.main.temp);
            })
            .catch((error) => {
              // handle your errors here
              console.error(error)
            })


        // ******* NASA API *******

        const url2 = `https://api.nasa.gov/planetary/earth/imagery?lon=86.1581&lat=39.7684&date=2014-02-01&api_key=uH5WI33JEtMHHksjosSpzqqocBAHAJioxaTjVmFb`

          fetch(url2)
            .then(response => response.json())
            .then((jsonData2) => {
              // jsonData is parsed json object received from url
              const nasaData = jsonData2;
              console.log(nasaData);
              setTemp(nasaData);
            })
            .catch((error) => {
              // handle your errors here
              console.error(error)
            })



        // const keyNasa = 'uH5WI33JEtMHHksjosSpzqqocBAHAJioxaTjVmFb'

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
        // }
    }, [query]);
  
    
    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
      e.preventDefault();
      // getLocation();
      console.log(search)
      setQuery(search);
      
    }

    
    

  return (
    <div className="wrapper" >
      
      <div className="center">
        
        <form onSubmit={getSearch} className="searchBox">
          <input type="text" value={search} onChange={updateSearch}/>
          <button type="submit">search</button>
        </form>

        <div className="app">
          
            <Weather weather={temp} />
            <ShowZomato name={restaurants} rating={ratings} votes={votes} error={error}/>
            <NasaApp image={"nasaData"} />
          
        </div>

        </div>
      
    </div>
  );
}

export default App;