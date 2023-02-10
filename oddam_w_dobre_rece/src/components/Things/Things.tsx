import React from 'react';
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import ThingsBanner from "./ThingsBanner/ThingsBanner";
import ThingsMain from "./ThingsMain/ThingsMain";

const Things = () => {
    return (
        <div>
            <Header/>
            <ThingsBanner/>
            <ThingsMain/>
            <Footer/>
        </div>
    );
};

export default Things;