import { createContext, useState } from 'react';

export const MyContext = createContext("");


function AppContextProvider({children}){
    

    
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    

    const value={
        firstName,
        lastName,
        setFirstName,
        setLastName,  
    };

    return <MyContext.Provider value={value}>

      {children}

    </MyContext.Provider>
}

export default AppContextProvider;