

import { Header } from "../../components/header/Header";
import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation";

import './info.css'



const Info = () => {



  return (

    <>

     
        <main className="About">





          <h1 className="About-cabecera">Bienvenidx a SOUNDsLIKE</h1>



          <p className="About-text">SOUNDsLike es una plataforma de streaming musical moderna  diseñada para los verdaderos amantes de la música.
            Nuestra misión es ofrecerte una experiencia fluida, rápida y personalizada al momento de escuchar tus canciones favoritas.</p>



          <div className="About-secciones">


            <div className="About-seccion">
            <h2 className="About-subheader">✨ Características principales</h2>
            <ul className="About-list">
              <li>🎧 Reproducción de canciones en alta calidad</li>
              <li>❤️ Añade canciones a tus favoritos</li>
              <li>📚 Organiza tu música en listas personalizadas</li>
              <li>⏮️ Controles intuitivos: play, pause, siguiente y anterior</li>
              <li>💾 Reanudación automática de la última canción que escuchaste</li>
              <li>🔎 Búsqueda de canciones y artistas</li>
            </ul>
            </div>

            <div className="About-seccion">

            <h2 className="About-subheader">🚀 ¿Qué la hace especial?</h2>
            <p className="About-text">
              A diferencia de otras plataformas, <strong>SoundsLike</strong> está centrada en la simplicidad y la velocidad.
              Sin anuncios molestos, sin distracciones. Solo tú y tu música.
            </p>
            </div>



            <div className="About-seccion">
            <h2 className="About-subheader">📲 Disponible próximamente en:</h2>
            <ul className="About-list">
              <li>✅ Web</li>
              <li>📱 iOS</li>
              <li>📱 Android</li>
            </ul>

            </div>


            <div className="About-seccion">

            <h2 className="About-subheader">🛠️ En desarrollo...</h2>
            <p className="About-text">
              SoundsLike aún está en fase beta. Estamos trabajando constantemente para mejorar tu experiencia y añadir nuevas funcionalidades como recomendaciones inteligentes, modo offline y mucho más.
            </p>
            </div>

          </div>


        </main>

     



    </>
  );
}


export default Info;