
import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRamdonFromArr from './utils/getRandomFromArr'
import Phrase from './components/Phrase'
import Buttom from './components/Buttom'
import arrPhotos from './utils/photos.json'

function App() {


  const inicialPhrase = getRamdonFromArr(phrases)
  const inicialRandom = getRamdonFromArr(arrPhotos)

  const [quateRandom, setquateRandom] = useState(inicialPhrase)
  const [photoRandom, setPhotoRandom] = useState(inicialRandom)
  const objStyle = {
    backgroundImage: `url(../fondo${photoRandom}.jpg)`
  }

  return (
    <div className='div' style={objStyle}>
      <h1 className='div__h1' >Galleta de la fortuna</h1>
      <div className='div__div'>
      <Phrase quateRandom={quateRandom}/>
      <Buttom 
      setquateRandom={setquateRandom}
      setPhotoRandom={setPhotoRandom}
      />
      </div>
    </div>
  )
}

export default App
