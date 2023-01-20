import React from 'react';

const FoundationsListText = ({itemActive}) => {
    return (
        <div className='foundationsListText'>
            W naszej bazie znajdziesz listę zweryfikowanych {itemActive.text}, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </div>
    );
};

export default FoundationsListText;