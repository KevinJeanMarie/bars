import barsJson from "../bars.json"
import { createContext, useState, useEffect, } from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Mapcomponents from "../components/Map"

const MapContext = createContext({})

const MapContextProvider = (props) => {
    const [location, setLocation] = useState(null)
    const [bars, setBars] = useState(barsJson)


const value = {
    location: location,
    setLocation: setLocation,
    bars: bars,
    setBars: setBars,
}

    useEffect(()=> {
        console.log(location)
    //     console.log(user)
    // },[user])

    navigator.geolocation.getCurrentPosition(
        location => {
            console.log(location.coords)
            setLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        },
        error => {
            console.log(error)
        }
    )
}, []);

return ( 
<MapContext.Provider value={value}>
{props.children}
</MapContext.Provider>
)

}

export {
    MapContext,
    MapContextProvider
}