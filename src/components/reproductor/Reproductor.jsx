import './reproductor.css'
import { FaPlay } from "react-icons/fa";
import { useContext } from 'react';

import { usePlayer } from '@/context/PlayerContext';

import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { NavLink } from 'react-router';



export const Reproductor = () => {





    const { currentSong, isPlaying, togglePlay, handleNext } = usePlayer();





    return (



        <div className="Reproductor">
            {currentSong && (
                <>

                <div className="Info-cancion">
                    <img src={currentSong.imagen} alt={currentSong.nombre} className="Reproductor-img" />
                    <NavLink to='/reproductor' className='Reproductor-info'>
                        <h4>{currentSong.nombre}</h4>
                        <p style={{fontSize:'12px'}}>{currentSong.artista}</p>
                    </NavLink>

                    </div>
                    <button className='Btn-control' onClick={togglePlay}>
                        {isPlaying ? <HiMiniPause className='Controls-icons'/> : <TbPlayerPlayFilled className='Controls-icons'/>}
                    </button>
                        {/* <TbPlayerTrackNextFilled className='Controls-icons'  onClick={handleNext}/> */}
                </>
            )}

            {!currentSong && (
                <NavLink className="Mensaje-reproductor" to='/buscador'>
                    <div>
                        <p>Buscar canciones</p>
                    </div>
                </NavLink>
            )}
        </div>
    );
};
