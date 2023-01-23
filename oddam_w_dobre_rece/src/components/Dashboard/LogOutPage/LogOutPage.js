import React from 'react';
import DecorationImg from "../../../assets/Decoration.svg";
import {Link} from "react-router-dom";

const LogOutPage = () => {
    return (
        <section className='logPage logOutPage'>
            <div className='container'>
                <h1 className='title'>Wylogowanie nastąpiło <br/> pomyślnie</h1>
                <img className='decoration' src={DecorationImg} alt='decoration line'/>
                <button className='btn logOutPage_btn'><Link className='link' to='/'>Strona główna</Link></button>
            </div>
        </section>
    );
};

export default LogOutPage;