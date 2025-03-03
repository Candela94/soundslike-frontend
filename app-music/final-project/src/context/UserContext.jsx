

import { createContext, useState, useContext } from "react";


//1. Creamos el contexto
export const userContext = createContext();


//2. Componente que envuelve el contexto (componente principal)

export const userContextProvider = ({children}) => {

const [user, setUser] = useState(null)

const logIn = (userData) => setUser(userData)
const logOut = () => setUser(null)




    return(
        <userContext.Provider value={{user, logIn, logOut,children}}></userContext.Provider>
    )
}
