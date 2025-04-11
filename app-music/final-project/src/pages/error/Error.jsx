import './error.css'
import { NavLink } from 'react-router';
import { Button } from '../../components/buttons/Button';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { Header } from '../../components/header/Header';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Error = () => {
    return (
        <>
            <div className="Header-main">
                <Header />


                <main className="Main-error">

                    <img src="/img/gifs/404.gif" alt="" className="Error-gif" />


                    <div className="Error-texto">
                        <h1 className="Error">ERROR 404</h1>
                        <p className='Error-p'>¡Vaya! Esta melodía se perdió en el ritmo. Regresa a la página principal y descubre nuevos éxitos."</p>


                        <NavLink to='/home'><Button variant='solid'>Volver al inicio</Button></NavLink>

                    </div>
                </main>



            </div>
            < BottomNavigation />
        </>

    );
}

export default Error;