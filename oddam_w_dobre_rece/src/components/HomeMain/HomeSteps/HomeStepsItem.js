import React from 'react';

const HomeStepsItem = ({image, title, text}) => {
    return (
        <div className='steps_box_item'>
            <img src={image} className='steps_box_item_img' alt='shirt'/>
            <p className='steps_box_item_title'>{title}</p>
            <p className='steps_box_item_text'>{text}</p>
        </div>
    );
};

export default HomeStepsItem;