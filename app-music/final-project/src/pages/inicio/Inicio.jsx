


import './inicio.css'
import { Button } from '../../components/buttons/Button';
import { NavLink } from 'react-router';



const Inicio = () => {


    
    return ( 
        <>
       
       
        <main className="Main-inicio">
            

            <div className="Intro-texto">
             <div className="Texto">
            <h1 className='Main-h1Intro'>SOUNDsLIKE</h1>
            <p>Escucha, comparte, descubre</p>
            </div>   
            <NavLink to='/home'><Button variant='primary'>Entrar</Button></NavLink>
            </div>

      
        </main>
        </>



     );
}
 
export default Inicio;


