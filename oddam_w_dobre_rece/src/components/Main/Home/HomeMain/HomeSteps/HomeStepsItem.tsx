import React from 'react';

type HomeStepsItemProps = {
    image: string,
    title: string,
    text: string
}

const HomeStepsItem = ({image, title, text}: HomeStepsItemProps) => {
    return (
        <div className='homeSteps_box_item'>
            <img src={image} className='homeSteps_box_item_img' alt='shirt'/>
            <p className='homeSteps_box_item_title'>{title}</p>
            <p className='homeSteps_box_item_text'>{text}</p>
        </div>
    );
};

export default HomeStepsItem;