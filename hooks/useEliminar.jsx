
import { useContext, useEffect, useState } from "react";
import { Notificaciones } from "../src/components/notificaciones-success-error/Notificaciones.jsx";
import { NotificacionesContext } from "../src/context/NotificacionesContext";
import { useParams } from "react-router";


export const useEliminarLista = () => {


    const VITE_URL = import.meta.env.VITE_URL
    // console.log("Haciendo DELETE a:", `${VITE_URL}/api/v1/playlists/${pid}`);
    const { mostrarNotificacion } = useContext(NotificacionesContext)
    const [eliminado, setEliminado] = useState(false);
    const [data, setData] = useState(null);



    const eliminarLista = async ({ pid }) => {

        if(!pid) {
            mostrarNotificacion('error', 'id de lista no está disponible')
            return;
        }

        try {

            const token = localStorage.getItem('token')


            const response = await fetch(`${VITE_URL}/api/v1/playlists/${pid}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`

                }
            })

            console.log(response)
            console.log("Haciendo DELETE a:", `${VITE_URL}/api/v1/playlists/${pid}`);

            if (!response.ok) {
                throw new Error('Error al eliminar la lista');
            }

            let data = null;

            try {

                data = await response.json();
                console.log('Datos recibidos', data);
                setData(data)

            } catch (e) {
                console.warn('no se puedo parsear', e)
            }





            if (response.ok) {
                mostrarNotificacion("success", "Lista eliminada correctamente");
                setEliminado(true);


            }


        } catch (e) {
            console.error('Error al obtener las bibliotecas', e);
            mostrarNotificacion("error", "Error al eliminar la lista")
            setEliminado(false)

        }


    }


    return { eliminarLista, eliminado, data };
}











export const useEliminarCancion =  () => {


    const VITE_URL = import.meta.env.VITE_URL
    // console.log("Haciendo DELETE a:", `${VITE_URL}/api/v1/playlists/${pid}`);
    const { mostrarNotificacion } = useContext(NotificacionesContext)
    const [eliminado, setEliminado] = useState(false);
    const [dataCancion, setDataCancion] = useState(null);

    const {pid} =  useParams();


    const eliminarCancion = async ({pid, cid}) => {


      


        try {

            const token = localStorage.getItem('token')

            const response = await fetch(`${VITE_URL}/api/v1/playlists/${pid}/canciones/${cid}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`

                }
            })


            console.log(response)
            console.log("Haciendo DELETE a:", `${VITE_URL}/api/v1/playlists/${pid}`);

            if (!response.ok) {
                throw new Error('Error al eliminar la lista');
            }

            let dataCancion = null;

            try {

                dataCancion = await response.json();
                console.log('Datos recibidos', dataCancion);
                setDataCancion(dataCancion)

            } catch (e) {
                console.warn('no se puedo parsear', e)
            }



            if (response.ok) {
                mostrarNotificacion("success", "Cancion eliminada correctamente");
                setEliminado(true);


            }






        } catch(e) {

            console.error('Error al obtener la cancion', e);
            mostrarNotificacion("error", "Error al eliminar la cancion")
            setEliminado(false)


        }


    }



    return { eliminarCancion, eliminado, dataCancion}





}














export const useEliminarUsuario = () => {

    const VITE_URL = import.meta.env.VITE_URL
  
    const { mostrarNotificacion } = useContext(NotificacionesContext)
    const [eliminado, setEliminado] = useState(false);
    const [dataUsuario, setDataUsuario] = useState(null);




    const eliminarUsuario = async ({id}) => {


      


        try {

            const token = localStorage.getItem('token')

            const response = await fetch(`${VITE_URL}/api/v1/usuarios/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`

                }
            })


            console.log(response)
            console.log("Haciendo DELETE a:", `${VITE_URL}/api/v1/usuarios/${id}`);

            if (!response.ok) {
                throw new Error('Error al eliminar usuario');
            }

        

            try {

                const datos = await response.json();
                console.log('Datos recibidos', datos);
                setDataUsuario(datos)

            } catch (e) {
                console.warn('no se puedo parsear', e)
            }



            if (response.ok) {
                mostrarNotificacion("success", "Nos abandonas :(");
                setEliminado(true);


            }






        } catch(e) {

            console.error('Error al obtener usuario', e);
            mostrarNotificacion("error", "Error al intentar eliminar")
            setEliminado(false)


        }


    }

    return { eliminarUsuario, eliminado, dataUsuario}


}