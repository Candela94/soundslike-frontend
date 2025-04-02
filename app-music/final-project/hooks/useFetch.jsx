


import { useEffect,useState } from "react";

export const useFetch =  (userData) => {


    const VITE_URL = import.meta.env.VITE_URL

    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 

    useEffect(()  => {

        const createUsuario = async () => {


            try{

                const response = await fetch(`${VITE_URL}/api/v1/usuarios`, {
                    method:'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })

                if(!response.ok) {
                    const data = await response.json()
                    setDatos(data);

                } else {

                   setError('Algo salió mal')

                }




            } catch(e) {

                console.error('Error al registrarse', e)

            }finally {
                setLoading(false)
            }

            if(userData){
            createUsuario()
            }


        }

    }, [userData])


    return {datos, loading, error}
}