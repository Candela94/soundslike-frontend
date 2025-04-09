
import { useContext, useEffect, useState } from "react";
import { Notificaciones } from "../src/components/notificaciones-success-error/Notificaciones.jsx";
import { NotificacionesContext } from "../src/context/NotificacionesContext";



export const useEliminarLista = () => {


    const VITE_URL = import.meta.env.VITE_URL
    const { mostrarNotificacion } = useContext(NotificacionesContext)
    const [eliminado, setEliminado] = useState(false);
    


    const eliminarLista = async ({ id }) => {

        try {

            console.log(`Sending DELETE request to: ${VITE_URL}/api/v1/playlists/${id}`);
            const response = await fetch(`${VITE_URL}/api/v1/playlists/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            console.log(response)

            if (!response.ok) {
                throw new Error('Error al eliminar la lista');
            }


            const data = await response.json()

            if (response.ok) {
                mostrarNotificacion("success", "Lista eliminada correctamente");
                setEliminado(true);


            }
            

        } catch (e) {
            console.error('Error al obtener las bibliotecas', e);
            mostrarNotificacion("error", "Error al eliminar la lista")
            setEliminado(false)
           
        }

        // useEffect(() => {
        //     eliminarLista()
        // },[])

    }

        
        return {eliminarLista, eliminado};
    }