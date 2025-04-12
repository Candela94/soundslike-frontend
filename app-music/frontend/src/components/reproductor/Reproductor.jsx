import './reproductor.css' 
import { FaPlay } from "react-icons/fa";
import { useContext } from 'react';
import { ReproductorContext } from '../../context/ReproductorContext';
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";



export const Reproductor = () => {

    const {isPlaying, audioRef, handlePlay} =useContext(ReproductorContext)


    return ( 
        <>

        <div className="Reproductor">
            <div className="Reproductor-info">
                 <audio src="./img/audio.mp3"
                 ref={audioRef}>
                 </audio>
                
                <h3>Canción</h3>
                <p>Artista</p>
            </div>

           
        
            <button onClick={handlePlay} className='Btn-control'>{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />}</button>
                

          

        </div>
        </>



     );
}