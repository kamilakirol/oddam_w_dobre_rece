import React, {useState} from 'react';
import FoundationsListMenu from "./FoundationsListMenu/FoundationsListMenu";
import FoundationsListText from "./FoundationsListText/FoundationsListText";
import FoundationsListContent from "./FoundationsListContent/FoundationsListContent";
import foundationsData from '../../../../dateBase/foundations.json';
import organizationsData from '../../../../dateBase/organizations.json';
import collectionsData from '../../../../dateBase/collections.json';



const HomeFoundationsList = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const foundationsList = [
        {name: 'Fundacjom', text: 'Fundacji', textContent:'Fundacja', content: foundationsData},
        {name: 'Organizacjom pozarządowym', text: 'Organizacji pozarządowych', textContent:'Organizacja', content: organizationsData},
        {name: 'Lokalnym zbiorkom', text: 'Lokalnych zbiórek', textContent:'Zbiórka', content: collectionsData}
    ];

    const itemActive = foundationsList[activeIndex];

    return (
        <div className='foundations_list'>

                    <FoundationsListMenu setActiveIndex={setActiveIndex} activeIndex={activeIndex} foundationsList={foundationsList} setOffset={setOffset}/>
                    <FoundationsListText itemActive={itemActive}/>
                    <FoundationsListContent itemActive={itemActive} offset={offset} setOffset={setOffset}/>

        </div>
    );
};

export default HomeFoundationsList;