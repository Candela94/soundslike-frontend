

import { createContext, useState, useEffect } from "react";


//1. Creamos el contexto
export const UserContext = createContext();


//2. Componente que envuelve el contexto (componente principal)

export const UserContextProvider = ({children}) => {

const [userData, setUserData] = useState(null)


useEffect(() => {

    const user = localStorage.getItem('userData');
    if(user) {
        try{

            setUserData(JSON.parse(user))


        } catch(err) {

            console.error('Error al parsear userData')


        }
    }
},[])


const LogIn = (data) => {
    console.log("datos de login", data)
    localStorage.setItem('userId', data._id)
    localStorage.setItem('userData', JSON.stringify(data))
    setUserData(data)



}
const LogOut = () => setUserData(null)




    return(
        <UserContext.Provider value={{userData, LogIn, LogOut}}>
            {children}
        </UserContext.Provider>
    )
}
