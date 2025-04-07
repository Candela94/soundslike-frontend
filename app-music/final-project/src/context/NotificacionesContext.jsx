
import { createContext, useContext, useState } from "react";
import { Notificaciones } from "../components/notificaciones-success-error/Notificaciones";

//1. Creamos el contexto. Este contexto se utilizará para lanzar mensajes success o error con estilos 

export const NotificacionesContext = createContext()


//2. Componente que envuelve el contexto 

export const NotificacionesContextProvider = ({ children }) => {


    const [notificacion, setNotificacion] = useState({
        type: "", //aquí se mostrará si el mensaje es success o error 
        message:"" //aquí el mensaje en función del tipo que sea 
    })


    const mostrarNotificacion = (type, message) => {
        setNotificacion({type,message})
        

        setTimeout(() => setNotificacion({type:null, message: ''}), 1500)
    }


    return(
        <NotificacionesContext.Provider value ={{notificacion, mostrarNotificacion}}>{children}</NotificacionesContext.Provider>
    )



}