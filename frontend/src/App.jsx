import React, { useState } from "react";
import './App.css'

import Map, { Marker, Popup } from "react-map-gl";
import { Room } from '@material-ui/icons'

const App = () => {

  const [showPopup, setShowPopup] = useState(true);

  return (
    
    <div className="App">
      <Map 
        initialViewState = {{
          latitude: -25.3695,
          longitude: -49.4512,
          zoom: 14,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX} 
        mapStyle="mapbox://styles/mapbox/streets-v9">

   
        {showPopup && (
          <Popup longitude={-25.3695} latitude={-49.4512}
            anchor="bottom"
            onClose={() => setShowPopup(false)}> You are here </Popup>)}
      </Map>
    </div>
  )
}

export default App