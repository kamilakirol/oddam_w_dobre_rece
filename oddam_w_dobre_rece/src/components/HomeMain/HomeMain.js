import React from 'react';
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeStatistics from "./HomeStatistics/HomeStatistics";
import HomeSteps from "./HomeSteps/HomeSteps";

const HomeMain = () => {
    return (
        <>
            <HomeBanner/>
            <HomeStatistics/>
            <HomeSteps/>
        </>
    );
};

export default HomeMain;