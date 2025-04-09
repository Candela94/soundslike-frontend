import { Header } from "../../components/header/Header";
import { BottomNavigationSounds } from "../../components/bottom-navigation-header/BottomNavigation";
import { GoHeart } from "react-icons/go";
import { TbShare3 } from "react-icons/tb";
import { TbMusicPlus } from "react-icons/tb";
import { useState, useContext } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";
import { ReproductorContext } from "../../context/ReproductorContext.jsx";
import { useFetch } from "../../../hooks/useFetch.jsx";

import './soundslike.css'




const Sound = () => {

  //Obtenemos valores del contexto
  const { isPlaying, audioRef, handlePlay, handleProgress, handleDuration } = useContext(ReproductorContext)
  const { bibliotecas } = useFetch()


  const [openMenu, setOpenMenu] = useState(false)
  const [like, setLike] = useState(false)


  const handleToggleLike = () => {
    setLike(!like)
  }


  const handleOpenMenu = () => {
    setOpenMenu(prevState => !prevState);
  }




  return (


    <>
      <div className="Header-main">

        <Header />


        <main className="Main">

          <div className="Ficha-usuario">


            <div className="Nombre-usuario">
              <img src="." alt="usuario" className="Usuario-img" />
              <h4 className="Nombre">Nombre de usuario</h4>
            </div>



            <img src="../img/default.jpg" alt="usuario" className="Publicacion-img" />



            <div className="Imagen-cancion">

              <audio src="./img/audio.mp3"

                ref={audioRef}
                onTimeUpdate={handleProgress}
                onLoadedMetadata={handleDuration}>
              </audio>


              <div className="Info-artista">
                <h3 className="Cancion-post">Canción</h3>
                <p>Artista</p>
              </div>

              <button className="Post-btn" onClick={handlePlay}>{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />}</button>

            </div>


            <div className="Ficha-iconos">


              <div className="Iconos-likeShare">


                {/* Cambio de estado del like */}
                {like ? (
                  <GoHeartFill className="icons-publicaciones" onClick={handleToggleLike} />
                ) : (
                  <GoHeart className="icons-publicaciones" onClick={handleToggleLike} />
                )}


                <TbShare3 className="icons-publicaciones" />

              </div>




              {/* Menú desplegable */}

              <TbMusicPlus onClick={handleOpenMenu} className="icons-publicaciones" />
              {
                openMenu && (
                  <div className='MenuOpened-add' >


                    <BsChevronCompactDown onClick={handleOpenMenu} className="MenuOpened-addIcon" />


                    <ul className="MenuOpened-ul">
                      <h3>Añadir a mi lista</h3>
                      {
                        bibliotecas.map((biblioteca) => (

                          <li className='Galeria-li' key={biblioteca._id}>{biblioteca.nombre}</li>
                        ))}
                    </ul>
                  </div>
                )
              }


            </div>


          </div>


        </main>
      </div>

      <BottomNavigationSounds />

    </>




  );
}

export default Sound;