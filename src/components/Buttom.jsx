import getRamdonFromArr from "../utils/getRandomFromArr"
import phrases from '../utils/phrases.json'
import arrPhotos from '../utils/photos.json'


const Buttom = ({setquateRandom, setPhotoRandom}) => {
        const handleChangePhrase = () => {
            setquateRandom(getRamdonFromArr(phrases))
            setPhotoRandom(getRamdonFromArr(arrPhotos))
    }
  return (
    <button className="div__button" onClick={handleChangePhrase}>SUERTE</button>
  )
}

export default Buttom