import './reproductor.css'
import { FaPlay } from "react-icons/fa";
import { useContext } from 'react';
import { ReproductorContext } from '../../context/ReproductorContext';
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";
import { NavLink } from 'react-router';



export const Reproductor = () => {

    const { isPlaying, handlePlay, currentSong } = useContext(ReproductorContext)


    return (
        <>

            <div className="Reproductor">
                {currentSong ? (


                    <NavLink to='/reproductor' className='Reproductor-info'>  


                        <h3>{currentSong.nombre}</h3>
                        <p>{currentSong.artista}</p>
                    </NavLink>
                ) : <p>Empieza a escuchar ahora</p>}



                <button onClick={handlePlay} className='Btn-control'>{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />}</button>




            </div>
        </>



    );
}