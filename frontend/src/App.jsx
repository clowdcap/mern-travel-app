import React, { useState, useEffect } from "react";
import './App.css'

import Map, { Marker, Popup } from "react-map-gl";
import { Room, Star } from '@material-ui/icons'

import axios from "axios"
// import { format } from 'timeago.js'
// {format(p.createdAt)}
const App = () => {
  const currentUser = 'José Marinho'
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [newPlace, setNewPlace] = useState(null)
  const [viewport, setViewport] = useState({
    width: "80vw",
    height: "80vh",
    latitude: -25.3695,
    longitude: -49.4512,
    zoom: 14,
  })

  useEffect(()=> {
    
    const get_pins = async () => {
      try {
        const res = await axios.get("/pins")
        setPins(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    get_pins()
  }, [])

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id)
  }

  const handleAddClick = (event) => {
    const lngLat = event.lngLat
    const [lat, lng] = lngLat
    setNewPlace({
      lat:lat, lng:lng
    })
  }
  return (
    <>
      <div className="App">
        <>
          <Map 
            initialViewState = {{ ...viewport }}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX} 
            mapStyle="mapbox://styles/bigboss56/cl7aikmeg003714p9zs3ez5bk"
            attributionControl="true"
            onDblClick= { handleAddClick }>

            { pins.map(p=> (
          
              <>
                <Marker 
                  longitude={p.long} 
                  latitude={p.lat} 
                  offsetLeft={-20}
                  offsetTop={-10}
                  anchor="bottom">

                    <Room 
                      style={{ fontSize: "30px", 
                          color: p.username === currentUser ? "slateblue" : "tomato", 
                          cursor:"pointer"}} 
                      onClick = {()=>{handleMarkerClick(p._id)}}
                    />
                    
                </Marker>

                {p._id === currentPlaceId && (
                  <Popup
                    longitude={p.long} 
                    latitude={p.lat} 
                    anchor="top"
                    closeButton={true}
                    closeOnClick={false}
                    onClose = {() => {setCurrentPlaceId(null)}}>
                    <div className="card">
                      <label>Place</label>
                        <h4 className="place">{p.title}</h4>
                      <label>Review</label>
                        <p className="review">{p.rating}</p>
                      <label>Rating</label>
                        <div className="rating">
                          <Star className="star"/>
                          <Star className="star"/>
                          <Star className="star"/>
                          <Star className="star"/>
                          <Star className="star"/>
                        </div>
                      <label>Information</label>
                        <span className="information">{p.desc}</span>
                      <label>Created by:</label>
                        <p className="username">{p.username}</p>
                        <p className="data">{p.createdAt}</p>
                    </div>
                  </Popup>
                )}
              </>
            ))}

            { newPlace && (
              <Popup
                longitude={newPlace.lng} 
                latitude={newPlace.lat} 
                anchor="top"
                closeButton={true}
                closeOnClick={false}
                onClose = {() => setCurrentPlaceId(null)}>
              </Popup> 
            )}

          </Map>
        </>
      </div> 
    </>
  )
}

export default App

