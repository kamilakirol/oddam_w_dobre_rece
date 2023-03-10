import React from 'react';

type HomeStatisticItemProps = {
    number: string,
    title: string
}

const HomeStatisticsItem = ({number, title} : HomeStatisticItemProps) => {
    return (
        <div className='statistics_box_item'>
            <h3 className='statistics_box_item_num'>{number}</h3>
            <p className='statistics_box_item_title'>{title}</p>
            <p className='statistics_box_item_text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div>
    );
};

export default HomeStatisticsItem;