import { useContext, useEffect, useState } from "react";





export const useAddSongsToPlaylist =  () => {

    const VITE_URL = import.meta.env.VITE_URL;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cancionesAgregadas, setCancionesAgregadas] = useState([])


    const addSong = async (playlistId, songId) => {
       
        const token = localStorage.getItem('token')

        try {

            const response = await fetch(`${VITE_URL}/api/v1/playlists/${playlistId}/canciones/${songId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!response.ok) {
                throw new Error('No se pudo añadir la canción')
              
            }

            const data = await response.json()
            setCancionesAgregadas((prevCanciones) => [...prevCanciones, data.data])
            return data;


        } catch (e) {
            console.error('Error al añadir canción', e)
            setError(e);
            throw e;
           

        } finally {
            setLoading(false)
        }

    }




    return {
        cancionesAgregadas,loading,error, addSong
    }

}