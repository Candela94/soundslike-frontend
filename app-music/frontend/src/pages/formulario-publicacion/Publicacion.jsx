

import './publicacion.css'
import { Header } from "../../components/header/Header.jsx";
import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation.jsx";
import { Button } from "../../components/buttons/Button.jsx";

const Publicacion = () => {
    return ( 
        <>

        <Header />

        <main className="Main-publicaciones">
            <h1 className='Formu-titulo'>Publica tu canción</h1>

            <form action="POST" className="Formu-cancion">
                <input className='Publicacion-input 'type="text" placeholder="Nombre de la cancion"/>
                <input className='Publicacion-input 'type="text" placeholder="Artista"/>
                <textarea className='Publicacion-input 'type="text" rows="4" cols="50" placeholder="Comentario"/>

                <input className="Publicacion-input" type="file" id="image-input" accept="image/*" placeholder='Subir una imagen' />

                <Button variant='solid'>Publicar canción</Button>
                

            </form>
        </main>

        <BottomNavigation />
        </>
     );
}
 
export default Publicacion;