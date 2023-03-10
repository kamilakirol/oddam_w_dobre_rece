import React from 'react';
import DecorationImg from "../../../../../assets/Decoration.svg";
import ShirtIcon from "../../../../../assets/ShirtIcon.svg";
import BagIcon from "../../../../../assets/BagIcon.svg";
import MagnifierIcon from "../../../../../assets/MagnifierIcon.svg";
import RecyclingIcon from "../../../../../assets/RecyclingIcon.svg";
import HomeStepsItem from "./HomeStepsItem";
import HomeStepsButton from "./HomeStepsButton";

const HomeSteps = () => {
    return (
        <section id='steps' className='homeSteps'>
            <div className='container homeSteps_container'>
                <h2 className='title'>Wystarczą 4 proste kroki</h2>
                <img src={DecorationImg} className='decoration' alt='decoration line'/>

                    <div className='homeSteps_box'>
                        <HomeStepsItem image={ShirtIcon} title='Wybierz rzeczy' text=' ubrania , zabawki, sprzęt i inne'/>
                        <HomeStepsItem image={BagIcon} title='Spakuj je' text='skorzystaj z worków na śmieci'/>
                        <HomeStepsItem image={MagnifierIcon} title='Zdecyduj komu chcesz pomóc' text='wybierz zaufane miejsce'/>
                        <HomeStepsItem image={RecyclingIcon} title='Zamów kuriera' text='kurier przyjedzie w  dogodnym terminie' />
                    </div>

                <div className='homeSteps_button'>
                    <HomeStepsButton/>
                </div>
            </div>
        </section>
    );
};

export default HomeSteps;