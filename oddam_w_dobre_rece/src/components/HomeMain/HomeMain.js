import React from 'react';
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeStatistics from "./HomeStatistics/HomeStatistics";
import HomeSteps from "./HomeSteps/HomeSteps";
import HomeAboutUs from "./HomeAboutUs/HomeAboutUs";

const HomeMain = () => {
    return (
        <>
            <HomeBanner/>
            <HomeStatistics/>
            <HomeSteps/>
            <HomeAboutUs/>
        </>
    );
};

export default HomeMain;