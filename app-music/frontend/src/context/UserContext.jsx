

import { createContext, useState } from "react";


//1. Creamos el contexto
export const UserContext = createContext();


//2. Componente que envuelve el contexto (componente principal)

export const UserContextProvider = ({children}) => {

const [userData, setUserData] = useState({
    nombre:"",
    username:"",
    email:"",
    role:""
})

const LogIn = (userData) => setUserData(userData)
const LogOut = () => setUserData(null)




    return(
        <UserContext.Provider value={{userData, LogIn, LogOut}}>
            {children}
        </UserContext.Provider>
    )
}
