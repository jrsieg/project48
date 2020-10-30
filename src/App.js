import React,  { useEffect, useState } from 'react';
import './App.css';
import ShowZomato from './Zomato/Zomato';


function App() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('indianapolis');

  const [restaurants, setRestaurants] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState([]);

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
        }, [query]);
    
    // const getRestaurants = () =>{
    
    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
      e.preventDefault();
      console.log(search)
      setQuery(search);
      
    }

        
    // };

  return (
    <div className="wrapper" >
      <div className="center">
        <form onSubmit={getSearch} className="searchBox">
          <input type="text" value={search} onChange={updateSearch}/>
          <button type="submit">search</button>
        </form>

        <div className="app">
          <ShowZomato name={restaurants} rating={ratings} votes={votes} error={error}/>
         
          <div className="box">nasa
          <h4>return: satellite image </h4>
          </div>

          <div className="box">weather
          <h4>return: weather</h4>
          </div>
        </div>

        </div>
      
    </div>
  );
}

export default App;
