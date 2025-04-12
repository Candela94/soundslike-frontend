

import { useContext } from "react";
import { NotificacionesContext } from "../../context/NotificacionesContext.jsx";
import './notificaciones.css'
import { FcOk } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";

export const Notificaciones = ({children}) => {


    const {notificacion} = useContext(NotificacionesContext)

    if(!children && !notificacion.message) return null;

    const notificacionType = notificacion.type === 'success' ? 'Notificacion-success' : 'Notificacion-error';
    const notificacionIcono = notificacion.type === 'success' ? (<FcOk />) : (<MdOutlineCancel />)


    return ( 

        <>

        <span className={`Notificacion ${notificacionType}`}>
            {children || notificacion.message}
            {notificacionIcono}

        </span>
        
        </>
     );
}