import React from 'react';

const HomeStatistics = () => {
    return (
        <section className='statistics'>
            <div className='container'>
                <div className='statistics_box'>
                    <div className='statistics_box_item'>
                        <h3 className='statistics_box_item_num'>10</h3>
                        <p className='statistics_box_item_title'>ODDANYCH WORKÓW</p>
                        <p className='statistics_box_item_text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className='statistics_box_item'>
                        <h3 className='statistics_box_item_num'>5</h3>
                        <p className='statistics_box_item_title'>WSPARTYCH ORGANIZACJI</p>
                        <p className='statistics_box_item_text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className='statistics_box_item'>
                        <h3 className='statistics_box_item_num'>7</h3>
                        <p className='statistics_box_item_title'>ZORGANIZOWANYCH ZBIÓREK</p>
                        <p className='statistics_box_item_text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeStatistics;