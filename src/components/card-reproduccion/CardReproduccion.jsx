

import './card-reproduccion.css'

import { useState, useEffect, useContext } from 'react';

import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { BsChevronCompactDown } from "react-icons/bs";

import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useFetch } from '../../../hooks/useFetch';
import { LuCirclePlus } from "react-icons/lu";
import { Notificaciones } from '../notificaciones-success-error/Notificaciones';
import { NotificacionesContext } from '@/context/NotificacionesContext';
import { useAddSongsToPlaylist } from '../../../hooks/useAddSongs';

import { useFetchFavoritos } from '../../../hooks/useFavorites';
import { useFavoritos } from '../../../hooks/useFavorites';
import { useFetchSongsList } from '../../../hooks/usefetchSongs';
import { usePlayer } from '@/context/PlayerContext';




export const CardReproduccion = () => {



  //Obtenemos valores del contexto

 

  const [openMenu, setOpenMenu] = useState(false)

  const { mostrarNotificacion } = useContext(NotificacionesContext)

  const [isLike, setIsLike] = useState(false)

  const { bibliotecas, loading, error } = useFetch()

  const { addSong } = useAddSongsToPlaylist()

  const { favoritos, getFavoritos } = useFetchFavoritos()

  const { addFav, removeFav } = useFavoritos()


 

const {currentSong,loadList, isPlaying, togglePlay, Next, Prev , currentTime, duration} = usePlayer()


//Progreso 
const progress = duration > 0? (currentTime/duration) * 100 : 0;







//Play, Next y prev   !
const handlePlay = () => {
  console.log("Play/Pause pulsado");
  togglePlay()
}


const handleNext = () => {
  console.log("Next pulsado");
  Next()
}


const handlePrev = () => {
  console.log("Prev pulsado");
  Prev()
}


  useEffect(() => {

    getFavoritos();
  }, [currentSong]);




  useEffect(() => {


    if(!currentSong || !currentSong._id || !favoritos) {

      setIsLike(false);
      return;
    }


    const isFav = favoritos.some(fv => fv._id === currentSong._id);
    setIsLike(isFav)
  }, [currentSong, favoritos])


  //Función para añadir canciones a una lista 
  const handleAdd = async (playlistId) => {


    // console.log('Current Song:', currentSong);
    // console.log('Playlist ID:', playlistId);

    if (!currentSong || !currentSong._id) {

      mostrarNotificacion("error", "No has seleccionado ninguna canción")
      return;
    }

    if (!playlistId) {
      mostrarNotificacion('error', 'No se ha seleccionado ninguna lista')
      return;
    }


    try {
      console.log('Añadiendo canción a la playlist', { playlistId, songId: currentSong._id })

      await addSong(playlistId, currentSong._id);
      mostrarNotificacion('success', 'Canción añadida con éxito')
      setOpenMenu(false)

    } catch (e) {

      console.error("error al añadir la cancion", e)
      mostrarNotificacion("error", "Error al añadir la cancion")
    }


  }




  const handleLike = async () => {


    console.log('Current Song:', currentSong);


    if (!currentSong || !currentSong._id) {

      mostrarNotificacion("error", "No has seleccionado ninguna canción")
      return;
    }



  

    try {


      await addFav(currentSong._id);
      mostrarNotificacion('success', 'Canción añadida a favoritos')
      setIsLike(true)

    } catch (e) {

      console.error("error al añadir la cancion", e)
      mostrarNotificacion("error", "Error al añadir la cancion")
    }

  }



  const handleUnLike = async () => {

    if (!currentSong?._id) return;

    try {
      await removeFav(currentSong._id);
      setIsLike(false)
      mostrarNotificacion('success', 'Canción eliminada de favoritos');



    } catch (error) {
      console.error(error);
      mostrarNotificacion("error", "Error al eliminar la canción de favoritos");
    }

  }



  const handleOpenMenu = () => {
    setOpenMenu(prevState => !prevState);
  }


  return (
    <>

      <div className="Reproductor-card">

        <div className="Reproductor-cabecera">

          <div className="Reproductor-infoCancion">
            <h2 className="Reproductor-song">{currentSong?.nombre || 'Selecciona una canción'}</h2>
            <h4 className="Reproductor-artist">{currentSong?.artista || ''}</h4>
          </div>

          <LuCirclePlus className="Reproductor-iconAdd" onClick={handleOpenMenu} />


        </div>
          
        <div className="Card-imagen">
          {
            isLike ? (<GoHeartFill className='Card-icon' onClick={handleUnLike} />) : (<GoHeart className='Card-icon' onClick={handleLike} />)
          }

          {/* imagen */}

          {currentSong?.imagen && (

            <img src={currentSong?.imagen} alt= 'portada' className="Reproductor-imagen" />   

          )}




        </div>



        <div className="Reproductor-container">

          <div className="Reproductor-barra">
          </div>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}
            />
          </div>

          <div className="Reproductor-controllers">

            <button className="Btn-control" onClick={handlePrev}><TbPlayerTrackPrevFilled /></button>

            <button  className='Btn-control' onClick={handlePlay} >{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />}</button>

            <button className="Btn-control" onClick={handleNext}><TbPlayerTrackNextFilled /></button>

          </div>

          

          {/* 
          <div className="duration">
            {Math.floor(progress * duration / 100)} / {Math.floor(duration)}
          </div> */}
        </div>


      </div>

      {
            openMenu && (
              <div className='Menu-add' >


                <BsChevronCompactDown onClick={handleOpenMenu} className="MenuOpened-addIcon" />


                <ul className="Menu-addUl">
                  <h3 className='Menu-titulosListas'>Añadir a mi lista</h3>
                  {
                    bibliotecas.map((biblioteca) => (

                      <li key={biblioteca._id} onClick={() => handleAdd(biblioteca._id)} className='Galeria-li'>{biblioteca.nombre}</li>
                    ))}
                </ul>
              </div>
            )
          }


    </>
  );
}