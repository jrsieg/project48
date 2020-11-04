import React, { useState } from 'react';


function Weather (props) {

    const [isCels, setCels] = useState(true);
    const [temp, setTemp] = useState();

    const changeTemp = () => {
        if (!isCels) {
          //if isCells is "false"
          //(fahrenheit)
          setTemp(props.weather-273)
          //setTemp(((((parseInt(props.weather) -273) - 32) * 5) / 9).toFixed(2));
        //   console.log(isCels);
          console.log(props.weather-273);
          setCels(true);
        } else {
          //if isCells is "true"
          //(Celcius)
          setTemp(props.weather-273)
          //setTemp(((parseInt(props.weather) -273) * (9 / 5) + 32).toFixed(2));
          setCels(false);
          console.log(props.weather-273);
        //   console.log(isCels);
        }
      };

    
    return (
        <div className="box">
            <div className="icon"><ion-icon name="thermometer-outline"></ion-icon></div>
            <p>Current temperature:</p>
<<<<<<< HEAD:src/Weather/Weather.js
            <h3>{temp} C </h3>
            <button onClick={changeTemp}> switch </button>
            
=======
            <h3>{(props.weather - 273.15).toFixed(0)} C</h3>         
>>>>>>> origin:src/components/apps/Weather/Weather.js
        </div>
    )
}

export default Weather; 