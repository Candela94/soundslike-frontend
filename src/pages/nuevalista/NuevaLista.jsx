

import { Header } from "@/components/header/Header";
import { BottomNavigation } from "@/components/bottom-navigation-header/BottomNavigation";
import './nuevalista.css'
import { Button } from "@/components/buttons/Button.jsx";
import { useState, useContext} from "react";
import { NotificacionesContext } from "@/context/NotificacionesContext";
import { Notificaciones } from "@/components/notificaciones-success-error/Notificaciones.jsx";
import { useNavigate } from "react-router";

const NuevaLista = () => {


    const VITE_URL = import.meta.env.VITE_URL
   
    const [nombreLista, setNombreLista] = useState('')
    const {mostrarNotificacion} = useContext(NotificacionesContext)
    const navigate = useNavigate()


    const handleChange = async (e) => {

        setNombreLista(e.target.value)


    }




    //Crear una lista 
    const handleCrear = async (e) => {


        e.preventDefault();

        if(!nombreLista.trim()) {
            mostrarNotificacion("error", "El nombre de la lista es obligatorio");
            return;
        }

        const token = localStorage.getItem('token');
        
        try {
            const response = await fetch(`${VITE_URL}/api/v1/me/playlists` , {
                method:'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                   
                },
                body: JSON.stringify({nombre: nombreLista})
            });

            const data = await response.json();
            console.log(data)



  

            if(response.ok){
                mostrarNotificacion("success", "Lista creada con éxito")
               setNombreLista('')

               setTimeout(() => {

                   navigate('/bibliotecas')

               },1500)

            }  else {

             mostrarNotificacion("error",  "Error al crear la lista, comprueba si estás registradx");

            }


        } catch(e) {

            mostrarNotificacion("error", "Error al crear la lista");




        }


    }
    


    return ( 
        <>


        <div className="Header-main">


            <Header />

         
             
        <main className="Main-lista">

                <h1 className="Main-titulo">Crea tu nueva lista</h1>
                <div className="Notificacion-container">
                     
                    </div>
            <form onSubmit={handleCrear} className="Formulario-lista">
                <input 
                onChange={handleChange}
                value = {nombreLista}
                className="Formulario-input" type="text" placeholder="Nombre de tu lista"/>
                <Button type='submit'  variant='solid'>Crear lista</Button>
            </form>

        </main>
       

        <BottomNavigation />
        </div>
        </>
     );
}
 
export default NuevaLista;