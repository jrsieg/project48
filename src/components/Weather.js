import React from 'react';

const baseURl = 'https://openweathermap.org/current';
const key = '01c905cbdcf2eb6417b6745dc9318f11';

// function Weather (props) {
//     const url = `${baseURl}api.openweathermap.org/data/2.5/weather?q={Indianapolis}&appid=${key}`
//     fetch(url)
//     .then(result => result.json())
//     .then(json => {
//         console.log(json)
//     })
//     return (
//         <div className="box">
//             <h1>Weather</h1>
//         </div>
//     )
// }

function Weather (props) {

    
    return (
        <div className="box">
            <p>temperature:</p>
            <h3>{props.weather}</h3>
            
        </div>
    )
}

export default Weather; 