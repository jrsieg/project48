import React from 'react';

const baseURl = 'https://openweathermap.org/';
const key = '01c905cbdcf2eb6417b6745dc9318f11';

// const weather = (props) => {
//         url = `${baseURl}city=Indianapolis&state=Indiana&country=USA&key=${key}`
//         fetch(url)
//           .then(result => result.json())
//           .then(jsonified => displayData(jsonified));
//           console.log(json)
//       function displayData(jsonified) {
//         console.log(jsonified)
//       let pr=document.getElementById("pr")
//       precipitation = jsonified.data.current.weather.pr
//       pr.innerHTML = pr.innerHTML+ (`${precipitation}`);
//       }
//     }

function Weather (props) {
    const url = `${baseURl}api.openweathermap.org/data/2.5/weather?q={Indianapolis}&appid=${key}`
    fetch(url)
    .then(result => result.json())
    .then(json => {
        console.log(json)
    })
    return (
        <div className="box">
            <h1>Weather</h1>
        </div>
    )
}

export default Weather; 