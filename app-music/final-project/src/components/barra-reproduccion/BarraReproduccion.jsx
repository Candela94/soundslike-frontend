

import './barra.css'

import { useState, useRef, useContext } from 'react';
import { ReproductorContext } from '../../context/ReproductorContext.jsx';
import { TbPlayerTrackPrevFilled } from "react-icons/tb";


import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";




export const BarraReproduccion = () => {



  //Obtenemos valores del contexto
  const {isPlaying,progress,audioRef, duration, handlePlay, handleProgress, handleDuration} = useContext(ReproductorContext)



  return (
    <>

      <div className="Reproductor-container">
        
        <div className="Reproductor-barra">

          <audio src="./img/audio.mp3"
          
              ref={audioRef}
              onTimeUpdate={handleProgress}
              onLoadedMetadata={handleDuration}>

            </audio>

        </div>

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="Reproductor-controllers">

          <button className="Btn-control"><TbPlayerTrackPrevFilled /></button>

          <button onClick={handlePlay} className='Btn-control'>{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />}</button>

          <button className="Btn-control"><TbPlayerTrackNextFilled /></button>

        </div>

      
        <div className="duration">
          {Math.floor(progress * duration / 100)} / {Math.floor(duration)}
        </div>
      </div>



    </>
  );
}