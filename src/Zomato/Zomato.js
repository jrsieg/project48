import React from 'react';


function ShowZomato(props){

    
    return (
        <div className="box">
            <div className="icon"><ion-icon name="restaurant-outline"></ion-icon></div>
            <p>{props.name}</p>
            <div className={!props.error ? 'rating' : "hide"}>
                <p> <ion-icon name="star-outline"></ion-icon> {props.rating} </p>
                <p> <ion-icon name="chatbubbles-outline"></ion-icon> {props.votes} </p>
            </div>
            
            {/* <button className={!props.error ? '' : "hide"} >Visit</button> */}
            
        </div>
    ) 
    
}

export default ShowZomato;
