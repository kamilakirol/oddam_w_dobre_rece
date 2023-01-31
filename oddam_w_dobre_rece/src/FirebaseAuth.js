import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {auth} from "./firebase";
import {onAuthStateChanged} from "firebase/auth";


export const UserContext = React.createContext();

const FirebaseAuth = () => {
    const userState = useState(null);
    const [, setUser] = userState;
    console.log(userState)

    onAuthStateChanged(auth, (userData) => {
            if (userData) {
                setUser(userData)
                console.log('zalogowano')

            } else {
                console.log('wylogowano')
            }
        });

    // useEffect(() => {
    //     if (user) {
    //         navigate('/oddaj-rzeczy')
    //     } else {
    //         navigate('/')
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
    // initAuth(onLogin, onLogout)
    return (
        <UserContext.Provider value={userState}>
            <Outlet/>
        </UserContext.Provider>
    )
    ;
};

export default FirebaseAuth;