import React from 'react';

const baseURl = 'https://api.airvisual.com/v2/city?';
const key = 'c3606135-b947-439f-8e8b-57ce6253a66a';

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

function weather (props) {
    url = `${baseURl}city=Indianapolis&state=Indiana&country=USA&key=${key}`
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

export default weather; 