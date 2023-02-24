import { useState } from 'react'
import Map from './components/map'
import ImagePicker from './components/imagePicker'
function App() {
  const [picture, setPicture] = useState(true)

  return (
    <div>
      {picture ?
        <Map picture={picture} setPicture={setPicture} />
        :
        <ImagePicker setPicture={setPicture} />
      }
    </div>
  );
}

export default App;
