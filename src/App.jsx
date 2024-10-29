import { useState, useRef } from "react";
import phrases from "./phrases.json";
import { lj1, lj2, lj3, lj4, lj5 } from "./assets/img";
import './App.css'
import icon from "./assets/img/fortune-cookie-luck-svgrepo-com.svg"

const images = [lj1, lj2, lj3, lj4, lj5];

function random(array) {
  return Math.floor(Math.random() * array);
}

function App() {
  const [phrase, setPhrase] = useState(phrases[random(phrases.length)]);
  const [image, setImage] = useState(images[random(images.length)]);
  

  {/*Manteniendo el audio constante una vez oprimido el boton*/}
  const audioRef = useRef(null);

  {/*Variando la imagen y la nota*/}
  const change = () => {
    setPhrase(phrases[random(phrases.length)]);
    setImage(images[random(images.length)]);
    if (audioRef.current) {
      audioRef.current.play(); 
    }
  };

  return (
    <div className="main" style={{ backgroundImage: `url('${image}')` }}>

      {/*Header*/}
      <div className="container">
        <h1 className="heading">Galletas de la fortuna</h1>

      
        {/*Quotes and authors*/}
        <div className="quote__author">
          <div className="quote__section">
            <img className="left-icon" src={icon} alt="Left Icon"/>
            <q className="quote">{phrase.phrase}</q> 
            <img className="right-icon" src={icon} alt="Right Icon"/>
          </div><br/>
          <cite className="author"><b>~ {phrase.author}</b></cite>
        </div>

        {/*Button*/}
        <button onClick={change} className="btn">Ver otro</button>

        {/*Audio*/}
        <audio ref={audioRef}>
          <source src="/japanese-relaxing-koto-140474.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default App;

