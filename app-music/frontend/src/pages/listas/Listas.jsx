
import { Header } from "../../components/header/Header";
import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router";


const Listas = () => {

    
const {bibliotecas} = useFetch()
const {id} = useParams()

const bibliotecaContenido = bibliotecas.find(b=> b._id === id)

    return ( 
        <>
<div className="Header-main">
    <Header/>


        <main className="Main-bibliotecas">
        <h1>{bibliotecaContenido ? bibliotecaContenido.nombre : 'Cargando biblioteca'}</h1>
        </main>
        </div>
        <BottomNavigation/>
        </>
     );
}
 
export default Listas;