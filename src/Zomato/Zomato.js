import React from 'react';


function ShowZomato(props){

    
    return (
        <div className="box">
            <h3>{props.name}</h3>
            <h3> {props.rating}</h3>
            <p>{props.votes}</p>
            <p>{props.error}</p> 
            
            <button className={!props.error ? '' : "hide"} >Visit</button>
            
        </div>
    ) 
    
    
}

export default ShowZomato;
