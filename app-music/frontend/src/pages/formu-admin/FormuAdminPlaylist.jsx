import { Header } from "../../components/header/Header";
import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation";
import { Button } from "../../components/buttons/Button";
import { useContext, useState } from "react";
import { NotificacionesContext } from "../../context/NotificacionesContext";
import { Notificaciones } from "../../components/notificaciones-success-error/Notificaciones";
import { NavLink } from "react-router";





const FormuPlayLists = () => {


    const VITE_URL = import.meta.env.VITE_URL
    const {mostrarNotificacion} = useContext(NotificacionesContext)
    const [playListData, setPlayListData] = useState({
        nombre:'',
        genero:'',
        coverImage:''
    })



    const handleSubmit = async (e) => {


        e.preventDefault();


        const formData = new FormData();
        formData.append('nombre', playListData.nombre)
        formData.append('genero', playListData.genero)
        formData.append('coverImage', playListData.coverImage)


 
        try {

            const token = localStorage.getItem('token')

            const response = await fetch(`${VITE_URL}/api/v1/admin/uploads/playlists`, {
                method:'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            })



            const data = await response.json()
            if(response.ok) {

                mostrarNotificacion('success', `Playlist ${data.data.nombre} subida con éxito`)
                setPlayListData({
                    nombre:'',
                    genero:'',
                    coverImage:null
                })
                
            } else {
                mostrarNotificacion('error', `no se pudo crear la playlist ${data.error}`)
            }


        } catch (e) {
            console.error('Error al subir la cancion: ', e)
            alert("Error")

        }



    }



    const handleChange = (e) => {
        const {name, value} = e.target;
        setPlayListData((prev) => ({...prev, [name]:value}))
    }



    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setPlayListData((prev) => ({ ...prev, [name]: files[0] }))
    }

    return ( 
        <>


                <main className="Main-formu">

                    <h1 className='Formu-titulo'>Sube tus playslists </h1>
                    <form  onSubmit={handleSubmit} className="Formu-admin">
                        <div className="Formu-datos">

                            <input value={playListData.nombre} onChange={handleChange} name= 'nombre' className='Formulario-input' type="text" placeholder='Nombre de la playlist' />
                            <input value={playListData.genero} onChange={handleChange}name= 'genero' className='Formulario-input' type="text" placeholder='Género' />
                            
                        </div>

                        <div className="Formulario-uploads">
                            <label className='Formulario-label' htmlFor="Img-upload"> Selecciona una imagen
                                <input onChange={handleFileChange} name='coverImage'  className='Formulario-input' id='Img-upload' type="file" placeholder='Selecciona una imagen' />
                            </label>

                            


                        </div>

                        <div className="Formulario-btn">
                            <NavLink to='/admin'>Volver a canciones</NavLink>
                            <Button type='submit' variant='solid'>Subir playlist</Button>
                          
                        </div>


                    </form>



                </main>

           
        
        </>
     );
}
 
export default FormuPlayLists
