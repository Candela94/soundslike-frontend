
import './buscadorpag.css'
import { Buscador } from '../../components/buscador/Buscador.jsx';
import { Header } from '../../components/header/Header.jsx';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation.jsx';


const BuscadorPag = () => {
    return (
        <>
        <div className="Header-main">
<Header />
        <main className="Main-buscador">
            <h2 className='Main-titulo'>Busca tu canción</h2>
       <Buscador />
       </main>
       </div>
       <BottomNavigation />
        </>
    );
}

export default BuscadorPag;