import React from 'react';
import HomeStatisticsItem from "./HomeStatisticsItem";

const HomeStatistics = () => {
    return (
        <section className='statistics'>
            <div className='container'>
                <div className='statistics_box'>
                   <HomeStatisticsItem number='10' title='ODDANYCH WORKÓW'/>
                    <HomeStatisticsItem number='5' title='WSPARTYCH ORGANIZACJI'/>
                    <HomeStatisticsItem number='7' title='ZORGANIZOWANYCH ZBIÓREK' />
                </div>
            </div>
        </section>
    );
};

export default HomeStatistics;