import React from 'react';

const Restaurant = (props) => {

    return (
        <div className="box">
            <h1>{props.name}</h1>
            <h3>Top Chef</h3>
            <h3>Five Stars</h3>
            <button>Visit</button>
        </div>
    )
}

export default Restaurant;

