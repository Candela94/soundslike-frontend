


import { Header } from "../../components/header/Header";
import'./reproductorpage.css'

import { BarraReproduccion } from "../../components/barra-reproduccion/BarraReproduccion";

import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation";



const ReproductorPage = () => {



    return (  

        <>
         <div className="Header-main">
        <Header />
        
        <main className="Main-reproductor">
            <img src="./img/sensenra.jpg" alt="fondo" className="Fondo" />

            <div className="Reproductor-card">
                <img src="./img/sensenra.jpg" alt="imagen" className="Reproductor-imagen" />

            <BarraReproduccion />
            </div>


        </main>
<BottomNavigation/>
</div>

       
        </>

    );
}


 
export default ReproductorPage;