import React, { useState } from 'react'
import { MapContainer, ImageOverlay, TileLayer, FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import L from 'leaflet'

export default function Map({ picture, setPicture }) {
    var bounds = [[100, 0], [0, 100]];
    const [layerInfo, setLayerInfo] = useState([])

    const _onCreate = (e) => {
        const { layer } = e
        const { _leaflet_id } = layer
        setLayerInfo(prevLayers => [
            ...prevLayers,
            {
                id: _leaflet_id,
                latlngs: layer.getLatLngs()[0]
            }
        ])
    }

    const _onEdite = (e) => {
        console.log(e)
    }

    const _onDeleted = (e) => {
        console.log(e)
    }

    return (
        <>
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
                </FeatureGroup>
                <button className='repick-image' onClick={() => setPicture(false)}>
                    Pick another image
                </button>
            </MapContainer>
            <pre>{JSON.stringify(layerInfo, 0, 2)}</pre>
        </>

    )
}
