import React from 'react';
import {Outlet} from "react-router-dom";
import {auth} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const UserContext = React.createContext();

const FirebaseAuth = () => {
    const [user] = useAuthState(auth)

    return (
        <UserContext.Provider value={user}>
            <Outlet/>
        </UserContext.Provider>
    )
    ;
};

export default FirebaseAuth;