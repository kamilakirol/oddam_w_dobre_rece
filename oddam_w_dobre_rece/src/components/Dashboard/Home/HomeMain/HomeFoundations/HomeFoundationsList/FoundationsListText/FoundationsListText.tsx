import React from 'react';
import {ItemActiveFoundation} from "../../../../../../../types";

type FoundationsListTextProps = {
    itemActiveFoundation : ItemActiveFoundation
}

const FoundationsListText = ({itemActiveFoundation}: FoundationsListTextProps) => {
    return (
        <div className='foundationsListText'>
            W naszej bazie znajdziesz listę zweryfikowanych {itemActiveFoundation.text}, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </div>
    );
};

export default FoundationsListText;