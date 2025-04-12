
import { Header } from '../../components/header/Header';
import SubHeader from '../../components/subheader/Subheader';
import { Cancion } from '../../components/cancion/Cancion';
import './bibliotecas.css'
import { NavLink } from 'react-router';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';

const Favoritos = () => {

    return (


        <>

            <div className="Header-main">
                <Header />

                <div className="Contenido">

                    <div className="Subheader-intro">
                        <SubHeader />
                        <div className="Bibliotecas-intro">
                            <h1 className='Bibliotecas-titulo'>Mis favoritos</h1>
                          
                        </div>
                    </div>


                    <main className="Main-bibliotecas">


                        <div className="Galeria-listas">
                            <Cancion />
                        </div>


            </main>
                </div>


        </div >

<BottomNavigation />
           

        </>


    );
}

export default Favoritos;