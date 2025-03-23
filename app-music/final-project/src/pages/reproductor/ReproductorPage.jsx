


import { Header } from "../../components/header/Header";
import'./reproductorpage.css'

import { BarraReproduccion } from "../../components/barra-reproduccion/BarraReproduccion";





const ReproductorPage = () => {



    return (  

        <>
        <Header />
        
        <main className="Main-reproductor">
            <img src="./img/sensenra.jpg" alt="fondo" className="Fondo" />

            <div className="Reproductor-card">
                <img src="./img/sensenra.jpg" alt="imagen" className="Reproductor-imagen" />

            <BarraReproduccion />
            </div>


        </main>



       
        </>

    );
}


 
export default ReproductorPage;