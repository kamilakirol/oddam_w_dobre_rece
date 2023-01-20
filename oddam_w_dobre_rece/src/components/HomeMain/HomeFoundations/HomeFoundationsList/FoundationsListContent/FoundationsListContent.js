import React from 'react';
import ReactPaginate from "react-paginate";

const FoundationsListContent = ({itemActive, offset, setOffset}) => {

    const placeListPerPage = 3;
    const placeList = itemActive.content.slice(offset, offset + placeListPerPage);
    const pageCount = Math.ceil(itemActive.content.length / placeListPerPage);

    const changePage = ({selected}) => {
        const newOffset = (selected * placeListPerPage) % itemActive.content.length;
        setOffset(newOffset)
    }

    return (
            <ul className='foundationsListContent'>
                {placeList.map((place, index) => {
                        return (
                            <li key={index} className='foundationsListContent_item'>
                                <div className='foundationsListContent_item_box'>

                                    <div className='foundationsListContent_item_box_info'>
                                        <h3 className='foundationsListContent_item_box_info_title'>{itemActive.textContent} {place.name}</h3>
                                        <p className='foundationsListContent_item_box_info_text'>{place.description}</p>
                                    </div>

                                    <div className='foundationsListContent_item_box_things'>
                                        {place.things}
                                    </div>

                                </div>
                            </li>
                        )
                    })}
                {itemActive.content.length <= 3 ? null :
                    <ReactPaginate
                        previousLabel={null}
                        nextLabel={null}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'pagination'}
                        pageClassName={'pagination_item'}
                        pageLinkClassName={'pagination_item_link'}
                    />}
            </ul>
    );
};

export default FoundationsListContent;
