

import './header.css'
import { BsMusicNoteList } from "react-icons/bs";

import { TbMenu4 } from "react-icons/tb";

import { useState } from 'react';
import { MenuLateral } from '../menu/Menu';
import { NavLink } from 'react-router';


export const Header = () => {

    const [opened, setOpened] = useState(false)



    const handleOpen = () => {
        setOpened(prevState => !prevState)
    }



    return ( 

        <>
    <header className="Header">
        <nav className="Header-nav">
            <ul className="Header-ul">
                 <li className="Header-li" onClick={handleOpen}><TbMenu4  className='Header-icon' /></li>
                <li className="Header-li"><NavLink to = '/bibliotecas'><BsMusicNoteList className='Header-icon'  /></NavLink></li>
            </ul>
        </nav>

    </header>
    <MenuLateral opened = {opened} />

        </>
     );
}