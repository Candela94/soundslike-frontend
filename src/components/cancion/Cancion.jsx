import { useState, useEffect, useContext } from "react";

import { CiMenuKebab } from "react-icons/ci";
import './cancion.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useParams } from "react-router";
import { Button } from "../buttons/Button.jsx";
import { useEliminarCancion, useEliminarLista } from '../../../hooks/useEliminar.jsx';
import { IoClose } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";

import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

import { RiDeleteBin3Line } from "react-icons/ri";
import { NavLink } from "react-router";
import { useFavoritos } from "../../../hooks/useFavorites.jsx";
import { useFetchFavoritos } from "../../../hooks/useFavorites.jsx";
import { NotificacionesContext } from "../../context/NotificacionesContext.jsx";
import { useAddSongsToPlaylist } from "../../../hooks/useAddSongs.jsx";
import { useNavigate } from 'react-router'
import { BsChevronCompactDown } from "react-icons/bs";

import { useFetch } from "../../../hooks/useFetch.jsx";
import { usePlayer } from "../../context/PlayerContext.jsx";










export const Cancion = ({ nombre, artista, imagen, audio, _id }) => {


   
    const { addSong } = useAddSongsToPlaylist()
    const { mostrarNotificacion } = useContext(NotificacionesContext)
    const { bibliotecas, loading, error } = useFetch()
    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate()

    const {loadList, togglePlay, currentSong} = usePlayer()


    const handleOpenMenu = () => {
        setOpenMenu(prevState => !prevState);  
    }
    
    const handleCloseMenu = () => {
        setOpenMenu(false); 
    }



    // const handleCancion = () => {


    //     if (audioRef.current) {

    //         audioRef.current.src = audio;
    //         audioRef.current.load();


    //         audioRef.current.oncanplay = () => {

    //             audioRef.current.play().catch(error => console.error("Error al reproducir", error))
    //             setIsPlaying(true)
    //         }
    //     }

    //     setCurrentSong({ nombre, artista, imagen, audio, _id })
    //     console.log('Current song set:', { nombre, artista, imagen, audio, _id });
    // }




    //Función para añadir canciones a una lista 
    const handleAdd = async (playlistId, song) => {


        console.log('Current Song:', song);
        console.log('Playlist ID:', playlistId);

        if (!song || !song._id) {

            mostrarNotificacion("error", "No has seleccionado ninguna canción")
            return;
        }

        if (!playlistId) {
            mostrarNotificacion('error', 'No se ha seleccionado ninguna lista')
            return;
        }


        try {
            console.log('Añadiendo canción a la playlist', { playlistId, songId: song._id })

            await addSong(playlistId, song._id);


            mostrarNotificacion('success', 'Canción añadida con éxito')

         
            setOpenMenu(false)



        } catch (e) {

            console.error("error al añadir la cancion", e)
            mostrarNotificacion("error", "Error al añadir la cancion")
        }


    }





    const handlePlaySong = () => {
        if(!audio) {
            mostrarNotificacion('error', 'No hay audio disponible')
        }
        const selectedSong = {nombre, artista, imagen, audio, _id};
        loadList([selectedSong],0)
        togglePlay()
    }

    return (


        <>
            <div className="Cancion" tabIndex="0">

                <div className="Cancion-imgTexto"  onClick={handlePlaySong}>


                    <img src={imagen} alt="portada" className="Cancion-img" />

                    <div className="Cancion-info">
                        <h4>{nombre}</h4>
                        <p className="Cancion-artista">{artista} </p>
                    </div>

                </div>

                <FaCirclePlus onClick={handleOpenMenu} className="Cancion-icono" />
                {openMenu && (
                    <div className="Menu-add">
                        <BsChevronCompactDown onClick={handleCloseMenu}/>
                        <h3 className="Menu-tituloListas">Añadir a tus listas</h3>
                        <ul className='Menu-addUl'>
                            {bibliotecas.map((b) => (
                                <li className='Menu-addLi' key={b._id} onClick={() => handleAdd(b._id, { nombre, artista, imagen, audio, _id })}>
                                    {b.nombre}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>



        </>



    );
}







export const CancionAgregada = ({ nombre, artista, imagen, audio, _id }) => {


  

    const [confirmacion, setConfirmacion] = useState(false)


    const { eliminarCancion, eliminado } = useEliminarCancion()

    const { pid } = useParams()

    const {loadList, togglePlay} = usePlayer()



    const handlePlaySong = () => {
        if(!audio) {
            mostrarNotificacion('error', 'No hay audio disponible')
        }
        const selectedSong = {nombre, artista, imagen, audio, _id};
        loadList([selectedSong],0)
        togglePlay()
    }



    const handleConfirmar = (e) => {
        e.stopPropagation()
        setConfirmacion(!confirmacion)


    }


    const handleCancelarConfirmacion = (e) => {
        e.stopPropagation();
        setConfirmacion(false)


    }



    const handleEliminar = (e) => {
        e.stopPropagation()
        console.log('eliminando cancion con id:', _id)
        eliminarCancion({ pid, cid: _id })
        setConfirmacion(false)


    }

    if (eliminado) {
        return null;
    }






    return (


        <>

            <div className="Cancion" tabIndex="0" >

                <div className="Cancion-imgTexto" onClick={handlePlaySong}>


                    <img src={imagen} alt="portada" className="Cancion-img" />

                    <div className="Cancion-info">
                        <h4>{nombre}</h4>
                        <p className="Cancion-artista">{artista} </p>
                    </div>

                </div>



                <div onClick={handleConfirmar} className="Boton eliminar">
                    <RiDeleteBin3Line />
                </div>


                {
                    confirmacion && (
                        <div className="Confirmacion-contenido">
                            <IoClose onClick={handleCancelarConfirmacion} className="Confirmacion-close" />
                            <p>¿Seguro que quieres borrar esta canción?</p>


                            <div onClick={handleEliminar} >
                                <p className="Confirmacion-btn">Eliminar cancion</p>
                            </div>

                        </div>
                    )
                }



            </div>



        </>



    );
}




export const CancionLike = ({ nombre, artista, imagen, audio, _id }) => {


   
    const { removeFav, favoritos } = useFavoritos()
    const { getFavoritos } = useFetchFavoritos()
    const { mostrarNotificacion } = useContext(NotificacionesContext)
    const [isLike, setIsLike] = useState(false)

    
    
    
    const {loadList, togglePlay} = usePlayer()
    
    
    const handlePlaySong = () => {
        if(!audio) {
            mostrarNotificacion('error', 'No hay audio disponible')
        }
        const selectedSong = {nombre, artista, imagen, audio, _id};
        loadList([selectedSong],0)
        togglePlay()
    }


    useEffect(() => {
        const isFav = favoritos.some(fav => fav._id === _id)
        setIsLike(isFav)
    }, [favoritos, _id])




    const handleUnLike = async () => {

        if (!currentSong?._id) return;

        try {
            await removeFav(song._id);
            setIsLike(false)
            mostrarNotificacion('success', 'Canción eliminada de favoritos');

            await getFavoritos();

        } catch (error) {
            console.error(error);
            mostrarNotificacion("error", "Error al eliminar la canción de favoritos");
        }

    }




    return (


        <>
            <div className="Cancion" tabIndex="0">

                <div className="Cancion-imgTexto" onClick={handlePlaySong}>


                    <img src={imagen} alt="portada" className="Cancion-img" />

                    <div className="Cancion-info">
                        <h4>{nombre}</h4>
                        <p className="Cancion-artista">{artista} </p>
                    </div>

                </div>

                <GoHeartFill onClick={handleUnLike} className="Cancion-icono" />


            </div>



        </>



    );
}







export const Listas = ({ nombre, pid }) => {
    console.log("PID recibido en Listas:", pid);


    const [openMenu, setOpenMenu] = useState(false)
    const [confirmacion, setConfirmacion] = useState(false)


    const { eliminarLista, eliminado } = useEliminarLista()



    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }


    const handleConfirmar = () => {
        setConfirmacion(!confirmacion)
        setOpenMenu(false)
    }



    const handleCancelarConfirmacion = () => {
        setConfirmacion(false)


    }



    const handleEliminar = () => {
        console.log('eliminando lista con id:', pid)
        eliminarLista({ pid })
        setConfirmacion(false)
        setOpenMenu(false)
    }

    if (eliminado) {
        return null;
    }
    return (


        <>

            <div className="Lista">
                <NavLink className='Lista-nombreLista' to={`/playlists/${pid}/canciones`}> <div className="Imagen-titulo">

                    <h4>{nombre}</h4>
                </div> </NavLink>


                <CiMenuKebab className="Cancion-icono" onClick={handleOpenMenu} />
                {
                    openMenu && !confirmacion && (

                        <div onClick={handleConfirmar} className="MenuOpened-contenido">

                            <p>Eliminar lista</p>

                            <RiDeleteBin6Line />
                        </div>
                    )
                }


                {
                    confirmacion && (
                        <div className="Confirmacion-contenido">
                            <IoClose onClick={handleCancelarConfirmacion} className="Confirmacion-close" />
                            <p>¿Seguro que quieres borrar esta lista?</p>


                            <div onClick={handleEliminar} >
                                <p className="Confirmacion-btn">Eliminar lista</p>
                            </div>

                        </div>
                    )
                }








            </div>
        </>

    )
}

