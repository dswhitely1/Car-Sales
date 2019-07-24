import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreProvider} from "./context/StoreFunctions";


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {ADD_FEATURE, REMOVE_FEATURE} from "./store/products/types";

const App = () => {
    const state = useSelector(state => state.products);
    const dispatch = useDispatch();
    const removeFeature = item => {
        // dispatch an action here to remove an item
        dispatch({
            type: REMOVE_FEATURE,
            payload: item
        })
    };

    const buyItem = item => {
        // dipsatch an action here to add an item
        dispatch({
            type: ADD_FEATURE,
            payload: item
        })
    };

    return (
        <StoreProvider value={{removeFeature, buyItem}}>
            <div className='boxes'>
                <div className='box'>
                    <Header car={state.car}/>
                    <AddedFeatures car={state.car}/>
                </div>
                <div className='box'>
                    <AdditionalFeatures store={state.store}/>
                    <Total car={state.car} additionalPrice={state.additionalPrice}/>
                </div>
            </div>
        </StoreProvider>
    );
};

export default App;
