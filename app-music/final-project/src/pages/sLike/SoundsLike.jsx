import { Header } from "../../components/header/Header";
import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation";
import { GoHeart } from "react-icons/go";
import { TbShare3 } from "react-icons/tb";
import { TbMusicPlus } from "react-icons/tb";

import './soundslike.css'

const Sound = () => {



  return (


    <>
 <div className="Header-main">

      <Header />


      <main className="Main">

        <div className="Ficha-usuario">


          <div className="Nombre-usuario">
            <img src="." alt="usuario" className="Usuario-img" />
            <h4 className="Nombre">Nombre de usuario</h4>
          </div>



          <img src="../../public/img/default.jpg" alt="usuario" className="Publicacion-img" />



          <div className="Imagen-cancion">

            <div className="Info-artista">
              <h3 className="Cancion-post">Canción</h3>
              <p>Artista</p>
            </div>
          </div>


          <div className="Ficha-iconos">


            <div className="Iconos-likeShare">
              <GoHeart className="icons-publicaciones"/>
              <TbShare3 className="icons-publicaciones"/>

            </div>

            <TbMusicPlus className="icons-publicaciones"/>


          </div>


        </div>


      </main>
</div>

      <BottomNavigation />

    </>




  );
}

export default Sound;