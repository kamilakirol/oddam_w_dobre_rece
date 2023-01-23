import React from 'react';
import DecorationImg from '../../../../../assets/Decoration.svg'
import HomeFoundationsList from "./HomeFoundationsList/HomeFoundationsList";

const HomeFoundations = () => {
    return (
        <section id='foundations' className='foundations'>
            <div className='container'>
                <h2 className='title foundations_title'>Komu pomagamy?</h2>
                <img src={DecorationImg} alt='decoration line'/>
                <HomeFoundationsList/>
            </div>

        </section>
    );
};

export default HomeFoundations;