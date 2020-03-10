import React from 'react';

const AdditionalFeature = ({feature, addItem}) => {
    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button className='button' onClick={() => addItem(feature)}>Add</button>
            {feature.name} (+{feature.price})
        </li>
    );
};

export default AdditionalFeature;
