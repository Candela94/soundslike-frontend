
import './buscadorpag.css'
import { Buscador } from '../../components/buscador/Buscador.jsx';
import { Header } from '../../components/header/Header.jsx';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation.jsx';


const BuscadorPag = () => {
    return (
        <>
<Header />
        <main className="Main-buscador">
            <h2 className='Main-titulo'>Encuentra la canción perfecta para tu momento</h2>
       <Buscador />
       </main>
       <BottomNavigation />
        </>
    );
}

export default BuscadorPag;