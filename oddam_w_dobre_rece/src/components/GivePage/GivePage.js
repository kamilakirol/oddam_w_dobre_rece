import React from 'react';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import GivePageBanner from "./GivePageBanner/GivePageBanner";
import GivePageMain from "./GivePageMain/GivePageMain";

const GivePage = () => {
    return (
        <div>
            <Navigation/>
            <GivePageBanner/>
            <GivePageMain/>
            <Footer/>
        </div>
    );
};

export default GivePage;