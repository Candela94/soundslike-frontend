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

import { RiDeleteBin3Line } from "react-icons/ri";
import { NavLink } from "react-router";


export const Cancion = ({ nombre, artista, imagen, audio, _id }) => {


    const { setIsPlaying, handlePlay, audioRef, setCurrentSong } = useContext(ReproductorContext)




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
            <div className="Cancion" >

                <div className="Cancion-imgTexto" onClick={handleCancion}>


                    <img src={imagen} alt="portada" className="Cancion-img" />

                    <div className="Cancion-info">
                        <h4>{nombre}</h4>
                        <p className="Cancion-artista">{artista} </p>
                    </div>

                </div>

                <FaCirclePlus onClick={(e) => { e.stopPropagation(); handleCancion }} className="Cancion-icono" />


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
        eliminarCancion({ pid, cid:_id })
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
            <div className="Cancion" >

                <div className="Cancion-imgTexto" onClick={handleCancion}>


                    <img src={imagen} alt="portada" className="Cancion-img" />

                    <div className="Cancion-info">
                        <h4>{nombre}</h4>
                        <p className="Cancion-artista">{artista} </p>
                    </div>

                </div>

                <RiDeleteBin3Line onClick={(e) => { e.stopPropagation(); handleConfirmar() }}  />
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

