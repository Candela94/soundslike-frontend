
import './buscador.css'
import { useState } from 'react';



export const Buscador = ({searchTerm, setSearchTerm}) => {


    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    

    return ( 
        <>
          <div className="Buscador">
                <input 
                value={searchTerm}
                onChange={handleChange}
                type="search" className="Input-buscador" placeholder='Buscar' />
            </div>
            
        
        </>
     );
}