import {ReactComponent as DecorationImg} from "../../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import React from "react";

const LogOutPage = () => {
    return (
        <section className='logPage logOutPage'>
            <div className='container'>
                <h1 className='title'>Wylogowanie nastąpiło <br/> pomyślnie</h1>
                <DecorationImg />
                <button className='btn logOutPage_btn'><Link className='link' to='/'>Strona główna</Link></button>
            </div>
        </section>
    );
};

export default LogOutPage;