import {ReactComponent as DecorationImg} from "../../../assets/Decoration.svg";
import RegistrationPageForm from "./RegistrationPageForm/RegistrationPageForm";
import React from "react";

const RegistrationPage = () => {
    return (
        <section className='logPage'>

            <div className='container'>
                <h1 className='title'>Załóż konto</h1>
                <DecorationImg />
                {/*<img className='decoration' src={DecorationImg} alt='decoration line'/>*/}
                <RegistrationPageForm/>
            </div>

        </section>
    );
};

export default RegistrationPage;