import React, {useContext} from 'react';


import AddedFeature from './AddedFeature';
import {StoreFunctions} from "../context/StoreFunctions";

const AddedFeatures = props => {
    const storeFunctions = useContext(StoreFunctions);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeItem={storeFunctions.removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
