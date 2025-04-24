

import { useContext, useEffect, useState } from "react";
import { NotificacionesContext } from "../../context/NotificacionesContext.jsx";
import './notificaciones.css'
import { FcOk } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";

export const Notificaciones = ({children}) => {


    const {notificacion} = useContext(NotificacionesContext)
    const [visible, setVisible] = useState(false)



    useEffect(() => {

        if(notificacion.message){

            setVisible(true);
            const animacion = setTimeout(() => setVisible(false), 1800);
            return () => clearTimeout(animacion)
        }


    }, [notificacion])

    if(!children && !notificacion.message) return null;


    let notificacionType = ''
    if(notificacion.type === 'success') {
        notificacionType = 'Notificacion-success'

    } else if (notificacion.type === 'error') {

        notificacionType = 'Notificacion-error'

    } else if (notificacion.type === 'info'){

          notificacionType = 'Notificacion-info'

    }
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