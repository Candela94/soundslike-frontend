import {  useEffect, useState } from "react";
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
                    'Authorization' : `Bearer ${token}`
                }, 
                
            })


            if(!response.ok) {
                throw new Error(`Error:, ${response.status}`)
            }

            const data = await response.json();
            console.log('response data' , data)
          
            setCanciones(data.data);
           

        } catch(e) {
            setError(e.message || 'Error al obtener canciones');
            setLoading(false);
            
        } finally {
            setLoading(false)
        }


    }


    useEffect(() => {
        obtenerCanciones()
    },[])


    return {
        
        canciones, loading, error 
    };



}








