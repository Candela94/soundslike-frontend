

import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";

import { Header } from "../../components/header/Header";
import'./reproductorpage.css'







const ReproductorPage = () => {



    return (  

        <>
        <Header />
        
        <main className="Main-reproductor">
            <img src="./img/sensenra.jpg" alt="fondo" className="Fondo" />

            <div className="Reproductor-card">
                <img src="./img/sensenra.jpg" alt="imagen" className="Reproductor-imagen" />

            </div>

        </main>



        {/* <div className="Reproductor-page">
        <TbPlayerTrackPrevFilled />


        <TbPlayerPlayFilled />


        <TbPlayerTrackNextFilled />


        </div> */}
        </>

    );
}


 
export default ReproductorPage;