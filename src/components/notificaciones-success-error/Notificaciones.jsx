

import { useContext, useEffect, useState } from "react";
import { NotificacionesContext } from "../../context/NotificacionesContext.jsx";
import './notificaciones.css'
import { FcOk } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import { TbMoodSmileDizzy } from "react-icons/tb";



export const Notificaciones = ({children}) => {


    const {notificacion} = useContext(NotificacionesContext)
    const [visible, setVisible] = useState(false)



    useEffect(() => {

        if(notificacion.message){

            setVisible(true);
            const animacion = setTimeout(() => setVisible(false), 2500);
            return () => clearTimeout(animacion)
        }


    }, [notificacion])

    if(!children && !notificacion.message) return null;
    let notificacionType = '';
    let notificacionIcono = null;

    if (notificacion.type === 'success') {
        notificacionType = 'Notificacion-success';
        notificacionIcono = <FcOk />;
    } else if (notificacion.type === 'error') {
        notificacionType = 'Notificacion-error';
        notificacionIcono = <MdOutlineCancel style={{color:'DD5555'}}/>;
    } else if (notificacion.type === 'info') {
        notificacionType = 'Notificacion-info';
        notificacionIcono = <TbMoodSmileDizzy />; 
    }


    return ( 

        <>

        <span className={`Notificacion ${notificacionType}`}>
            {children || notificacion.message}
            {notificacionIcono}

        </span>
        
        </>
     );
}