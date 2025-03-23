import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import './cancion.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiShareFatBold } from "react-icons/pi";


export const Cancion = ({titulo, artista,img}) => {

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
                        <li className="MenuOpened-li">
                            <div className="MenuOpened-contenido"></div>
                        </li>
                        <li className="MenuOpened-li">
                            <div className="MenuOpened-contenido"></div>
                        </li>
                    </ul>
                </div>
            )
        }
</div>



    </> 
    


);
}




export const Listas = ({nombre,img}) => {


    const [openMenu, setOpenMenu] = useState(false)


    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return ( 


        <>

        <div className="Lista">
<div className="Imagen-titulo">
        <img src={img} alt="imagen-lista" className="Lista-imagen" />
        <h4>{nombre}Nombre</h4>
        </div>

        
<CiMenuKebab className="Cancion-icono"/>

        </div>

        
        </>
     );
}