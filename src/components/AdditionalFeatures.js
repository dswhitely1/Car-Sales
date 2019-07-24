import React, {useContext} from 'react';
import AdditionalFeature from './AdditionalFeature';
import {StoreFunctions} from "../context/StoreFunctions";

const AdditionalFeatures = props => {
    const storeFunctions = useContext(StoreFunctions)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} addItem={storeFunctions.buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
