import './reproductor.css'
import { FaPlay } from "react-icons/fa";
import { useContext } from 'react';

import { usePlayer } from '../../context/PlayerContext';

import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";
import { NavLink } from 'react-router';



export const Reproductor = () => {

    const {currentSong, isPlaying, togglePlay} = usePlayer()

  


    return (
        <>

            <div className="Reproductor">
                {currentSong ? (


                    <NavLink to='/reproductor' className='Reproductor-info'>  


                        <h3>{currentSong.nombre}</h3>
                        <p>{currentSong.artista}</p>
                    </NavLink>
                ) :
                
                <NavLink className="Mensaje-reproductor" to='/buscador'><div >
                <p>Empieza a escuchar ahora</p></div></NavLink>
                
                }



                <button  className='Btn-control' onClick={togglePlay}>{isPlaying ?  <HiMiniPause/> : <TbPlayerPlayFilled/>}</button>




            </div>
        </>



    );
}