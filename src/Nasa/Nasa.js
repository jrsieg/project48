

//THE FUNCTION BELOW PASSES THE PROPS TO APP.JS
//IT DISPLAYS THE DATA INTO THE BOX, ON THE COMPONENT FOR THE NASA APP (line 145 <NasaApp />)

import React from 'react';

function NasaApp(props){

    return(
        <div className="box">
            <div className="centerH">

            {/* THIS PRINTS THE ACTUAL IMAGE (grabs from line 138 App.js) */}
            <img className="nasaPhoto" alt="sat imagery" defer src={props.image} />
            <p>sky view</p>
            </div>
          </div>
      )

  
}

export default NasaApp;










     