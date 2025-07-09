import './listas.css'
import { Header } from "@/components/header/Header";
import { BottomNavigation } from "@/components/bottom-navigation-header/BottomNavigation";

import { NavLink, useParams } from "react-router";

import { useEffect, useState } from "react";
import { CancionAgregada } from '@/components/cancion/Cancion';
import { Button } from '@/components/buttons/Button';




//Listas creadas por usuario

const Listas = () => {


    const VITE_URL = import.meta.env.VITE_URL

    const [bibliotecaId, setBibliotecaId] = useState([])
    const [nombre, setNombre] = useState('')

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { pid } = useParams()




    const ObtenerBibliotecaId = async () => {

        const token = localStorage.getItem('token')

        try {

            const response = await fetch(`${VITE_URL}/api/v1/playlists/${pid}/canciones`, {
                method: 'GET',
                headers: {

                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`

                }
            });

            if (!response.ok) {
                throw new Error(`Error`, response.status)
            }

            const data = await response.json()
            setNombre(data.nombre)
            setBibliotecaId(data.canciones)


        } catch (e) {

            console.error('No se pudo obtener la biblioteca')
            setError(e.message);


        } finally {
            setLoading(false);
        }




    }


    useEffect(() => {
        if (pid) {
            ObtenerBibliotecaId()
            setNombre()

        } else {
            setError('ID no valido');
            setLoading(false)

        }
    }, [pid])





    return (
        <>


            <div className="Header-main">

                <Header />




                <main className="Main-bibliotecas">



                    <div className="Galeria-listas">
                        <h1 className="Nombre-lista">{nombre}</h1>


                        {
                            loading ? (
                                <p>Cargando canciones...</p>

                            ) : error ? (


                                <p>Error al cargar canciones</p>

                            ) : bibliotecaId.length > 0 ? (

                                <ul className="Galeria-ul">

                                    {
                                        bibliotecaId.map((cancion, index) => (
                                            <li key={cancion._id} className="Galeria-li"><CancionAgregada _id={cancion._id}
                                                nombre={cancion.nombre}
                                                artista={cancion.artista}
                                                imagen={cancion.imagen}
                                                audio={cancion.audio}
                                                allSongs={bibliotecaId}
                                                index={index} /></li>
                                        ))
                                    }





                                </ul>
                            ) : <div className='Mensaje'><p>No hay canciones disponibles</p>

                                <div className="Button">
                                    <NavLink to='/buscador'><Button variant='solid'>Buscar canciones</Button></NavLink></div>
                            </div>
                        }



                    </div>
                </main>

                
                <BottomNavigation />
            </div>
        </>
    );
}

export default Listas;