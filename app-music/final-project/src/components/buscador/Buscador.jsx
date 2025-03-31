
import './buscador.css'
import { useState } from 'react';



export const Buscador = () => {

    const [searTerm, setSearchTerm] = useState('')

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    

    return ( 
        <>
          <div className="Buscador">
                <input 
                value={searTerm}
                onChange={handleChange}
                type="search" className="Input-buscador" placeholder='Buscar' />
            </div>
            
        
        </>
     );
}