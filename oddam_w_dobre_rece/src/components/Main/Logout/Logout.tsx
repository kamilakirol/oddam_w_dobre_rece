import {ReactComponent as DecorationImg} from "../../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import React from "react";

const Logout = () => {
    return (
        <section className='login logOutPage'>
            <div className='container'>
                <h1 className='title'>Wylogowanie nastąpiło <br/> pomyślnie</h1>
                <DecorationImg />
                <button className='btn logout_btn'><Link className='link' to='/'>Strona główna</Link></button>
            </div>
        </section>
    );
};

export default Logout;