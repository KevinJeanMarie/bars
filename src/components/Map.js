import { createContext, useState, useEffect, useContext, MapContext } from "react"
import GoogleMapReact from 'google-map-react'
import Mapcontext from '../contexts/Map'
import Marker from './Marker'

// const MapContainer = styled.div`
// height/ 100vh;
// width: 100%;
// `

const Map = () => {
    const { location } = useContext(MapContext);



if (location === null){
    return <p> Patientez...</p>

}

console.log(location)

return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: ""}}
        defaultCenter={location}
        defaultZoom={14}
        >

        <Marker
        lat = {location.lat}
        lng = {location.lng}
        ></Marker>

        </GoogleMapReact>
        </div>
)
}

export default Map 