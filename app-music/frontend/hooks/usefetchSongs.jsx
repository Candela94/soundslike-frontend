import { useEffect, useState } from "react";
import { NotificacionesContext } from "../src/context/NotificacionesContext";


//Obtener todas las caciones 
export const useFetchSongs = () => {


    const VITE_URL = import.meta.env.VITE_URL
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);
    const [canciones, setCanciones] = useState([])



    const obtenerCanciones = async () => {

        const token = localStorage.getItem('token')


        try {

            const response = await fetch(`${VITE_URL}/api/v1/canciones`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },

            })


            if (!response.ok) {
                throw new Error(`Error:, ${response.status}`)
            }

            const data = await response.json();
            console.log('response data', data)

            setCanciones(data.data);


        } catch (e) {
            setError(e.message || 'Error al obtener canciones');
            setLoading(false);

        } finally {
            setLoading(false)
        }


    }


    useEffect(() => {
        obtenerCanciones()
    }, [])


    return {

        canciones, loading, error
    };



}







//Obtener canciones de una lista 
export const useFetchSongsList = (pid) => {

    const VITE_URL = import.meta.env.VITE_URL
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [canciones, setCanciones] = useState([])
    const [nombrePlaylist, setNombrePlaylist] = useState("")
    const [coverImage, setCoverImage] = useState("")

    useEffect(() => {
        // Verifica que pid no sea null o vacío
        if (!pid) {
            setError('El ID de la playlist es inválido.');
            setLoading(false);
            return;
        }
        console.log('PID recibido:', pid);

            const songsList = async () => {


                const token = localStorage.getItem('token')


                try {




                    const response = await fetch(`${VITE_URL}/api/v1/playlists/${pid}/canciones`, {
                        
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },

                    })

                    console.log(`URL de la petición: ${VITE_URL}/api/v1/playlists/${pid}/canciones`);

                    if (!response.ok) {
                        throw new Error(`Error:, ${response.status}`)
                    }

                    const data = await response.json();
                    console.log('response data', data)

                    setCanciones(data.canciones);
                    setNombrePlaylist(data.nombre)
                    setCoverImage(data.coverImage)


                } catch (e) {
                    setError(e.message || 'Error al obtener canciones');
                    setLoading(false);

                } finally {
                    setLoading(false)
                }







            }

            songsList()


        }, [pid, VITE_URL]);








    return { canciones, loading, error, nombrePlaylist, coverImage };
}







