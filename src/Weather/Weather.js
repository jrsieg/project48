import React from 'react';



function Weather (props) {

    
    return (
        <div className="box">
            <p>temperature:</p>
            <h3>{props.weather}</h3>
            
        </div>
    )
}

export default Weather; 