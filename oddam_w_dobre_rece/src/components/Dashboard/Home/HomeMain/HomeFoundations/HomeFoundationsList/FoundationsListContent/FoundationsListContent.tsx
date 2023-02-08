import React, {Dispatch, SetStateAction} from 'react';
import ReactPaginate from "react-paginate";
import {ItemActiveFoundation} from "../../../../../../../types";

type FoundationsListContentProps = {
    itemActiveFoundation: ItemActiveFoundation,
    offset: number,
    setOffset: Dispatch<SetStateAction<number>>
}

const FoundationsListContent = ({itemActiveFoundation, offset, setOffset}: FoundationsListContentProps) => {

    const placeListPerPage = 3;
    const placeList = itemActiveFoundation.content.slice(offset, offset + placeListPerPage);
    const pageCount = Math.ceil(itemActiveFoundation.content.length / placeListPerPage);

    const changePage = ({selected} : { selected: number }) : void => {
        const newOffset = (selected * placeListPerPage) % itemActiveFoundation.content.length;
        setOffset(newOffset)
    }

    return (
            <ul className='foundationsListContent'>
                {placeList.map((place, index) => {
                        return (
                            <li key={index} className='foundationsListContent_item'>
                                <div className='foundationsListContent_item_box'>
                                    <div className='foundationsListContent_item_box_info'>
                                        <h3 className='foundationsListContent_item_box_info_title'>{itemActiveFoundation.textContent} {place.name}</h3>
                                        <p className='foundationsListContent_item_box_info_text'>{place.description}</p>
                                    </div>
                                    <div className='foundationsListContent_item_box_things'>
                                        {place.things}
                                    </div>
                                </div>
                            </li>
                        )
                    })}

                {itemActiveFoundation.content.length <= 3 ? null :
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
