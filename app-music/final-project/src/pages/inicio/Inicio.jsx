


import './inicio.css'
import { Button } from '../../components/buttons/Button';
import { NavLink } from 'react-router';



const Inicio = () => {


    
    return ( 
        <>
       
       
        <main className="Main-inicio">
            

            <div className="Intro-texto">
             <div className="Texto">
            <h1 className='Main-h1Intro'>TSUENA</h1>
            <p>Escucha, comparte, descubre</p>
            </div>   
            <NavLink to='/home'><Button variant='primary'>Entrar</Button></NavLink>
            </div>

        <img src="../../public/img/vinilo.jpg" alt="portada" className="Inicio-img" />
      
        </main>
        </>



     );
}
 
export default Inicio;


