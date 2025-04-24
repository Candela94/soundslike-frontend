

import './formuadmin.css'
import { useEffect } from 'react';
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { Button } from '../../components/buttons/Button';
import { useContext, useState } from 'react';
import { Notificaciones } from '../../components/notificaciones-success-error/Notificaciones';
import { NotificacionesContext } from '../../context/NotificacionesContext';
import { UserContext } from '../../context/UserContext';
import { NavLink, useNavigate } from 'react-router';


const Admin = () => {

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
    const navigate = useNavigate()

    const {userData} = useContext(UserContext)


    useEffect(() => {
        if (!userData) {
            navigate('/login');
        } else if (userData.role !== 'admin') {
            navigate('/acceso-denegado');
        }
    }, [userData, navigate]);







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

            const formData = new FormData();
            formData.append('nombre', songData.cancion);
            formData.append('artista', songData.artista);
            formData.append('genero', songData.genero);
            formData.append('tag', songData.tag);
            formData.append('imgprod', songData.imagen);
            formData.append('audio', songData.audio);
            const token = localStorage.getItem('token');

            const response = await fetch(`${VITE_URL}/api/v1/admin/uploads`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`    
                },
                body: formData
            })

            const result = await response.json();
            if (response.ok) {
                mostrarNotificacion("success", `Canción ${result} subida con éxito`)
                setSongData({
                    cancion:'',
                    artista:'',
                    genero:'',
                    tag:'',
                    imagen:null,
                    audio:null
                })
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
                            <NavLink to='/playlists'>Publicar una playlist</NavLink>
                            <Button type='submit' variant='solid'>Subir canción</Button>
                        </div>


                    </form>



                </main>

        

        </>



    );
}

export default Admin;