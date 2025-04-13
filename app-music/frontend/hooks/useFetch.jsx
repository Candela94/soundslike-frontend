

import { useContext, useEffect,useState } from "react";
import { Notificaciones } from "../src/components/notificaciones-success-error/Notificaciones.jsx";
import { NotificacionesContext } from "../src/context/NotificacionesContext";





//Obtener listas de un usuario 
export const useFetch = () => {

    const VITE_URL = import.meta.env.VITE_URL
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bibliotecas, setBibliotecas] = useState([])
    const {mostrarNotificacion} = useContext(NotificacionesContext)



    const obtenerBibliotecas = async () => {

        const token = localStorage.getItem('token')


        try {


            const response = await fetch(`${VITE_URL}/api/v1/me/playlists`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${token}`
                }, 
                
            });

            if(!response.ok) {
                throw new Error(`Error:, ${response.status}`)
            }

            const data = await response.json();
            console.log('datos del backend' , data)
            setBibliotecas(data.data || [])



        } catch (e) {
            
            console.error('Error al obtener tus listas', e);
            setError(e.message);
            mostrarNotificacion("error", "Ups, algo salió mal")


        } finally {
            setLoading(false)
            
        }


    }


    useEffect(() => {
        obtenerBibliotecas()
    },[])






    return {
        bibliotecas, loading, error 
    };
}