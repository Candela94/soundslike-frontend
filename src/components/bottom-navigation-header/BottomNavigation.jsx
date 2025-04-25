

import { NavLink } from 'react-router';
import './bottom-navigation.css'
import { Reproductor } from '../reproductor/Reproductor';
import { FaCirclePlus } from "react-icons/fa6";
import { BsMusicNoteList } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";

import { FiSearch } from "react-icons/fi";

export const BottomNavigation = () => {


    return (

        <>

         <Reproductor />
            <footer className="Footer">

                <nav className="Footer-nav">

                 


                    <ul className="Footer-ul">
                        <li className="Footer-li"> <NavLink  to='/home'>
                        <BiHomeAlt2 className='Header-link'/> </NavLink>
                           
                        </li>


                        <li className="Footer-li"> <NavLink to='/buscador'>
                        <FiSearch className='Header-link'/></NavLink>
                            

                        </li>
                        <li className="Header-li"><NavLink to='/bibliotecas'> <BsMusicNoteList className='Header-link'/></NavLink></li>


                    </ul>


                </nav>


            </footer>



        </>


    );
} 







