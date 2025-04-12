

import './formuadmin.css'
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { Button } from '../../components/buttons/Button';
import { useContext, useState } from 'react';
import { Notificaciones } from '../../components/notificaciones-success-error/Notificaciones';
import { NotificacionesContext } from '../../context/NotificacionesContext';


const FormuAdmin = () => {

    const [songData, setSongData] = useState({
        cancion: '',
        artista: '',
        genero: '',
        tag: '',
        imagen: null,
        audio: null
    })
    const VITE_URL = import.meta.env.VITE_URL
    const {mostrarNotificacion} = useContext(NotificacionesContext)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setSongData((prev) => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setSongData((prev) => ({ ...prev, [name]: files[0] }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const token = localStorage.getItem('token');

            const response = await fetch(`${VITE_URL}/api/v1/admin/uploads`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`     //Añadir token
                },
                body: songData
            })

            const result = response.json();
            if (response.ok) {
                mostrarNotificacion("success", `Canción ${result} subida con éxito`)
            } else {
                mostrarNotificacion("error", `No se ha pudido subir la cancion ${result.error}`)
            }



        } catch (e) {

            console.error('Error al subir la cancion: ', e)
            alert("Error")



        }

    }





    return (


        <>

            <div className="Header-main">
                <Header />

                <main className="Main-formu">

                    <h1 className='Formu-titulo'>Sube tus canciones </h1>
                    <form  onSubmit={handleSubmit} className="Formu-admin">
                        <div className="Formu-datos">
                            <input value={songData.cancion} onChange={handleChange} name= 'cancion' className='Formulario-input' type="text" placeholder='Canción' />
                            <input value={songData.artista} onChange={handleChange} name= 'artista' className='Formulario-input' type="text" placeholder='Artista' />
                            <input value={songData.genero} onChange={handleChange} name= 'genero' className='Formulario-input' type="text" placeholder='Género' />
                            <input value={songData.tag} onChange={handleChange} name= 'tag' className='Formulario-input' type="text" placeholder='Tag' />
                        </div>

                        <div className="Formulario-uploads">
                            <label className='Formulario-label' htmlFor="Img-upload"> Selecciona una imagen
                                <input onChange={handleFileChange}  name='imagen'  className='Formulario-input' id='Img-upload' type="file" placeholder='Selecciona una imagen' />
                            </label>

                            <label className='Formulario-label' htmlFor="Audio-upload">Selecciona un audio
                                <input onChange={handleFileChange} name='audio'   className='Formulario-input' id='Audio-upload' type="file" placeholder='Selecciona un audio' />
                            </label>


                        </div>

                        <div className="Formulario-btn">
                            <Button type='submit' variant='solid'>Subir canción</Button>
                        </div>


                    </form>



                </main>

            </div>
            <BottomNavigation />

        </>



    );
}

export default FormuAdmin;