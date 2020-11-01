
import React,  { useEffect, useState } from 'react';
import './App.css';
import ShowZomato from './Zomato/Zomato';
import Weather from './Weather/Weather';
import NasaApp from './Nasa/Nasa'; // from Adolfo's version



function App() {


  // ******* ZOMATO API *******

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('indianapolis');

  const [restaurants, setRestaurants] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState([]);

  const [temp, setTemp] = useState([]);

  const [imageURL, settImageURL] = useState([]);

    useEffect(() => { //call this functions on click


      // ********************** ZOMATO API ************************** //
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
          setError("No reviews for this city. Try another one");
          setRatings("");
          setRestaurants("");
          return;

        })

        // ************************ WEATHER API ************************** //

        //****** Weather API FUNCTION ****/
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=01c905cbdcf2eb6417b6745dc9318f11`

          fetch(url)
            .then(response => response.json())
            .then((jsonData) => {
              // jsonData is parsed json object received from url
              const weatherData = jsonData; //grab all resulting data on const
              console.log(weatherData.main.temp);
              setTemp(weatherData.main.temp); //grab temp from const and store on 'temp'
            })
            .catch((error) => {
              // handle your errors here
              console.error(error)
            })


        // ************************** NASA API HERE *************************** //

        //----/// We are missing convertion from city to coordinates ///----//
        
        // so far we have user store city name on search box
        // user's search is stored in "query" variable already inside this whole useEffect()
        
        //*** WE NEED SOMETHING LIKE THIS TO PULL COORDINATES AND ADD TO LINE 100 ***
        //function convert(query){


            //do something here to convert


            //return(
              //coordinates = {
                //lat:x,
                //lon:y
              //})
            //}
         
        //ONCE WE GET THE LAT, LON VALUES, WE SHOULD BE ABLE TO INSERT ON EACH VAR BELOW

        // const url2 = `https://api.nasa.gov/planetary/earth/imagery?lon=${coordinates.lon}&lat=${coordinates.lat}&date=${today}&api_key=uH5WI33JEtMHHksjosSpzqqocBAHAJioxaTjVmFb`
 

        const url2 = `https://api.nasa.gov/planetary/earth/imagery?lon=104.91&lat=39.46&date=2020-10-31&api_key=uH5WI33JEtMHHksjosSpzqqocBAHAJioxaTjVmFb`

        settImageURL(url2);

    }, [query]);//user input stored in "query" (city)
  
    
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
        <span className="logoIcon"><ion-icon name="glasses-outline"></ion-icon></span>
        <h1 className="logo">dateNerd</h1>
        <p>Plan the perfect restaurant date today</p><br></br>
        <form onSubmit={getSearch} className="searchBox">
          <input className="searchInput" type="text" placeholder="Enter a city" value={search} onChange={updateSearch}/>
          <button className="searchButton" type="submit">search</button>
        </form>

        <div className="app">
          
            <Weather weather={temp} />
            <ShowZomato name={restaurants} rating={ratings} votes={votes} error={error}/>

              <NasaApp image={imageURL} />  {/* I'm juswt calling the component here and manipulating the image with #geoImage in App.css */}
          
        </div>

      <div className="box"><Weather /></div>
      </div>
    </div>
  )}
  


export default App;