

import './barra.css'

import { useState, useRef, useContext } from 'react';
import { ReproductorContext } from '../../context/ReproductorContext';
import { TbPlayerTrackPrevFilled } from "react-icons/tb";


import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";






export const CardReproduccion = () => {



  //Obtenemos valores del contexto

  const { isPlaying, handlePlay, progress, duration, currentSong, audioRef } = useContext(ReproductorContext)


  const handleSafePlay = () => {
    if (audioRef?.current) {
      handlePlay();
    } else {
      console.warn(" audioRef aún no está montado.");
    }
  };


  return (
    <>

      <div className="Reproductor-card">
        <div className="Card-imagen">
        <GoHeart className='Card-icon'/>
          <img src={currentSong.imagen} alt="imagen" className="Reproductor-imagen" />
        </div>



        <div className="Reproductor-container">

          <div className="Reproductor-barra">
          </div>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}
            />
          </div>

          <div className="Reproductor-controllers">

            <button className="Btn-control"><TbPlayerTrackPrevFilled /></button>

            <button onClick={handleSafePlay} className='Btn-control'>{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />}</button>

            <button className="Btn-control"><TbPlayerTrackNextFilled /></button>

          </div>


          <div className="duration">
            {Math.floor(progress * duration / 100)} / {Math.floor(duration)}
          </div>
        </div>


      </div>


    </>
  );
}