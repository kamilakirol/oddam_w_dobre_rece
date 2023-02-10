import {ReactComponent as DecorationImg} from "../../../assets/Decoration.svg";
import RegistrationForm from "./RegistrationForm";
import React from "react";

const Registration = () => {
    return (
        <section className='login'>

            <div className='container'>
                <h1 className='title'>Załóż konto</h1>
                <DecorationImg />
                {/*<img className='decoration' src={DecorationImg} alt='decoration line'/>*/}
                <RegistrationForm/>
            </div>

        </section>
    );
};

export default Registration;