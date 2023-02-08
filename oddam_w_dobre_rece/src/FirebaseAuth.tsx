import {Outlet} from "react-router-dom";
import {auth} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {User} from "firebase/auth";
import {createContext} from "react";


export const UserContext = createContext<User | null | undefined>(null);

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