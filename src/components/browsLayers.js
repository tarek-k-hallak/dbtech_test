import React from 'react'

export default function BrowsLayers({ layersInfo }) {
    return (
        <main>
            {layersInfo === "" ?
                <div>Ther is No data right now,</div>
                :
                <div className='contaienr'>
                    {layersInfo.map(layer => (
                        <div className='card'>
                            <div>Id: {layer.id}</div>
                            <div>Name: {layer.name}</div>
                            <div>X: {layer.x}</div>
                            <div>Y: {layer.y}</div>
                        </div>
                    ))
                    }
                </div>
            }
        </main>
    )
}
