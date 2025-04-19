


import { useState } from "react";

// Hook para obtener todos los favoritos



export const useFetchFavoritos = () => {
    const VITE_URL = import.meta.env.VITE_URL;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [favoritos, setFavs] = useState([]);

    const getFavoritos = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No estás autenticado');
            return;
        }
        setLoading(true);

        try {
            const response = await fetch(`${VITE_URL}/api/v1/me/favoritos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!response.ok) {
                throw new Error('No se pudieron obtener los favoritos');
            }

            const data = await response.json();
            console.log('Fetched favoritos:', data);
            setFavs(data || []);
            return data;
        } catch(e) {
            console.error('Error al obtener favoritos:', e.message);
            setError(e.message);
            throw e;
        } finally {
            setLoading(false);
        }
    };
    
    return {
        favoritos, loading, error, getFavoritos
    };
};

// Hook completo que maneja añadir y eliminar favoritos
export const useFavoritos = () => {
    const VITE_URL = import.meta.env.VITE_URL;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [favoritos, setFavoritos] = useState([]);

    // Obtener todos los favoritos
    const getFavoritos = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No estás autenticado');
            return;
        }
        setLoading(true);

        try {
            const response = await fetch(`${VITE_URL}/api/v1/me/favoritos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!response.ok) {
                throw new Error('No se pudieron obtener los favoritos');
            }

            const data = await response.json();
            setFavoritos(data || []);
            return data;
        } catch(e) {
            console.error('Error al obtener favoritos:', e.message);
            setError(e.message);
            throw e;
        } finally {
            setLoading(false);
        }
    };








    // Añadir a favoritos
    const addFav = async (songId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No estás autenticado');
            return;
        }
        setLoading(true);

        try {
            const response = await fetch(`${VITE_URL}/api/v1/me/favoritos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({songId})
            });

            if (!response.ok) {
                throw new Error('No se pudo añadir la canción a favoritos');
            }

            const data = await response.json();


            // Recargar los favoritos después de añadir

            await getFavoritos();


            return data;

        } catch(e) {
            console.error('Error al añadir a favoritos:', e.message);

            setError(e.message);


            throw e;

        } finally {

            setLoading(false);
        }
    };




    



    // Eliminar de favoritos

    const removeFav = async (songId) => {

        const token = localStorage.getItem('token');

        if (!token) {
            setError('No estás autenticado');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${VITE_URL}/api/v1/me/favoritos`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({songId})
            });

            if (!response.ok) {

                throw new Error('No se pudo eliminar la canción de favoritos');
            }

            const data = await response.json();
           
            await getFavoritos();


            return data;



        } catch(e) {
            console.error('Error al eliminar de favoritos:', e.message);
            setError(e.message);
            throw e;
        } finally {
            setLoading(false);
        }
    };




    
    return {
        favoritos, loading, error, addFav, removeFav, getFavoritos
    };
};