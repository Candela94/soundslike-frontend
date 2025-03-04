

import './home.css'

import { CardTendencias } from '../../components/cards/Cards';

import { CardAnimo } from '../../components/cards/Cards';
import { IoMdHappy } from "react-icons/io";



const Home = () => {
    return (
        <>
            <main className="Main-home">

                <h1 className='Main-intro'> ¡Hola, ... ! ¿Qué te gustaría escuchar hoy?</h1>

                <section className="Seccion-tendencias">
                    <h2>Lo último en --</h2>
                    <div className="Galeria">
                        <CardTendencias />
                        <CardTendencias />
                        <CardTendencias />
                        <CardTendencias />

                    </div>
                </section>

                <section className="Seccion-animo">
                    <h2>En qué mood te encuentras?</h2>

                    <div className="Galeria-animo">

                        <div className="Galeria-">
                            <CardAnimo variant='energy' 
                            children = 'energía' 
                            icon= {<IoMdHappy />}/>
                            <CardAnimo variant='melancoly' />
                        </div>

                        <div className="Galeria-">
                            <CardAnimo variant='relax' />
                            <CardAnimo variant='concentrated' />
                        </div>
                    </div>

                </section>




            </main>
        </>
    );
}

export default Home;