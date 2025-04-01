
import './homesounds.css'

import { Button } from '../../components/buttons/Button.jsx';
import { NavLink } from 'react-router';


const HomeSounds = () => {


    return (
        <>





            <main className="Main-sounds">
                <img src="../img/soundsportada.jpg" alt="sounds" className="Main-imagenSounds" />


                <div className="Main-texto">
                    <h1 className='Eslogan'>Descubre la música de una manera única</h1>
                   <NavLink to='/soundslike'> <Button variant='solid'>Entrar en SoundsLike</Button></NavLink>
                </div>

            </main>






        </>
    );
}

export default HomeSounds




