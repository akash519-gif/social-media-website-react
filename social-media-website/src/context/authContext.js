import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    //json.parse modifies string returnd to original datatype...which here
    // is object.

    const login = () => {
        // TO DO
        setCurrentUser({ id: 1, name: "Akash", profilePic: 'https://media.gettyimages.com/id/171271182/photo/delhi-university-building-and-corridor.jpg?s=612x612&w=0&k=20&c=3vcPST9RRxk71Xbbli8S7v4ytRRZ0yBiVh5eRPItHS0=' })
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])
    // STRINGIFY USED HERE BCOZ LOCALSTORAGE cant store object                           
    // it can only store string..that's why stringify the object and
    // while getting value we do JSON.Parse as in line 7..as it changes
    // string to original datratype which was stored... in this case
    // original datatype will be object.

    return (
        <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
    )
}