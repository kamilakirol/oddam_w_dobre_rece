import React from 'react';
import Navigation from "../Navigation/Navigation";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
import GivePageBanner from "./GivePageBanner/GivePageBanner";

const GivePage = () => {
    return (
        <div>
            <Navigation/>
            <GivePageBanner/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default GivePage;