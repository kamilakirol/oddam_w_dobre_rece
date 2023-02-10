import React from 'react'
import DecorationImg from "../../../assets/Decoration.svg"
import ThingsBannerSteps from "./ThingsBannerSteps/ThingsBannerSteps";

const ThingsBanner = () => {
    const steps = [
        {num: 1, text: 'Wybierz rzeczy'},
        {num: 2, text: 'Spakuj je w worki'},
        {num: 3, text: 'Wybierz fundację'},
        {num: 4, text: 'Zamów kuriera'}
    ]

    return (
        <section className='thingsBanner'>
            <div className='overlay'>
                <div className='container'>
                    <div className='thingsBanner_box'>
                        <h1 className='title'>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h1>
                        <img src={DecorationImg} alt='decoration line'/>
                        <h2 className='thingsBanner_box_text'>Wystarczą 4 proste kroki:</h2>
                        <div className='thingsBanner_box_steps'>
                            {steps.map(step => {
                                return <ThingsBannerSteps key={step.num} num={step.num} text={step.text}/>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThingsBanner;