import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {auth} from "./firebase";
import {onAuthStateChanged} from "firebase/auth";
import { useLocation } from 'react-router-dom';

export const UserContext = React.createContext();

const FirebaseAuth = () => {
    const userState = useState({});
    const [user, setUser] = userState;

    console.log(userState)

    onAuthStateChanged(auth, (userData) => {
        if (userData) {
            setUser(userData)
            console.log('zalogowano')

        } else {
            console.log('wylogowano')
        }
    });

    // const onAuthChange = (userData) => {
    //     if (userData) {
    //         if(userData.uid) {
    //             setUser(userData)
    //         }
    //     } else {
    //         if(user?.uid) {
    //             setUser({})
    //         }
    //     }
    // }
    //
    // onAuthStateChanged(auth, onAuthChange);

    // useEffect(() => {
    //     if (user.uid) {
    //         if (location.pathname !== '/') {
    //             navigate('/')
    //         }
    //     } else {
    //         if (location.pathname !== '/wylogowano') {
    //             navigate('/wylogowano')
    //         }
    //     }
    //
    // },[user])

    //
    // const onLogin = (userData) => {
    //     setUser(userData)
    //     console.log('zalogowano')
    // }
    // const onLogout = () => {
    //     setUser(null)
    //     console.log('wylogowano')
    // }

    return (
        <UserContext.Provider value={userState}>
            <Outlet/>
        </UserContext.Provider>
    )
    ;
};

export default FirebaseAuth;