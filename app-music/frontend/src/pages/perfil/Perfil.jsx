
import './perfil.css'
import { TbContract } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { MdOutlinePayments } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";

import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';



const Perfil = () => {
    return (
        <>
         <div className="Header-main">
            <Header />

            <div className="Main-perfil">



                <div className="Perfil">

                    <div className="Imagen-edit">
                        <img src="./img/sensenra.jpg " alt="imagenPerfil" className="Perfil-img"></img>
                        <FaEdit className='Perfil-edit' />
                    </div>


                    <div className="Perfil-info">
                        <h3 className='Nombre-usuario'>Nombre de usuario</h3>
                    </div>

                </div>


                <section className="Perfil-contenido">
                    <ul className="Perfil-opciones">



                        <li>
                            <div className='Perfil-item'>
                                <FaUserPen />

                                <p className="Perfil-texto">Editar mi perfil</p>
                            </div>
                        </li>

                        <li>
                            <div className='Perfil-item'>
                                <GoHeart />
                                <p className="Perfil-texto">Tus favoritos de este mes</p>
                            </div>
                        </li>




                        <li>
                            <div className='Perfil-item'>
                                <TbContract />

                                <p className="Perfil-texto">Mi suscripción</p>
                            </div>
                        </li>




                        <li>
                            <div className='Perfil-item'>
                                <MdOutlinePayments />

                                <p className="Perfil-texto">Método de pago</p>
                            </div>
                        </li>


                        <li>
                            <div className='Perfil-item'>
                                <svg width="14" height="15" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.21436 50.6786V78.3214M36.8572 27.6428V101.357M64.5001 4.60712V124.393M92.1429 27.6428V101.357M119.786 50.6786V78.3214" stroke="#EEAA6F" strokeWidth="9.21429" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="Perfil-texto">Mi cuenta SOUNDsLike</p>
                            </div>
                        </li>




                    </ul>

                </section>


            </div>
</div>
            <BottomNavigation />
        </>
    );
}

export default Perfil;