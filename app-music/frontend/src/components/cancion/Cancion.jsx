import { useState, useEffect, useContext } from "react";
import { ReproductorContext } from "../../context/ReproductorContext.jsx";
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


import { useFetch } from "../../../hooks/useFetch.jsx";

export const Cancion = ({ nombre, artista, imagen, audio, _id }) => {


    const { setIsPlaying, handlePlay, audioRef, setCurrentSong, currentSong } = useContext(ReproductorContext)
    const { addSong } = useAddSongsToPlaylist()
    const { mostrarNotificacion } = useContext(NotificacionesContext)
    const { bibliotecas, loading, error } = useFetch()
    const [openMenu, setOpenMenu] = useState(false)




    const handleCancion = () => {


        if (audioRef.current) {

            audioRef.current.src = audio;
            audioRef.current.load();


            audioRef.current.oncanplay = () => {

                audioRef.current.play().catch(error => console.error("Error al reproducir", error))
                setIsPlaying(true)
            }
        }

        setCurrentSong({ nombre, artista, imagen, audio, _id })
        console.log('Current song set:', { nombre, artista, imagen, audio, _id });
    }




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
            console.log('Añadiendo canción a la playlist', { playlistId, songId: currentSong._id })

            await addSong(playlistId, song._id);
            mostrarNotificacion('success', 'Canción añadida con éxito')
            setOpenMenu(false)

        } catch (e) {

            console.error("error al añadir la cancion", e)
            mostrarNotificacion("error", "Error al añadir la cancion")
        }


    }


    return (


        <>
            <div className="Cancion" tabIndex="0">

                <div className="Cancion-imgTexto" onClick={handleCancion}>


                    <img src={imagen} alt="portada" className="Cancion-img" />

                    <div className="Cancion-info">
                        <h4>{nombre}</h4>
                        <p className="Cancion-artista">{artista} </p>
                    </div>

                </div>

                <FaCirclePlus onClick={() => setOpenMenu(!openMenu)} className="Cancion-icono" />
                {openMenu && (
                    <div className="Menu-add">
                        <ul>
                            {bibliotecas.map((b) => (
                               <li key={b._id} onClick={() => handleAdd(b._id, { nombre, artista, imagen, audio, _id })}>
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


    const { setIsPlaying, handlePlay, audioRef, setCurrentSong } = useContext(ReproductorContext)

    const [confirmacion, setConfirmacion] = useState(false)


    const { eliminarCancion, eliminado } = useEliminarCancion()

    const { pid } = useParams()



    const handleConfirmar = () => {
        setConfirmacion(!confirmacion)
    }


    const handleCancelarConfirmacion = () => {
        setConfirmacion(false)


    }



    const handleEliminar = () => {
        console.log('eliminando cancion con id:', _id)
        eliminarCancion({ pid, cid: _id })
        setConfirmacion(false)

    }

    if (eliminado) {
        return null;
    }


    const handleCancion = () => {


        if (audioRef.current) {

            audioRef.current.src = audio;
            audioRef.current.load();


            audioRef.current.oncanplay = () => {

                audioRef.current.play().catch(error => console.error("Error al reproducir", error))
                setIsPlaying(true)
            }
        }

        setCurrentSong({ nombre, artista, imagen, audio, _id })
        console.log('Current song set:', { nombre, artista, imagen, audio, _id });
    }




    return (


        <>
            <div className="Cancion" tabIndex="0" >

                <div className="Cancion-imgTexto" onClick={handleCancion}>


                    <img src={imagen} alt="portada" className="Cancion-img" />

                    <div className="Cancion-info">
                        <h4>{nombre}</h4>
                        <p className="Cancion-artista">{artista} </p>
                    </div>

                </div>

                <RiDeleteBin3Line onClick={(e) => { e.stopPropagation(); handleConfirmar() }} />
                {
                    confirmacion && (
                        <div className="Confirmacion-contenido">
                            <IoClose onClick={handleCancelarConfirmacion} className="Confirmacion-close" />
                            <p>¿Seguro que quieres borrar esta canción?</p>


                            <div onClick={handleEliminar} variant="danger">
                                <p>Eliminar canción</p>
                            </div>

                        </div>
                    )
                }



            </div>



        </>



    );
}




export const CancionLike = ({ nombre, artista, imagen, audio, _id }) => {


    const { setIsPlaying, handlePlay, audioRef, setCurrentSong, currentSong } = useContext(ReproductorContext)
    const { removeFav, favoritos } = useFavoritos()
    const { getFavoritos } = useFetchFavoritos()
    const { mostrarNotificacion } = useContext(NotificacionesContext)
    const [isLike, setIsLike] = useState(false)





    useEffect(() => {
        const isFav = favoritos.some(fav => fav._id === _id)
        setIsLike(isFav)
    }, [favoritos, _id])



    const handleCancion = () => {


        if (audioRef.current) {

            audioRef.current.src = audio;
            audioRef.current.load();


            audioRef.current.oncanplay = () => {

                audioRef.current.play().catch(error => console.error("Error al reproducir", error))
                setIsPlaying(true)
            }
        }

        setCurrentSong({ nombre, artista, imagen, audio, _id })
        console.log('Current song set:', { nombre, artista, imagen, audio, _id });
    }



    //Quitamos canción de favorios

    const handleUnLike = async () => {

        if (!currentSong?._id) return;

        try {
            await removeFav(currentSong._id);
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

                <div className="Cancion-imgTexto" onClick={handleCancion}>


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







export const Listas = ({ nombre, img, pid }) => {
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
                <NavLink to={`/playlists/${pid}/canciones`}> <div className="Imagen-titulo">
                    <img src={img} alt="Imagen-lista" className="Lista-imagen" />
                    <h4>{nombre}</h4>
                </div> </NavLink>


                <CiMenuKebab className="Cancion-icono" onClick={handleOpenMenu} />
                {
                    openMenu && !confirmacion && (

                        <div onClick={handleConfirmar} className="MenuOpened-contenido">

                            <p >Eliminar lista</p>

                            <RiDeleteBin6Line />
                        </div>
                    )
                }


                {
                    confirmacion && (
                        <div className="Confirmacion-contenido">
                            <IoClose onClick={handleCancelarConfirmacion} className="Confirmacion-close" />
                            <p>¿Seguro que quieres borrar esta lista?</p>


                            <div onClick={handleEliminar} variant="danger">
                                <p>Eliminar lista</p>
                            </div>

                        </div>
                    )
                }








            </div>
        </>

    )
}

