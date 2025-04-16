import { useState, useEffect, useContext } from "react";
import { ReproductorContext } from "../../context/ReproductorContext.jsx";
import { CiMenuKebab } from "react-icons/ci";
import './cancion.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiShareFatBold } from "react-icons/pi";
import { Button } from "../buttons/Button.jsx";
import { useEliminarLista } from '../../../hooks/useEliminar.jsx';
import { IoClose } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { useFetchSongs } from "../../../hooks/usefetchSongs.jsx";


export const Cancion = ({ nombre, artista, imagen,  audio }) => {

    const [openMenu, setOpenMenu] = useState(false)

    const { setIsPlaying, handlePlay, audioRef, setCurrentSong } = useContext(ReproductorContext)
   
  


    const handleCancion = () => {


        if (audioRef.current) {

            audioRef.current.src = audio;
            audioRef.current.load();


            audioRef.current.oncanplay= () => {

                audioRef.current.play().catch(error => console.error("Error al reproducir", error))
                setIsPlaying(true)
            }
        }

        setCurrentSong ({nombre, artista, imagen, audio})
        console.log('Current song set:', { nombre, artista, imagen, audio });
    }





        const handleOpenMenu = (e) => {
            e.stopPropagation(); //evita activar handleCancion
            setOpenMenu(!openMenu)
        }


        return (


            <>
                <div className="Cancion" onClick={handleCancion}>

                    <div className="Cancion-imgTexto">


                        <img src={imagen} alt="portada" className="Cancion-img" />

                        <div className="Cancion-info">
                            <h4>{nombre}</h4>
                            <p className="Cancion-artista">{artista} </p>
                        </div>

                    </div>

                    <FaCirclePlus onClick={(e) => { e.stopPropagation(); handleOpenMenu(e) }} className="Cancion-icono" />

                    {
                        openMenu && (
                            <div className="MenuOpened">
                                <ul className="MenuOpened-ul">
                                    <li className="MenuOpened-li">
                                        <div className="MenuOpened-contenido">
                                            <p>Eliminar</p>
                                            <RiDeleteBin6Line />
                                        </div>
                                    </li>
                                    <li className="MenuOpened-li">
                                        <div className="MenuOpened-contenido">
                                            <p>Compartir</p>
                                            <PiShareFatBold />

                                        </div>
                                    </li>

                                </ul>
                            </div>
                        )
                    }
                </div>



            </>



        );
    }





    export const Listas = ({ nombre, img, id }) => {


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
            console.log('eliminando lista con id:', id)
            eliminarLista({ id })
            setConfirmacion(false)
            setOpenMenu(false)
        }

        if (eliminado) {
            return null;
        }
        return (


            <>

                <div className="Lista">
                    <div className="Imagen-titulo">
                        <img src={img} alt="Imagen-lista" className="Lista-imagen" />
                        <h4>{nombre}</h4>
                    </div>


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


                                <Button onClick={handleEliminar} variant="danger">
                                    Eliminar lista
                                </Button>

                            </div>
                        )
                    }








                </div>
            </>

        )
    }

