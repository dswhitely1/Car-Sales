import React, {useContext} from 'react';
import AddedFeature from './AddedFeature';
import {StoreFunctions} from "../context/StoreFunctions";

const AddedFeatures = ({car}) => {
    const {removeFeature} = useContext(StoreFunctions);
    return (
        <div className='content'>
            <h6>Added features:</h6>
            {car.features.length ? (
                <ol type='1'>
                    {car.features.map(item => (
                        <AddedFeature key={item.id} feature={item} removeItem={removeFeature}/>
                    ))}
                </ol>
            ) : (
                <p>You can purchase items from the store.</p>
            )}
        </div>
    );
};

export default AddedFeatures;
