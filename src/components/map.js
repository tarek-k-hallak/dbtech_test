import React, { useRef, useState } from 'react'
import { MapContainer, ImageOverlay, FeatureGroup, Popup, Marker } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import L from 'leaflet'

export default function Map({ picture = "./assets/image.PNG", setPicture }) {
    var bounds = [[100, 0], [0, 100]];
    const [layersInfo, setLayersInfo] = useState([])
    const [showMarker, setShowMarker] = useState(false)
    const emptyLayer = {
        id: '',
        name: '',
        x: '',
        y: '',
    }
    const [currentLayer, setCurrentLayer] = useState(emptyLayer)

    const markerRef = useRef(null);
    const popupRef = useRef(null);

    const _onCreate = (e) => {
        const { layer } = e
        const { _leaflet_id } = layer
        setCurrentLayer({
            id: _leaflet_id,
            x: layer.getLatLngs()[0][0].lat,
            y: layer.getLatLngs()[0][0].lng
        })
        setShowMarker(true)
        // console.log(popupRef.current.openPopup())
    }

    const _onEdite = (e) => {
        console.log(e)
        //TODO Edit a spicfic layer
    }

    const _onDeleted = (e) => {
        console.log(e)
        //TODO Delete a spicfic layer
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const temp = layersInfo
        temp.push(currentLayer)
        setLayersInfo(temp)
        setShowMarker(false)
        setCurrentLayer(emptyLayer)
        console.log("All Layers Data", layersInfo)
    }

    return (
        <MapContainer
            zoom={0}
            crs={L.CRS.Simple}
            bounds={bounds}
        >
            <ImageOverlay
                url={picture}
                bounds={[[100, 0], [0, 125],]}
            />

            <FeatureGroup>
                <EditControl
                    position='topright'
                    onCreated={_onCreate}
                    onEdited={_onEdite}
                    onDeleted={_onDeleted}
                    draw={{
                        rectangle: false,
                        circle: false,
                        circlemarker: false,
                        polyline: false,
                        marker: false
                    }}
                />
                {showMarker &&
                    <Marker ref={markerRef}
                        position={[currentLayer.x, currentLayer.y]}
                    >
                        <Popup ref={popupRef} >
                            <form onSubmit={handleSubmit} className="popup">
                                <label> Aria Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    onChange={
                                        (e) => setCurrentLayer(prev => ({
                                            ...prev,
                                            name: e.target.value
                                        }))} />
                                <button type='submit' >
                                    Add
                                </button>
                            </form>
                        </Popup>
                    </Marker>
                }
            </FeatureGroup>
            {
                layersInfo.map((layer) => (
                    <Marker position={[layer.x, layer.y]}>
                        <Popup >
                            <div className='popup'>
                                <div>Aria Name</div>
                                <div>{layer.name}</div>
                            </div>
                        </Popup>
                    </Marker>
                ))
            }

            <button className='repick-image' onClick={() => setPicture(false)}>
                Pick another image
            </button>
        </MapContainer>
    )
}
