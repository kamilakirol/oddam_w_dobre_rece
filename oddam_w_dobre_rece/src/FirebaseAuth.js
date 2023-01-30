import React, {useState} from 'react';
import {initAuth} from "./firebase";
import {Outlet} from "react-router-dom";

export const UserContext = React.createContext();

const FirebaseAuth = () => {
    const userState = useState(null);
    const [user, setUser] = userState;
    console.log(userState)

    const onLogin = (userData) => {
        setUser(userData)
    }
    const onLogout = () => {
        console.log('wylogowano')
    }
    initAuth(onLogin, onLogout)
    return (
        <UserContext.Provider value={userState}>
            <Outlet/>
        </UserContext.Provider>
    )
    ;
};

export default FirebaseAuth;