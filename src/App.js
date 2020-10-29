import React from 'react';
import './App.css';
const baseURl = 'https://api.airvisual.com/v2/city?';
const key = 'c3606135-b947-439f-8e8b-57ce6253a66a';


function App() {
  return (
    <div>
      <div>Food</div>
      <h4>return: best restaurant near you</h4>

      <div>nasa</div>
      <h4>return: satellite image </h4>

      <h3>Weather</h3>
      </div>

  function fetchData {
      e.preventDefault()
      url = `${baseURl}city=Indianapolis&state=Indiana&country=USA&key=${key}`
      fetch(url)
        .then(result => result.json())
        .then(jsonified => displayData(jsonified));
    function displayData(jsonified) {
      console.log(jsonified)
    let pr=document.getElementById("pr")
    precipitation = jsonified.data.current.weather.pr
    pr.innerHTML = pr.innerHTML+ (`${precipitation}`);
  }
}

export default App;