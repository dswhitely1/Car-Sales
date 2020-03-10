import React, {useContext} from 'react';
import AdditionalFeature from './AdditionalFeature';
import {StoreFunctions} from "../context/StoreFunctions";

const AdditionalFeatures = ({store}) => {
    const {buyItem} = useContext(StoreFunctions);
    return (
        <div className='content'>
            <h4>Additional Features</h4>
            {store.length ? (
                <ol type='1'>
                    {store.map(item => (
                        <AdditionalFeature key={item.id} feature={item} addItem={buyItem}/>
                    ))}
                </ol>
            ) : (
                <p>Nice looking car!</p>
            )}
        </div>
    );
};

export default AdditionalFeatures;
