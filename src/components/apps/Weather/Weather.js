import React from 'react';


function Weather (props) {

    
    return (
        <div className="box">
            <div className="icon"><ion-icon name="thermometer-outline"></ion-icon></div>
            <p>Current temperature:</p>
            <h3>{(props.weather - 273.15).toFixed(0)} C</h3>         
        </div>
    )
}

export default Weather; 