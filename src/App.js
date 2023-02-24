import { useState } from 'react'
import {  Routes, Route, Link } from "react-router-dom";

import Map from './components/map'
import ImagePicker from './components/imagePicker'
import BrowsLayers from './components/browsLayers'


function App() {
  const [picture, setPicture] = useState("")
  const [layersInfo, setLayersInfo] = useState([])

  return (
    <div>
      {picture ?
        <>
          <nav className='nav'>
            <Link to={"/"}><li className='nav-item'>Map </li></Link>
            <Link to={"/layers"}> <li className='nav-item'>Layers</li></Link>
          </nav>
          <Routes>
            <Route path="/" element={<Map picture={picture} setPicture={setPicture} layersInfo={layersInfo} setLayersInfo={setLayersInfo} />} />
            <Route path="/layers" element={<BrowsLayers layersInfo={layersInfo} />} />
          </Routes>
        </>

        :
        <ImagePicker setPicture={setPicture} />
      }
    </div>
  );
}

export default App;