

import './home.css'

import { CardTendencias } from '../../components/cards/Cards';
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';

import { CardAnimo } from '../../components/cards/Cards';
import { IoMdHappy } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { FaBoltLightning } from "react-icons/fa6";
import { MdNightlight } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { Button } from '../../components/buttons/Button';
import { MdOutlineNorthEast } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";
import { CardRecomendaciones } from '../../components/cards/Cards';


import { NavLink } from 'react-router';





const Home = () => {
    return (
        <>
        <div className="Header-main">
        <Header />
            <main className="Main-home">

                <h1 className='Main-intro'> ¡Hola, ... ! ¿Qué te gustaría escuchar hoy?</h1>

                {/* Aquí haremos un map de la base de datos */}

                <section className="Seccion-tendencias">
                    <h2 className= 'Main-subheading'>Lo último en SOUNDsLike</h2>
                    <div className="Galeria">
                        <CardTendencias />
                        <CardTendencias />
                        <CardTendencias />
                        <CardTendencias />

                    </div>
                </section>

                <section className="Seccion-animo">
                    <h2 className= 'Main-subheading'>Elige el estado en el que vibras hoy</h2>

                    <div className="Galeria-animo">

                        <div className="Galeria-options">
                            <CardAnimo variant='energy' 
                            children = 'Energía' 
                            icon= {<FaBoltLightning />}/>
                            <CardAnimo
                            
                             children = 'Melancólica' 
                             icon= {<GoHeart />}
                            variant='melancoly' />
                        </div>

                        <div className="Galeria-options">
                            <CardAnimo variant='relax'
                             children = 'Relax' 
                             icon= {<MdNightlight />} />
                            <CardAnimo variant='concentrated'
                             children = 'Concentrada' 
                             icon= {<FaRegLightbulb />} />
                        </div>

                    
                    </div>

                </section>


                <section className="Recomendaciones">
                    <h2 className= 'Main-subheading'>Hecho para ti</h2>

                    <div className="Galeria Galeria-recomendaciones">

                    {/* Aquí irá un map de mi base de datos */}

                
                    <CardRecomendaciones/>
                    <CardRecomendaciones/>
                     <CardRecomendaciones/>
                     <CardRecomendaciones/>
                     </div>
                </section>


                <section className="Seccion-imagen">
           
                    <div className="Sounds-cta">
                        <h1 className='SoundsH1'>¿Todavía no has entrado en nuestra red?</h1>
                        <div className="Sounds-enlace">
                        
                          <NavLink to = '/soundslike'> <FiArrowRightCircle className='ctaButton'/> </NavLink> 
                        </div>
                       
                    </div>
                    
                </section>




            <BottomNavigation />
            </main>
            </div>
        </>
    );
}

export default Home;