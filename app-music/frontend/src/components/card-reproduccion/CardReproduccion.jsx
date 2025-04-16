

import './card-reproduccion.css'

import { useState, useRef, useContext } from 'react';
import { ReproductorContext } from '../../context/ReproductorContext';
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { BsChevronCompactDown } from "react-icons/bs";

import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { useFetch } from '../../../hooks/useFetch';
import { LuCirclePlus } from "react-icons/lu";
import { Notificaciones } from '../notificaciones-success-error/Notificaciones';
import { NotificacionesContext } from '../../context/NotificacionesContext';
import { useAddSongsToPlaylist } from '../../../hooks/useAddSongs';






export const CardReproduccion = () => {



  //Obtenemos valores del contexto

  const {setCurrentSong, currentSong, progress} = useContext(ReproductorContext)
  const [openMenu,setOpenMenu] = useState(false)
  const {mostrarNotificacion} = useContext(NotificacionesContext)


  const { bibliotecas, loading, error } = useFetch()
  const {addSong} = useAddSongsToPlaylist()


  //Función para añadir canciones a una lista 
  const handleAdd = async (playlistId) => {


    console.log('Current Song:', currentSong);
    console.log('Playlist ID:', playlistId);

    if (!currentSong || !currentSong._id) {

        mostrarNotificacion("error", "No has seleccionado ninguna canción")
        return;
    }

    if(!playlistId){
        mostrarNotificacion('error', 'No se ha seleccionado ninguna lista')
        return;
    }


    try {
        console.log('Añadiendo canción a la playlist', {playlistId, songId: setCurrentSong._id})

        await addSong(playlistId, currentSong._id);
        mostrarNotificacion('success', 'Canción añadida con éxito')
        setOpenMenu(false)

    } catch (e) {

        console.error("error al añadir la cancion", e)
        mostrarNotificacion("error", "Error al añadir la cancion")
    }


}




  // const handleSafePlay = () => {


  //   if (audioRef?.current) {
  //     handlePlay();
  //   } else {
  //     console.warn(" audioRef aún no está montado.");
  //   }
  // };


    //función para abrir menu de listas
    
    
    
    
    
    const handleOpenMenu = () => {
      setOpenMenu(prevState => !prevState);
  }


  return (
    <>

      <div className="Reproductor-card">

        <div className="Reproductor-cabecera">

          <div className="Reproductor-infoCancion">
            <h2 className="Reproductor-song">{currentSong.nombre}</h2>
            <h4 className="Reproductor-artist">{currentSong.artista}</h4>
          </div>

          <LuCirclePlus className="Reproductor-iconAdd" onClick={handleOpenMenu} />
          {
            openMenu && (
              <div className='Menu-add' >


                <BsChevronCompactDown onClick={handleOpenMenu} className="MenuOpened-addIcon" />


                <ul className="MenuOpened-ul">
                  <h3>Añadir a mi lista</h3>
                  {
                    bibliotecas.map((biblioteca) => (

                      <li onClick={() => handleAdd(biblioteca._id)} className='Galeria-li' key={biblioteca._id}>{biblioteca.nombre}</li>
                    ))}
                </ul>
              </div>
            )
          }


        </div>
        <div className="Card-imagen">
          <GoHeart className='Card-icon' />
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

            {/* <button  className='Btn-control'>{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />}</button> */}

            <button className="Btn-control"><TbPlayerTrackNextFilled /></button>

          </div>

{/* 
          <div className="duration">
            {Math.floor(progress * duration / 100)} / {Math.floor(duration)}
          </div> */}
        </div>


      </div>


    </>
  );
}