

// //THE FUNCTION BELOW PASSES THE PROPS TO APP.JS
// //IT DISPLAYS THE DATA INTO THE BOX, ON THE COMPONENT FOR THE NASA APP (line 145 <NasaApp />)

// import React from 'react';

// function NasaApp(props){

//     return(
//         <div className="box">
//             <div className="centerH">

//             {/* THIS PRINTS THE ACTUAL IMAGE (grabs from line 138 App.js) */}
//             <img className="nasaPhoto" alt="sat imagery" defer src={props.image} />
//             <p>sky view</p>
//             </div>
//           </div>
//       )

  
// }

// export default NasaApp;



//We should leave the code here as is, and simply call the component in App.js. THe city data should be able to be called with this.state.userCity

import React from 'react';


const key = 'uH5WI33JEtMHHksjosSpzqqocBAHAJioxaTjVmFb'

function NasaApp(props){

      return(
          <div className="box">
            
            <div className="centerH">
   
                <img className="nasaPhoto" id="geoImage" alt="sat imagery" defer src={`https://api.nasa.gov/planetary/earth/imagery?lon=${props.imageLon}&lat=${props.imageLat}&date=2020-02-01&api_key=${key}`} />
                <br></br>
                <p>aerial view</p>
                
            </div>


          </div>
      )
  
}

export default NasaApp;










     