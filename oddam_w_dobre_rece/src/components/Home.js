import React from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMain from "./HomeMain/HomeMain";
import HomeFooter from "./HomeFooter/HomeFooter";


const Home = () => {
    return (
        <div>
            <HomeHeader/>
            <HomeMain/>
            <HomeFooter/>
        </div>
    );
};

export default Home