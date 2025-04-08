import './error.css'
import { NavLink } from 'react-router';
import { Button } from '../../components/buttons/Button';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { Header } from '../../components/header/Header';


const Error = () => {
    return (
        <>
 <div className="Header-main">
        <Header />

       
            <main className="Main-error">


                <img className='Error-gif' src="../img/gifs/error.gif" alt="error" />
            </main>


            <div className="Error-texto">
                <p className='Error-p'>¡Vaya! Esta melodía se perdió en el ritmo. Regresa a la página principal y descubre nuevos éxitos."</p>



                <NavLink to= '/home'><Button>Volver al inicio</Button></NavLink>

            </div>
            
            </div>
            < BottomNavigation/>
        </>

    );
}

export default Error;