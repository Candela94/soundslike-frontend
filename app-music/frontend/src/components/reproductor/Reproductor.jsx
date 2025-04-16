import './reproductor.css' 
import { FaPlay } from "react-icons/fa";
import { useContext } from 'react';
import { ReproductorContext } from '../../context/ReproductorContext';
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";



export const Reproductor = () => {

    const {isPlaying, handlePlay, currentSong} =useContext(ReproductorContext)


    return ( 
        <>

        <div className="Reproductor">
            {currentSong ? (


            <div className="Reproductor-info">
                
                
                <h3>{currentSong.nombre}</h3>
                <p>{currentSong.artista}</p>
            </div>
            ): <p>Empieza a escuchar ahora</p>}

           
        
            <button onClick={handlePlay} className='Btn-control'>{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />}</button>
                

          

        </div>
        </>



     );
}