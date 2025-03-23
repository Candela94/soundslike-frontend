

import './barra.css'

import { useState, useRef } from 'react';
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";




export const BarraReproduccion = () => {


  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0); // Progreso de la barra
  const [duration, setDuration] = useState(0); // Duración total del audio
  const audioRef = useRef(null); // Referencia al elemento de audio



  //Play/pause
  const handleTogglePlay = () => {

    if (isPlaying) {

      audioRef.current.pause();

    } else {

      audioRef.current.play();

    }

    setIsPlaying(!isPlaying)

  }



  //Progreso barra
  const barraProgress = () => {
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  }

 



  // Obtener la duración
  const handleLoaded = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <>

      <div className="Reproductor-container">
        
        <div className="Reproductor-barra">

          <audio src="./img/audio.mp3"
          
              ref={audioRef}
              onTimeUpdate={barraProgress}
              onLoadedMetadata={handleLoaded}>

            </audio>

        </div>

        <div className="progress-bar" onClick={barraProgress}>
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="Reproductor-controllers">

          <button className="Btn-control"><TbPlayerTrackPrevFilled /></button>

          <button onClick={handleTogglePlay} className='Btn-control'>{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />}</button>

          <button className="Btn-control"><TbPlayerTrackNextFilled /></button>

        </div>

      
        <div className="duration">
          {Math.floor(progress * duration / 100)} / {Math.floor(duration)}
        </div>
      </div>



    </>
  );
}