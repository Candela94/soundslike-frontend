

import { useState } from "react";

export const useUpdate = () => {


    const VITE_URL = import.meta.env.VITE_URL
    const [usuario, setUsuario] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const updateUsuario = async (id, userData) => {



        const token = localStorage.getItem('token')

        if (!token) {
            setError('Token requerido');
            return;
        }

        setLoading(true);


        try {

            const response = await fetch(`${VITE_URL}/api/v1/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(userData)

            })


            if (!response.ok) {
                throw new Error(`Error:, ${response.status}`)
            }

            const data = await response.json();
            console.log('response data', data)

            setUsuario(data.data);


        } catch (e) {
            setError(e.message || 'Error al actualizar los datos');
            setLoading(false);

        } finally {
            setLoading(false)
        }



    }

    return (





        usuario,
        loading,
        error,
        updateUsuario

    );






}