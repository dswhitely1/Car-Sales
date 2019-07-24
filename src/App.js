import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {StoreProvider} from "./context/StoreFunctions";


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature} from "./store/products/actions";

const App = ({products, addFeature}) => {
  const [state, setState] = useState(products);

  useEffect(()=> {
    setState(products);
  },[products]);

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
      addFeature(item);
  };

  return (
      <StoreProvider value={{removeFeature, buyItem}}>
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
    </StoreProvider>
  );
};

const mapStateToProps = state => ({products: state.products})

export default connect(mapStateToProps,{addFeature})(App);
