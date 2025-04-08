import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import './cancion.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiShareFatBold } from "react-icons/pi";
import { Button } from "../buttons/Button.jsx";



export const Cancion = ({ titulo, artista, img }) => {

    const [openMenu, setOpenMenu] = useState(false)


    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }


    return (


        <>
            <div className="Cancion">

                <div className="Cancion-imgTexto">

                    <img src={img} alt="portada" className="Cancion-img" />

                    <div className="Cancion-info">
                        <h4>{titulo}Titulo canción</h4>
                        <p>{artista} Artista</p>
                    </div>

                </div>

                <CiMenuKebab onClick={handleOpenMenu} className="Cancion-icono" />

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




export const Listas = ({ nombre, img }) => {


    const [openMenu, setOpenMenu] = useState(false)
    const [cardConfirmar, setCardConfirmar] = useState(false)
    const [confirmacion, setConfirmacion] = useState(false)


    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }


    const handleConfirmar = () => {
        setConfirmacion(!confirmacion)
        setOpenMenu(false)
    }



    const handleCancelarConfirmacion = () => {
        setConfirmacion(false)
        setCardConfirmar(false)
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
                            <p>¿Seguro que quieres borrar esta lista?</p>
                            <div className="Confirmacion-botones">
                                <Button onClick={handleCancelarConfirmacion} variant="secondary">
                                    No estoy seguro
                                </Button>
                                <Button variant="danger">
                                    Eliminar lista
                                </Button>
                            </div>
                        </div>
                    )
                }


             

                



            </div>
        </>

    )}

