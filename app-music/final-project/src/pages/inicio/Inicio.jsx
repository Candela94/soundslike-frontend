


import './inicio.css'
import { Button } from '../../components/buttons/Button';
import { NavLink } from 'react-router';

import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';


const Inicio = () => {



    return (
        <>



            <main className="Main-inicio">


                <div className="Intro-texto">
                    <div className="Texto">
                        <h1 className='Main-h1Intro'>SOUNDsLIKE</h1>
                        <p>Escucha, comparte, descubre</p>
                    </div>

                    <div className="Intro-botones">
                        <NavLink to='/registro' ><Button>Regístrate</Button></NavLink>
                        <NavLink to='/login' ><Button variant='solid'>Iniciar sesión</Button></NavLink>
                    </div>

                    <NavLink to='/home'><p>Entrar como invitado</p></NavLink>


                </div>


            </main>

         
        </>



    );
}

export default Inicio;


